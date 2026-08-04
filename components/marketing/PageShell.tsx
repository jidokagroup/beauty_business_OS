import Link from "next/link";
import AdminTopNav from "@/components/app/AdminTopNav";
import PublicSiteHeader from "@/components/app/PublicSiteHeader";
import { getSession } from "@/lib/auth";

/** Shared chrome for Luna & Sage Studio customer and studio pages. */
export default async function PageShell({
  eyebrow,
  title,
  intro,
  note,
  showBottomBack = false,
  publicPage = false,
  wide = false,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  note?: string;
  showBottomBack?: boolean;
  publicPage?: boolean;
  wide?: boolean;
  children: React.ReactNode;
}) {
  const session = await getSession();

  return (
    <main>
      {publicPage ? (
        <PublicSiteHeader />
      ) : session ? (
        <AdminTopNav session={session} active={eyebrow} />
      ) : (
        <header className="border-b border-border">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
            <Link href="/" className="font-serif text-lg tracking-wide">
              JIDOKA <span className="text-text-secondary">Beauty &amp; Wellness OS</span>
            </Link>
            <Link href="/" className="text-[12px] uppercase tracking-[0.14em] text-text-secondary hover:text-text-primary">
              Back to overview
            </Link>
          </div>
        </header>
      )}

      <section className={`${wide ? "max-w-6xl" : "max-w-3xl"} ${publicPage ? "public-page-enter" : ""} mx-auto px-5 py-14 sm:py-20`}>
        <p className="text-[11px] uppercase tracking-[0.24em] text-text-muted">{eyebrow}</p>
        <h1 className="mt-3 font-serif text-4xl font-medium tracking-tight sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-xl leading-relaxed text-text-secondary">{intro}</p>
        <div className="mt-8">{children}</div>
        {note && <p className="mt-4 text-xs text-text-muted leading-relaxed">{note}</p>}
        {showBottomBack && (
          <div className="mt-10 border-t border-border pt-6">
            <Link href="/" className="text-[12px] uppercase tracking-[0.14em] text-text-secondary hover:text-text-primary">
              Back home
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}
