"use client";

import { useEffect, useRef, useCallback, useMemo, useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import createGlobe from "cobe";
import ConnectionArc from "./ConnectionArc";

/* ─── Constants ──────────────────────────────────────────────────── */

const INDIA_LAT = 20.5937;
const INDIA_LNG = 78.9629;
const UK_LAT = 55.3781;
const UK_LNG = -3.436;

/* Project lat/lng to normalised canvas x/y (equirectangular) */
function latLngToXY(lat, lng, size, phi, theta) {
  // Spherical to canvas using globe rotation state
  const lngRad = ((lng - (phi * 180) / Math.PI) * Math.PI) / 180;
  const latRad = (lat * Math.PI) / 180;
  const x = size / 2 + (size / 2) * Math.cos(latRad) * Math.sin(lngRad) * 0.85;
  const y = size / 2 - (size / 2) * Math.sin(latRad) * 0.85;
  return { x, y };
}

/* ─── Particle system ────────────────────────────────────────────── */
const PARTICLE_COUNT = 28;

function generateParticles(size) {
  return Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
    id: i,
    x: Math.random() * size,
    y: Math.random() * size,
    r: Math.random() * 2.2 + 0.6,
    color: i % 3 === 0 ? "#D89B1D" : i % 3 === 1 ? "#93C5FD" : "#ffffff",
    opacity: Math.random() * 0.5 + 0.15,
    dx: (Math.random() - 0.5) * 0.22,
    dy: (Math.random() - 0.5) * 0.22,
    phase: Math.random() * Math.PI * 2,
    speed: Math.random() * 0.008 + 0.004,
  }));
}

/* ─── Satellite system ───────────────────────────────────────────── */
const SATELLITE_DEFS = [
  { orbitRx: 0.52, orbitRy: 0.18, speed: 0.0006, phase: 0, tiltX: 30, color: "#93C5FD" },
  { orbitRx: 0.45, orbitRy: 0.45, speed: 0.0004, phase: Math.PI, tiltX: 60, color: "#D89B1D" },
];

/* ─── OrbitRing ──────────────────────────────────────────────────── */
const OrbitRing = memo(function OrbitRing({ size, rx, ry, color, duration, delay, tiltX }) {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 1.2 }}
    >
      <motion.div
        className="absolute rounded-full border"
        style={{
          width: size * rx * 2,
          height: size * ry * 2,
          borderColor: color,
          borderWidth: 0.8,
          opacity: 0.22,
          transform: `rotateX(${tiltX}deg)`,
          background: `radial-gradient(ellipse at center, ${color}08 0%, transparent 70%)`,
          boxShadow: `0 0 12px 1px ${color}20, inset 0 0 12px 1px ${color}10`,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  );
});

/* ─── PulseMarker ────────────────────────────────────────────────── */
const PulseMarker = memo(function PulseMarker({ x, y, label, color = "#D89B1D" }) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: x - 10, top: y - 10, width: 20, height: 20 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, type: "spring" }}
    >
      {/* Outer pulse rings */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full"
          style={{ borderWidth: 1, borderColor: color, borderStyle: "solid" }}
          animate={{ scale: [1, 2.5 + i * 0.5], opacity: [0.7, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.55,
            ease: "easeOut",
          }}
        />
      ))}
      {/* Inner glow dot */}
      <motion.div
        className="absolute rounded-full"
        style={{
          inset: "5px",
          background: `radial-gradient(circle, white 30%, ${color} 100%)`,
          boxShadow: `0 0 10px 4px ${color}99, 0 0 20px 6px ${color}44`,
        }}
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Label */}
      <motion.div
        className="absolute text-[9px] font-semibold tracking-widest uppercase whitespace-nowrap"
        style={{
          top: -16,
          left: "50%",
          transform: "translateX(-50%)",
          color: color,
          textShadow: `0 0 8px ${color}`,
        }}
      >
        {label}
      </motion.div>
    </motion.div>
  );
});

