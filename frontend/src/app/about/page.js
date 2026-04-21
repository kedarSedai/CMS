import Image from "next/image";
import { site } from "@/data/site";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ButtonLink";

export const metadata = {
  title: "About Us",
  description: `Mission, story, and photos from ${site.name}, founded by ${site.founder}.`,
  openGraph: {
    title: `About Us · ${site.name}`,
    description: site.description,
  },
};

export default function AboutPage() {
  return (
    <main id="main" className="py-14 sm:py-20">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--coral)]">
          About us
        </p>
        <h1 className="mt-2 font-heading text-4xl font-bold text-[var(--ink)] sm:text-5xl">
          Mission, story, and the heartbeat behind Rising MVPs
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-[var(--ink-soft)]">
          {site.description}
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6 text-[var(--ink-soft)]">
            <h2 className="font-heading text-2xl font-bold text-[var(--ink)]">
              Why we exist
            </h2>
            <p>
              Young people learn best when adults model consistency, joy, and service.
              Rising MVPs connects performance arts, athletics, and classroom habits with
              neighborhood projects so students feel accountable to a community—not just a
              scoreboard.
            </p>
            <p>
              {site.founder} started this work after seeing peers disconnected from
              mentors during pivotal seasons of school. What began as informal clinics
              and weekend cleanups is now a nonprofit built for scale, inclusion, and
              measurable impact.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <ButtonLink href="/activities">See Rian&apos;s activities</ButtonLink>
              <ButtonLink href="/get-involved" variant="secondary">
                Get involved
              </ButtonLink>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[var(--border)] shadow-md sm:col-span-2 sm:aspect-[16/9] lg:aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80"
                alt="Students collaborating around a table with notebooks"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-[var(--border)] shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1517649763962-0c62306601b7?w=800&q=80"
                alt="Youth soccer team running drills at sunset"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 25vw"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-[var(--border)] shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80"
                alt="Close-up of hands on piano keys"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 25vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
