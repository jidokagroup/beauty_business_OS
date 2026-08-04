import type { Metadata } from "next";
import Image from "next/image";
import BareBookingFlow from "@/components/booking/BareBookingFlow";
import PageShell from "@/components/marketing/PageShell";
import { BARE_STUDIOS } from "@/lib/bare-studios";

export const metadata: Metadata = {
  title: "Book an Appointment — Luna & Sage Studio",
  description: "Request a Luna & Sage Studio service appointment in Downtown Bel Air.",
};

export default function BookPage() {
  return (
    <PageShell
      eyebrow="Book Luna & Sage Studio"
      title="Request your appointment."
      intro={`Choose a service at ${BARE_STUDIOS.name}, share your preferred date and time, and the studio will follow up to confirm your visit.`}
      note={`${BARE_STUDIOS.address} · ${BARE_STUDIOS.phone}`}
      publicPage
      wide
    >
      <div className="mb-6 grid gap-3 md:grid-cols-[1fr_0.72fr]">
        <div className="image-zoom relative min-h-[260px] overflow-hidden rounded-xl border border-border bg-linen">
          <Image src="/images/bare-studios/bare-studios-portrait.jpg" alt="Luna & Sage Studio storefront" fill sizes="(max-width: 768px) 100vw, 58vw" className="object-cover" />
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-1">
          <div className="image-zoom relative min-h-32 overflow-hidden rounded-xl border border-border bg-linen">
            <Image src="/images/bare-studios/bare-studios-blonde-hair.png" alt="Luna & Sage Studio hair service" fill sizes="(max-width: 768px) 50vw, 34vw" className="object-cover" />
          </div>
          <div className="image-zoom relative min-h-32 overflow-hidden rounded-xl border border-border bg-linen">
            <Image src="/images/bare-studios/bare-studios-facial-treatment.png" alt="Luna & Sage Studio facial treatment" fill sizes="(max-width: 768px) 50vw, 34vw" className="object-cover" />
          </div>
        </div>
      </div>
      <BareBookingFlow />
    </PageShell>
  );
}
