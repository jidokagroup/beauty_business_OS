import type { Metadata } from "next";
import Link from "next/link";

const demoBusiness = "Luna & Sage Studio";
const demoBusinessQuery = encodeURIComponent(demoBusiness);

export const metadata: Metadata = {
  title: "Beauty Business OS Demo",
  description: "Explore the owner dashboard and customer experience for the Beauty Business OS.",
};

const ownerLinks = [
  { href: "/api/demo-session?next=/dashboard", label: "Owner dashboard", note: "Calendar, live requests, clients, inbox, and daily operating metrics." },
  { href: "/api/demo-session?next=/clients", label: "Customer CRM", note: "Imported client records, rebooking cues, duplicates, and outreach prompts." },
  { href: "/api/demo-session?next=/inventory", label: "Inventory", note: "Stock flags, reorder suggestions, and purchase tracking." },
  { href: "/api/demo-session?next=/reports", label: "Reports", note: "Sales, appointments, team, inventory, and owner summaries." },
  { href: "/api/demo-session?next=/promotions", label: "Marketing", note: "Promos, scheduler, campaigns, and audience activation." },
  { href: "/api/demo-session?next=/settings/team", label: "Settings", note: "Team, services, notifications, Stripe, and operating preferences." },
];

const customerLinks = [
  { href: "/book", label: "Book an appointment", note: "Customer booking request flow with services, provider routing, and confirmation." },
  { href: `/store?demo=1&salon=${demoBusinessQuery}`, label: "Shop retail", note: "Customer-facing retail store with simulated checkout." },
  { href: `/wallet?demo=1&salon=${demoBusinessQuery}&client=Demo%20Client`, label: "Client wallet", note: "Rewards, stored balance, top-ups, and fast checkout preview." },
  { href: `/waitlist?salon=${demoBusinessQuery}`, label: "Join waitlist", note: "Customer opt-in for last-minute openings." },
  { href: "/suite-rental", label: "Suite inquiry", note: "Public application flow for booth renters and service pros." },
];

function DemoCard({ href, label, note }: { href: string; label: string; note: string }) {
  return (
    <Link href={href} className="group rounded-lg border border-border bg-surface p-5 transition hover:-translate-y-0.5 hover:border-primary/45 hover:shadow-sm">
      <p className="font-serif text-xl font-medium tracking-normal">{label}</p>
      <p className="mt-2 text-sm leading-relaxed text-text-secondary">{note}</p>
      <span className="mt-4 inline-flex text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
        Open demo
      </span>
    </Link>
  );
}

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-bg text-text-primary">
      <section className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
        <div className="flex flex-col gap-5 border-b border-border pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-text-muted">Interactive demo</p>
            <h1 className="mt-3 max-w-3xl font-serif text-4xl font-semibold leading-tight tracking-normal sm:text-6xl">
              See both sides of the Beauty Business OS.
            </h1>
            <p className="mt-5 max-w-2xl leading-relaxed text-text-secondary">
              Explore a fictional beauty business, {demoBusiness}, from the owner dashboard and from the customer-facing booking, wallet, shop, and waitlist flows.
            </p>
          </div>
          <Link href="/" className="rounded-md border border-text-primary/30 px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-text-primary transition hover:border-primary hover:text-primary">
            Back to overview
          </Link>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <section>
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-text-muted">Business owner side</p>
                <h2 className="mt-2 font-serif text-3xl font-medium tracking-normal">Dashboard and Operation Features</h2>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {ownerLinks.map((link) => <DemoCard key={link.href} {...link} />)}
            </div>
          </section>

          <section>
            <p className="text-[11px] uppercase tracking-[0.2em] text-text-muted">Customer side</p>
            <h2 className="mt-2 font-serif text-3xl font-medium tracking-normal">Booking, checkout, and retention</h2>
            <div className="mt-4 grid gap-3">
              {customerLinks.map((link) => <DemoCard key={link.href} {...link} />)}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
