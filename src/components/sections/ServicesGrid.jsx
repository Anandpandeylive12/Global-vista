import { servicesData } from "@/data/servicesData";

export default function ServicesGrid() {
  return (
    <section className="p-10">
      {servicesData.map((service) => (
        <div key={service.id}>
          {service.title}
        </div>
      ))}
    </section>
  );
}