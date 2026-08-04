import SavingsCalculator from "@/components/marketing/SavingsCalculator";
import BrandThemedDemo from "@/components/marketing/BrandThemedDemo";
import Image from "next/image";

const DEMO_URL = "/demo";
const DIAGNOSTIC_URL = "https://jidokagroup.com/scan/quiz";

const BOTTLENECKS = [
  "Merchant fees skimming every sale",
  "Too many disconnected tech tools",
  "Retail and supply inventory always running low",
  "Payroll & commission math",
  "Falling behind on social media",
  "Hard to keep up with local trends",
  "Lapsed clients quietly slipping away",
  "Add-ons and packages the team forgets to mention",
  "Last-minute cancellations left unfilled",
  "Retail, memberships, and at-home sales left on the table",
  "Complaints with nowhere to go",
  "Google reviews going unanswered",
  "Reviews scattered across sites",
];

type PillarVisualType = "upsell" | "financial" | "opening";

const PILLARS: {
  name: string;
  visual: PillarVisualType;
  items: { title: string; body: string }[];
}[] = [
  {
    name: "Inventory & operations",
    visual: "upsell",
    items: [
      {
        title: "Inventory Assistant",
        body: "Staff flag a low product; the assistant alerts whoever orders, scans reputable suppliers for the best price, and files each order as COGS or Supplies for easier taxes.",
      },
      {
        title: "One customizable platform",
        body: "Every tool in a single place. Add or remove modules so the OS fits your spa, salon, medspa, or wellness clinic.",
      },
      {
        title: "Service and retail cues",
        body: "Your team is notified when a client is a strong candidate for an upgrade, package, membership, or retail product.",
      },
    ],
  },
  {
    name: "Marketing & intelligence",
    visual: "financial",
    items: [
      {
        title: "Financial Assistant",
        body: "Chat to update commissions, run payroll, review your numbers, and get monthly plain-English advice on lifting your bottom line.",
      },
      {
        title: "Industry Intelligence Assistant",
        body: "A monthly, executive one-page report on what's trending and what competitors are doing in your exact niche — informed by your Brand Brain and services.",
      },
      {
        title: "Reviews Assistant",
        body: "Scans Google Business and booking platforms, imports reviews into the OS, drafts thoughtful replies, escalates sensitive reviews, and notifies the right owner or manager.",
      },
    ],
  },
  {
    name: "Clients & retention",
    visual: "opening",
    items: [
      {
        title: "Receptionist Assistant",
        body: "Supports missed calls, appointment requests, consultation questions, and client follow-up so the front desk has fewer interruptions.",
      },
      {
        title: "Re-engagement workflows",
        body: "A daily list of clients overdue for each service, pulled from their portal — visit history, payments, reviews, and files, all in one place.",
      },
      {
        title: "Last-minute fills",
        body: "Clients opt in to be alerted of openings within 24 hours by app or SMS, so cancellations do not stay empty.",
      },
    ],
  },
];

const LAUNCH_STEPS = [
  "Map the business through the Blueprint Diagnostic.",
  "Theme the booking, client, and owner experience to your brand.",
  "Connect your current tools, services, staff, hours, and checkout rules.",
  "Implement assistants one by one with a JIDOKA specialist.",
  "Train the team and refine the system as the business evolves.",
];

const ASSISTANT_ROBOTS = [
  { name: "Financial", role: "Payroll + margin", color: "#3041A5" },
  { name: "Inventory", role: "Stock + reorder", color: "#0F766E" },
  { name: "Reviews", role: "Reputation", color: "#E8442E" },
  { name: "Intelligence", role: "Market briefings", color: "#E8971F" },
  { name: "Receptionist", role: "Booking support", color: "#4A5ABF" },
];

const TEAM_CUES = [
  "Sandra is overdue. Suggest the right follow-up service.",
  "Mary has not rebooked in 4 months. Send a personalized offer.",
  "John bought aftercare 3 months ago. Ask if he needs a refill.",
];

const CLIENT_NOTIFICATIONS = [
  "Last-minute opening alert: 2:30 PM, matched to your usual service.",
  "Did you leave a review yet? Receive a free gift if you leave a review within 24 hours.",
  "Wallet balance low. You are 50 points away from your next reward.",
];

const CONTACT_CALENDLY_URL =
  process.env.NEXT_PUBLIC_CONTACT_CALENDLY_URL ||
  process.env.NEXT_PUBLIC_CRYSTAL_CALENDLY_URL ||
  "https://calendly.com/hello-barebranding/30min";

