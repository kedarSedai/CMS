import { resourceSections } from "@/data/resources";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ButtonLink";

export const metadata = {
  title: "Resources",
  description:
    "Music, sports, and academic benefits for families—downloadable infographics and guidance from Rising MVPs.",
};

export default function ResourcesPage() {
  return (
    <main id="main" className="py-14 sm:py-20">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--teal)]">
          Resources
        </p>
        <h1 className="mt-2 font-heading text-4xl font-bold text-[var(--ink)] sm:text-5xl">
          Music, sports, &amp; study habits for confident families
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-[var(--ink-soft)]">
          Parents asked for clear, credible explainers—so we built a resource hub that
          pairs narrative guidance with infographic placeholders ready for CMS media.
        </p>

        <div className="mt-14 space-y-16">
          {resourceSections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              aria-labelledby={`${section.id}-heading`}
              className="grid gap-8 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-sm lg:grid-cols-2 lg:items-center"
            >
              <div>
                <h2
                  id={`${section.id}-heading`}
                  className="font-heading text-3xl font-bold text-[var(--ink)]"
                >
                  {section.title}
                </h2>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-[var(--coral)]">
                  {section.subtitle}
                </p>
                <ul className="mt-6 space-y-3 text-[var(--ink-soft)]">
                  {section.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonLink href="/faq" variant="secondary">
                    Read FAQs
                  </ButtonLink>
                  <ButtonLink href="/contact">Ask a question</ButtonLink>
                </div>
              </div>
              <div
                className="flex min-h-[260px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[var(--sun)] bg-[var(--cream)] p-8 text-center"
                role="img"
                aria-label={section.infographicCaption}
              >
                <p className="font-heading text-lg font-bold text-[var(--ink)]">
                  Infographic placeholder
                </p>
                <p className="mt-3 text-sm text-[var(--ink-soft)]">
                  {section.infographicCaption}
                </p>
              </div>
            </section>
          ))}
        </div>
      </Container>
    </main>
  );
}