/* ─── PremiumGlobe ───────────────────────────────────────────────── */
export default function PremiumGlobe({ size: propSize, imageSrc }) {
  /* Responsive size */
  const [size, setSize] = useState(propSize || 520);
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setSize(propSize ? Math.min(propSize, 320) : 320);
      else if (window.innerWidth < 1024) setSize(propSize ? Math.min(propSize, 430) : 430);
      else setSize(propSize || 520);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [propSize]);

  const canvasRef = useRef(null);
  const globeRef = useRef(null);
  const pointerRef = useRef({ x: 0, y: 0 });
  const phiRef = useRef(0.5);
  const thetaRef = useRef(0.15);
  const animRef = useRef(null);

  /* Particles */
  const [particles, setParticles] = useState([]);
  const particleStateRef = useRef([]);
  const particleCanvasRef = useRef(null);
  const particleRafRef = useRef(null);

  useEffect(() => {
    const p = generateParticles(size);
    setParticles(p);
    particleStateRef.current = p.map((x) => ({ ...x }));
  }, [size]);

  /* Satellites */
  const [satPositions, setSatPositions] = useState(
    SATELLITE_DEFS.map((s) => ({ x: size / 2, y: size / 2 }))
  );
  const satRafRef = useRef(null);
  const satTimeRef = useRef(0);

  /* Markers */
  const [markers, setMarkers] = useState({ india: { x: 0, y: 0 }, uk: { x: 0, y: 0 } });

  /* ─── Cobe globe ──────────────────────────────────────────────── */
  useEffect(() => {
    if (!canvasRef.current) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    globeRef.current = createGlobe(canvasRef.current, {
      devicePixelRatio: dpr,
      width: size * dpr,
      height: size * dpr,
      phi: phiRef.current,
      theta: thetaRef.current,
      dark: 1,
      diffuse: 1.6,
      mapSamples: 20000,
      mapBrightness: 9,
      mapBaseBrightness: 0.08,
      baseColor: [0.05, 0.12, 0.38],        // deep royal blue ocean
      markerColor: [1, 0.85, 0.22],          // gold markers
      glowColor: [0.18, 0.45, 1],            // blue atmosphere
      scale: 1.08,
      offset: [0, 0],
      opacity: 1,
      markers: [
        { location: [INDIA_LAT, INDIA_LNG], size: 0.075 },
        { location: [UK_LAT, UK_LNG], size: 0.065 },
        // Secondary cities for visual richness
        { location: [51.5074, -0.1278], size: 0.04 },  // London
        { location: [28.6139, 77.209], size: 0.04 },   // Delhi
        { location: [48.8566, 2.3522], size: 0.03 },   // Paris
        { location: [40.7128, -74.006], size: 0.03 },  // NY
        { location: [35.6762, 139.6503], size: 0.03 }, // Tokyo
        { location: [-33.8688, 151.2093], size: 0.025 }, // Sydney
        { location: [1.3521, 103.8198], size: 0.025 }, // Singapore
      ],
      onRender(state) {
        // Auto-rotate
        state.phi = phiRef.current;
        state.theta = thetaRef.current;
        phiRef.current += 0.0025;

        // Mouse interaction (subtle)
        const targetPhi = phiRef.current + pointerRef.current.x * 0.4;
        const targetTheta = thetaRef.current + pointerRef.current.y * 0.2;
        state.phi = targetPhi;
        state.theta = Math.max(-0.5, Math.min(0.5, targetTheta));

        // Update marker positions
        const ind = latLngToXY(INDIA_LAT, INDIA_LNG, size, state.phi, state.theta);
        const uk = latLngToXY(UK_LAT, UK_LNG, size, state.phi, state.theta);
        setMarkers({ india: ind, uk });
      },
    });

    return () => {
      globeRef.current?.destroy();
    };
  }, [size]);

  /* ─── Mouse interaction ──────────────────────────────────────── */
  const handlePointerMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const px = (e.clientX - cx) / rect.width;
    const py = (e.clientY - cy) / rect.height;
    pointerRef.current = { x: px, y: py };
  }, []);

  const handlePointerLeave = useCallback(() => {
    pointerRef.current = { x: 0, y: 0 };
  }, []);

  /* ─── Particle canvas animation ─────────────────────────────── */
  useEffect(() => {
    const canvas = particleCanvasRef.current;
    if (!canvas || particles.length === 0) return;
    const ctx = canvas.getContext("2d");
    const state = particleStateRef.current;
    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, size, size);
      t += 0.01;
      state.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0) p.x = size;
        if (p.x > size) p.x = 0;
        if (p.y < 0) p.y = size;
        if (p.y > size) p.y = 0;
        const pulse = 0.5 + 0.5 * Math.sin(t * p.speed * 100 + p.phase);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity * (0.5 + 0.5 * pulse);
        ctx.shadowBlur = 6;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
      });
      particleRafRef.current = requestAnimationFrame(draw);
    };

    particleRafRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(particleRafRef.current);
  }, [size, particles]);

  /* ─── Satellite animation ────────────────────────────────────── */
  useEffect(() => {
    const animSats = () => {
      satTimeRef.current += 1;
      const t = satTimeRef.current;
      setSatPositions(
        SATELLITE_DEFS.map((s) => {
          const angle = s.phase + t * s.speed * 1000;
          const x = size / 2 + size * s.orbitRx * Math.cos(angle);
          const y = size / 2 + size * s.orbitRy * Math.sin(angle) * Math.cos((s.tiltX * Math.PI) / 180);
          return { x, y };
        })
      );
      satRafRef.current = requestAnimationFrame(animSats);
    };
    satRafRef.current = requestAnimationFrame(animSats);
    return () => cancelAnimationFrame(satRafRef.current);
  }, [size]);

  /* ─── Render ─────────────────────────────────────────────────── */
  return (
    <div
      className="relative select-none flex items-center justify-center"
      style={{ width: size, height: size }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {/* ── Layer 0: Background glow ─────────────────────────── */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: size * 1.35,
          height: size * 1.35,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(ellipse at center, #1E3A8A22 0%, #001F6B14 40%, transparent 70%)",
          filter: "blur(40px)",
          zIndex: 0,
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: size * 0.6,
          height: size * 0.6,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(ellipse at center, #22D3EE18 0%, transparent 70%)",
          filter: "blur(20px)",
          zIndex: 0,
        }}
      />

      {/* ── Layer 1: Branding illustration ──────────────────── */}
      {imageSrc && (
        <div
    className="absolute inset-0 rounded-full overflow-hidden pointer-events-none"
    style={{
      zIndex: 4,
    }}
  >
         <img
  src={imageSrc}
  alt=""
  aria-hidden="true"
  className="w-full h-full object-cover"
  style={{
    opacity: 0.45,

    filter: "none",

    mixBlendMode: "screen",

    transform: "scale(1.02)",

    maskImage:
      "radial-gradient(circle at center, black 72%, transparent 100%)",

    WebkitMaskImage:
      "radial-gradient(circle at center, black 72%, transparent 100%)",
  }}
/>
        </div>
      )}

      {/* ── Layer 2: Orbit rings ─────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
        <OrbitRing size={size} rx={0.55} ry={0.2} color="#ffffff" duration={22} delay={0.8} tiltX={72} />
        <OrbitRing size={size} rx={0.5} ry={0.5} color="#D89B1D" duration={34} delay={1.1} tiltX={18} />
      </div>

      {/* ── Layer 3: Cobe Globe canvas ───────────────────────── */}
      <canvas
        ref={canvasRef}
        width={size}
        height={size}
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          cursor: "grab",
          position: "relative",
          zIndex: 3,
        }}
      />

      {/* ── Layer 4: Animated connection arcs ────────────────── */}
      <div
        className="absolute pointer-events-none"
        style={{ top: 0, left: 0, width: size, height: size, zIndex: 4 }}
      >
        <ConnectionArc from={markers.india} to={markers.uk} size={size} />
      </div>

      {/* ── Layer 5: Pulse markers ───────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 5 }}
      >
        <AnimatePresence>
          {markers.india.x > 0 && (
            <PulseMarker
              key="india"
              x={markers.india.x}
              y={markers.india.y}
              label="India"
              color="#D89B1D"
            />
          )}
          {markers.uk.x > 0 && (
            <PulseMarker
              key="uk"
              x={markers.uk.x}
              y={markers.uk.y}
              label="UK"
              color="#93C5FD"
            />
          )}
        </AnimatePresence>
      </div>

      {/* ── Layer 6: Satellites ──────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 6 }}
      >
        {SATELLITE_DEFS.map((s, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: satPositions[i]?.x - 3,
              top: satPositions[i]?.y - 3,
              width: 6,
              height: 6,
              background: s.color,
              boxShadow: `0 0 8px 3px ${s.color}88, 0 0 2px 1px ${s.color}`,
              opacity: 0.8,
            }}
          />
        ))}
      </div>

      {/* ── Layer 7: Particle canvas (foreground) ────────────── */}
      <canvas
        ref={particleCanvasRef}
        width={size}
        height={size}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 7, opacity: 0.75 }}
      />
    </div>
  );
}