function Section({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  return <section id={id} className={`max-w-6xl mx-auto px-5 ${className}`}>{children}</section>;
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-[11px] uppercase tracking-[0.24em] text-text-muted">{children}</p>;
}

function TrialButton({ label = "Map my business" }: { label?: string }) {
  return (
    <a
      href={DIAGNOSTIC_URL}
      className="inline-flex rounded-md bg-gradient-brand px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-white transition-all hover:brightness-110"
    >
      {label}
    </a>
  );
}

/** Elegant linen placeholder — swap the inner content for an <img> when photos are ready. */
function PhotoFrame({ caption, className = "", ratioClass = "aspect-[4/3]" }: { caption: string; className?: string; ratioClass?: string }) {
  return (
    <div className={`photo-frame relative w-full overflow-hidden rounded-md border border-border ${ratioClass} ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[11px] uppercase tracking-[0.24em] text-text-muted">{caption}</span>
      </div>
    </div>
  );
}

function AssistantRobotShowcase() {
  return (
    <div className="assistant-robot-stage mt-8 grid grid-cols-1 gap-3 sm:grid-cols-5">
      {ASSISTANT_ROBOTS.map((robot, index) => (
        <div key={robot.name} className="assistant-robot-card" style={{ animationDelay: `${index * 0.18}s` }}>
          <div className="assistant-robot" aria-hidden="true" style={{ animationDelay: `${index * 0.12}s` }}>
            <div className="assistant-robot-antenna" style={{ backgroundColor: robot.color }} />
            <div className="assistant-robot-head" style={{ borderColor: robot.color }}>
              <span />
              <span />
            </div>
            <div className="assistant-robot-body" style={{ backgroundColor: robot.color }}>
              <div className="assistant-robot-panel" />
            </div>
            <div className="assistant-robot-arm assistant-robot-arm-left" style={{ backgroundColor: robot.color }} />
            <div className="assistant-robot-arm assistant-robot-arm-right" style={{ backgroundColor: robot.color }} />
          </div>
          <p className="mt-3 font-serif text-lg font-medium">{robot.name} Assistant</p>
          <p className="mt-1 text-xs uppercase tracking-[0.12em] text-text-muted">{robot.role}</p>
        </div>
      ))}
    </div>
  );
}

function PhoneShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[260px] rounded-[32px] border border-text-primary bg-text-primary p-2 shadow-sm">
      <div className="min-h-[420px] rounded-[26px] bg-white p-4">
        <div className="mx-auto mb-5 h-1.5 w-16 rounded-full bg-border" />
        {children}
      </div>
    </div>
  );
}

function FloatingCuePhone() {
  return (
    <div className="inventory-phone-stage relative mx-auto flex min-h-[520px] w-full max-w-[560px] items-center justify-center overflow-visible py-5">
      <div className="floating-phone-wrap relative z-10 w-full max-w-[270px] rounded-[34px] border-[8px] border-text-primary bg-text-primary shadow-sm">
        <div className="owner-phone-screen min-h-[490px] rounded-[25px] bg-white p-4">
          <div className="mx-auto mb-5 h-1.5 w-16 rounded-full bg-border" />
          <div className="rounded-2xl border border-border bg-white/80 p-4 shadow-sm backdrop-blur-sm">
            <p className="text-[11px] uppercase tracking-[0.16em] text-text-muted">Owner dashboard</p>
            <h4 className="mt-2 font-serif text-2xl font-medium">Today&apos;s schedule</h4>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="rounded-xl bg-white p-3 shadow-sm">
                <p className="text-[10px] uppercase tracking-[0.12em] text-text-muted">Openings</p>
                <p className="mt-1 font-serif text-2xl font-medium">2</p>
              </div>
              <div className="rounded-xl bg-white p-3 shadow-sm">
                <p className="text-[10px] uppercase tracking-[0.12em] text-text-muted">Low stock</p>
                <p className="mt-1 font-serif text-2xl font-medium">4</p>
              </div>
            </div>
            <div className="mt-4 rounded-xl bg-white p-3 shadow-sm">
              <div className="flex items-end gap-1.5">
                {[42, 58, 35, 70, 62, 84].map((height, index) => (
                  <span
                    key={height + index}
                    className="w-full rounded-t bg-success/70"
                    style={{ height: `${height}px` }}
                  />
                ))}
              </div>
              <p className="mt-2 text-xs text-text-muted">Service demand forecast</p>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            {["Reorder aftercare serum", "Approve review reply", "Fill 2:30 PM opening"].map((task) => (
              <div key={task} className="rounded-xl border border-border bg-white/75 px-3 py-2 text-xs text-text-secondary shadow-sm">
                {task}
              </div>
            ))}
          </div>
        </div>
      </div>

      {TEAM_CUES.map((cue, index) => (
        <div
          key={cue}
          className={`cue-popout cue-popout-${index + 1} absolute z-20 w-[min(310px,82vw)] rounded-2xl border border-border bg-white px-4 py-3 shadow-sm`}
          style={{ animationDelay: `${index * 0.5}s` }}
        >
          <div className="flex items-start gap-2">
            <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-success" />
            <p className="text-sm leading-relaxed text-text-secondary">{cue}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function PillarVisual({ type }: { type: PillarVisualType }) {
  if (type === "upsell") {
    return (
      <div className="overflow-visible">
        <FloatingCuePhone />
      </div>
    );
  }

  if (type === "financial") {
    return (
      <div className="mt-5 rounded-md border border-border bg-surface-elevated p-5">
        <div className="mx-auto max-w-4xl rounded-md border border-border bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-3 border-b border-border pb-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.16em] text-text-muted">Executive document</p>
              <p className="mt-2 font-serif text-3xl font-medium">Monthly intelligence summary</p>
            </div>
            <div className="rounded-full bg-success/10 px-3 py-1 text-xs text-success">$1,840 projected margin lift</div>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-md border border-border bg-surface p-4">
              <p className="text-[11px] uppercase tracking-[0.16em] text-text-muted">Finance</p>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                Retail attach rate rose to 31%, but Tuesday appointment capacity is underused. Recommended move:
                test a weekday refresh bundle and measure rebooking within 14 days.
              </p>
            </div>
            <div className="rounded-md border border-border bg-surface p-4">
              <p className="text-[11px] uppercase tracking-[0.16em] text-text-muted">Supplies</p>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                We spent 15% more on supplies this month and last. Suggest looking at alternatives or increase prices.
              </p>
            </div>
            <div className="rounded-md border border-border bg-surface p-4">
              <p className="text-[11px] uppercase tracking-[0.16em] text-text-muted">Industry intelligence</p>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                A nearby competitor is packaging seasonal refresh appointments. Suggest testing a limited bundle and tracking conversion.
              </p>
            </div>
            <div className="rounded-md border border-border bg-surface p-4">
              <p className="text-[11px] uppercase tracking-[0.16em] text-text-muted">Reviews</p>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                We received about the same amount of reviews this month vs last month, keep up the good work.
                Suggestion: send a notification to clients offering a promotion for leaving an honest review on any platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-5 grid grid-cols-1 items-center gap-5 rounded-md border border-border bg-surface-elevated p-5 md:grid-cols-[0.8fr_1fr]">
      <PhoneShell>
        <p className="text-[11px] uppercase tracking-[0.16em] text-text-muted">Client dashboard</p>
        <h4 className="mt-2 font-serif text-2xl font-medium">Welcome Back Jasmine</h4>
        <div className="mt-5 space-y-3">
          {CLIENT_NOTIFICATIONS.map((notice, index) => (
            <div key={notice} className="rounded-2xl border border-border bg-surface-elevated p-3">
              <p className="text-[11px] uppercase tracking-[0.12em] text-text-muted">Notification {index + 1}</p>
              <p className="mt-1 text-sm leading-relaxed text-text-secondary">{notice}</p>
            </div>
          ))}
        </div>
      </PhoneShell>
      <div>
        <p className="font-serif text-2xl font-medium">The client-facing home screen keeps them coming back.</p>
        <p className="mt-3 text-sm leading-relaxed text-text-secondary">
          Clients see openings, rewards, wallet reminders, and loyalty progress in the same mobile dashboard
          they use to book and pay.
        </p>
      </div>
    </div>
  );
}

export default function JidokaLandingPage() {
  return (
    <main>
      {/* Top bar */}
      <header className="border-b border-border bg-white/85 backdrop-blur">
        <div className="max-w-6xl mx-auto flex h-20 items-center justify-between px-5">
          <a href="https://jidokagroup.com" className="flex items-center gap-3" aria-label="JIDOKA Group">
            <Image src="/jidoka-group-logo.png" alt="JIDOKA Group" width={220} height={66} className="h-10 w-auto" priority />
            <span className="hidden border-l border-border pl-3 text-sm font-semibold text-primary sm:inline">
              Beauty &amp; Wellness OS
            </span>
          </a>
          <div className="flex items-center gap-5">
            <a href={DEMO_URL} className="hidden text-[12px] font-semibold uppercase tracking-[0.14em] text-text-secondary hover:text-primary sm:inline">
              Beauty &amp; Wellness OS
            </a>
            <a href="/account" className="hidden text-[12px] font-semibold uppercase tracking-[0.14em] text-text-secondary hover:text-primary sm:inline">
              Sign in
            </a>
            <a
              href={DIAGNOSTIC_URL}
              className="rounded-md border border-text-primary/30 px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-text-primary transition-colors hover:border-primary hover:text-primary"
            >
              Map my business
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <Section className="pt-16 pb-10 text-center sm:pt-24">
        <div className="mx-auto max-w-3xl">
          <Eyebrow>Beauty &amp; Wellness OS by JIDOKA Group</Eyebrow>
          <h1 className="mt-5 font-serif text-5xl font-bold leading-[1.05] sm:text-7xl">
            One operating layer for the business behind the care.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-text-secondary">
            Built for spas, salons, medspas, and wellness clinics that need booking, client follow-up,
            inventory, payroll, marketing, reviews, payments, and retention in one connected system.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <TrialButton label="Map my business" />
            <a
              href={DEMO_URL}
              className="rounded-md border border-text-primary/30 px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-text-primary transition-colors hover:border-primary hover:text-primary"
            >
              View Demo
            </a>
          </div>
        </div>
      </Section>

      {/* Bottlenecks */}
      <Section className="mt-12">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <Eyebrow>The daily grind</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl font-medium sm:text-4xl">
            You did not build a beauty or wellness business to chase disconnected tools.
          </h2>
          <p className="mt-4 leading-relaxed text-text-secondary">
            The work is already personal. The systems behind it should not drain your margin, time, and energy every week.
          </p>
        </div>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
          {BOTTLENECKS.map((b) => (
            <div key={b} className="flex items-baseline gap-3 border-b border-border py-3">
              <span className="text-accent-gold" aria-hidden="true">—</span>
              <span className="text-text-secondary">{b}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <TrialButton />
        </div>
      </Section>

      {/* One system */}
      <Section className="mt-24">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>One Core, Industry-Specific Assistants</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl font-medium sm:text-4xl">An assistant for every obstacle.</h2>
          <p className="mt-4 leading-relaxed text-text-secondary">
            JIDOKA Beauty &amp; Wellness OS puts intelligent assistants on the work that drains your day,
            while a human implementation specialist helps your team adopt the system at a realistic pace.
          </p>
        </div>
        <AssistantRobotShowcase />
        <div className="mt-8 flex justify-center">
          <TrialButton />
        </div>
      </Section>

      {/* Live branded demo */}
      <Section className="mt-24">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <Eyebrow>Live branded demo</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl font-medium sm:text-4xl">See it in your brand — every feature.</h2>
          <p className="mt-4 leading-relaxed text-text-secondary">
            Drop in your website or Instagram. We pull your logo, colors, and fonts, then walk you through
            booking, wallet checkout, retail, receptionist support, inventory, and the Assistants tab, themed to you.
          </p>
        </div>
        <BrandThemedDemo />
        <div className="mt-8 flex justify-center">
          <TrialButton />
        </div>
      </Section>

      {/* Assistants by operating area */}
      <Section className="mt-28">
        <div className="space-y-14">
          {PILLARS.map((pillar) => (
            <div key={pillar.name}>
              <div className="mb-5 flex items-center gap-4">
                <h3 className="font-serif text-2xl font-medium">{pillar.name}</h3>
                <span className="h-px flex-1 bg-border" />
              </div>
              {pillar.visual === "upsell" ? (
                <div className="grid grid-cols-1 items-center gap-8 overflow-visible lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="grid grid-cols-1 gap-3">
                    {pillar.items.map((item) => (
                      <div key={item.title} className="rounded-md border border-border bg-surface p-6">
                        <h4 className="font-serif text-xl font-medium">{item.title}</h4>
                        <p className="mt-2 text-sm leading-relaxed text-text-secondary">{item.body}</p>
                      </div>
                    ))}
                  </div>
                  <PillarVisual type={pillar.visual} />
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
                    {pillar.items.map((item) => (
                      <div key={item.title} className="bg-surface p-6">
                        <h4 className="font-serif text-xl font-medium">{item.title}</h4>
                        <p className="mt-2 text-sm leading-relaxed text-text-secondary">{item.body}</p>
                      </div>
                    ))}
                  </div>
                  <PillarVisual type={pillar.visual} />
                </>
              )}
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <TrialButton />
        </div>
      </Section>

      {/* Savings calculator */}
      <Section id="calculator" className="mt-28 scroll-mt-8">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <Eyebrow>Your savings calculator</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl font-medium sm:text-4xl">See it against your own numbers.</h2>
          <p className="mt-4 leading-relaxed text-text-secondary">
            Enter your business figures to see card fees, wallet savings, and revenue lift measured against your total revenue.
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          <SavingsCalculator />
        </div>
        <div className="mt-8 flex justify-center">
          <TrialButton />
        </div>
      </Section>

      {/* Launch sequence */}
      <Section className="mt-28">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_1.1fr]">
          <div>
            <Eyebrow>Launch sequence</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl font-medium sm:text-4xl">From demo to operating system.</h2>
            <p className="mt-5 text-sm leading-relaxed text-text-secondary">
              Start with the clearest operational pressure, then switch on assistants one by one as more of the business
              moves onto the platform at your pace.
            </p>
          </div>
          <div className="space-y-3">
            {LAUNCH_STEPS.map((step, index) => (
              <div key={step} className="flex gap-4 rounded-md border border-border bg-surface-elevated p-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-white">
                  {index + 1}
                </span>
                <p className="text-sm text-text-secondary">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="mt-28 mb-24">
        <div className="rounded-lg border border-border bg-surface-elevated px-6 py-12 text-center">
          <Eyebrow>Guided implementation</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl font-medium sm:text-4xl">
            Map the system first. Implement it with a human specialist.
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-text-secondary">
            JIDOKA helps connect the tools you already use, configure the platform around your workflows, and train your team over time.
          </p>
          <div className="mt-8 flex justify-center">
            <TrialButton label="Start the Blueprint Diagnostic" />
          </div>
        </div>
      </Section>

      {/* Built from real operators */}
      <Section className="mb-24">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <PhotoFrame caption="Beauty & wellness operators at work" ratioClass="aspect-[4/5]" className="max-w-md" />
          <div>
            <Eyebrow>Our story</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl font-medium sm:text-4xl">
              Built from real beauty,
              <span className="block">wellness, and service operations.</span>
            </h2>
            <p className="mt-5 leading-relaxed text-text-secondary">
              The pressure is familiar: payment fees, missed calls, empty appointment slots, messy inventory,
              review management, and too many tools that never talk to each other. JIDOKA turns that pressure
              into one operating layer your team can actually use.
            </p>
            <p className="mt-4 leading-relaxed text-text-secondary">
              The technology matters. The human implementation matters just as much.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={CONTACT_CALENDLY_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-md bg-gradient-brand px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-white transition-opacity hover:opacity-90"
              >
                Schedule a call
              </a>
              <a
                href={DEMO_URL}
                className="rounded-md border border-text-primary/30 px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-text-primary transition-colors hover:border-primary hover:text-primary"
              >
                View Demo
              </a>
            </div>
          </div>
        </div>
      </Section>

      <footer className="border-t border-border">
        <Section className="py-12">
          <p className="text-[11px] uppercase tracking-[0.24em] text-text-muted">Explore the assistants</p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {[
              { href: "/financials", label: "Financial Assistant" },
              { href: "/inventory", label: "Inventory Assistant" },
              { href: "/intelligence", label: "Industry intelligence" },
              { href: "/clients", label: "Client re-engagement" },
              { href: "/openings", label: "Fill openings" },
              { href: "/waitlist", label: "Client waitlist" },
              { href: "/wallet", label: "Client wallet" },
              { href: "/store", label: "Online store" },
              { href: "/settings/stripe", label: "Connect Stripe" },
              { href: "/about", label: "About" },
            ].map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-text-secondary hover:text-text-primary">
                {l.label}
              </a>
            ))}
          </div>
          <p className="mt-8 text-xs text-text-muted">JIDOKA Beauty &amp; Wellness OS — built for spas, salons, medspas, and wellness clinics.</p>
        </Section>
      </footer>
    </main>
  );
}
