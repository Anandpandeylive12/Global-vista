import ContactInfo from "@/components/sections/ContactInfo";
import ContactForm from "@/components/sections/ContactForm";

export default function ContactSplit() {
  return (
    <section className="relative px-6 py-12 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
}