export function easeOutCubic(progress) {
  return 1 - Math.pow(1 - progress, 3);
}

export function runCounter({ target, duration = 1600, onUpdate, onComplete }) {
  let start = null;
  let frame;

  const step = (timestamp) => {
    if (start === null) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = easeOutCubic(progress);
    onUpdate(Math.floor(eased * target));
    if (progress < 1) {
      frame = requestAnimationFrame(step);
    } else {
      onUpdate(target);
      onComplete?.();
    }
  };

  frame = requestAnimationFrame(step);
  return () => cancelAnimationFrame(frame);
}