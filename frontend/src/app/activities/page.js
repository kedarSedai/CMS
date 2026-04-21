import { activityTimeline } from "@/data/activities";
import { site } from "@/data/site";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ButtonLink";

export const metadata = {
  title: "Rian’s Activities",
  description: `Sports, music, and academics timeline for ${site.founder} — Rising MVPs.`,
};

export default function ActivitiesPage() {
  return (
    <main id="main" className="py-14 sm:py-20">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--teal)]">
          Rian&apos;s activities
        </p>
        <h1 className="mt-2 font-heading text-4xl font-bold text-[var(--ink)] sm:text-5xl">
          A timeline of sports, music, academics, and leadership in motion
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-[var(--ink-soft)]">
          Honors in the classroom sit alongside the stage and the court—this page mirrors
          how Strapi might store ordered timeline entries with year, title, rich text, and
          media galleries.
        </p>

        <ol className="relative mt-14 border-l-2 border-[var(--sun)] pl-8">
          {activityTimeline.map((item, idx) => (
            <li key={item.id} className="mb-12 last:mb-0">
              <span className="absolute -left-[11px] mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--coral)] text-[10px] font-bold text-white">
                {idx + 1}
              </span>
              <p className="text-sm font-semibold uppercase tracking-wide text-[var(--coral)]">
                {item.year}
              </p>
              <h2 className="mt-1 font-heading text-2xl font-bold text-[var(--ink)]">
                {item.title}
              </h2>
              <p className="mt-3 max-w-2xl text-[var(--ink-soft)]">{item.detail}</p>
            </li>
          ))}
        </ol>

        <div className="mt-16 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-sm">
          <h2 className="font-heading text-2xl font-bold text-[var(--ink)]">
            Press &amp; blog coverage
          </h2>
          <p className="mt-3 text-[var(--ink-soft)]">
            Pair this timeline with dynamic cards from your CMS press and blog
            collections.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/press">View press</ButtonLink>
            <ButtonLink href="/blog" variant="secondary">
              Read the blog
            </ButtonLink>
          </div>
        </div>
      </Container>
    </main>
  );
}
