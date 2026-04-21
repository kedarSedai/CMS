import { site } from "@/data/site";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ButtonLink";
import { VolunteerForm } from "@/components/VolunteerForm";

export const metadata = {
  title: "Get Involved",
  description:
    "Volunteer, donate, or sponsor Rising MVPs programs for youth sports, music, academics, and community service.",
};

const sponsorTiers = [
  {
    name: "Community partner",
    amount: "$2,500+",
    perks: ["Logo on event banners", "Social shout-outs", "4 volunteer passes"],
  },
  {
    name: "Clinic champion",
    amount: "$7,500+",
    perks: ["Named clinic session", "Booth at community concert", "Impact report"],
  },
  {
    name: "City builder",
    amount: "$15,000+",
    perks: ["Season co-title", "Custom volunteer day", "Quarterly strategy call"],
  },
];

export default function GetInvolvedPage() {
  return (
    <main id="main" className="py-14 sm:py-20">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--teal)]">
          Get involved
        </p>
        <h1 className="mt-2 font-heading text-4xl font-bold text-[var(--ink)] sm:text-5xl">
          Volunteer, donate, or sponsor the next generation of MVPs
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-[var(--ink-soft)]">
          Every pathway starts with a conversation. Donations process through your
          embedded platform (Donorbox, Givebutter, Stripe, etc.); forms below are
          front-end ready for API wiring.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm lg:col-span-1">
            <h2 className="font-heading text-xl font-bold text-[var(--ink)]">
              Donate
            </h2>
            <p className="mt-3 text-sm text-[var(--ink-soft)]">
              One-time and recurring gifts keep clinics accessible and service days
              stocked with supplies.
            </p>
            <ButtonLink href={site.donateUrl} external className="mt-6 w-full">
              Open secure donation flow
            </ButtonLink>
            <p className="mt-3 text-xs text-[var(--ink-muted)]">
              Configure your live URL in env or `site.js`. Confirmation emails will be
              handled by your payment platform.
            </p>
          </div>
          <div className="lg:col-span-2">
            <h2 className="font-heading text-xl font-bold text-[var(--ink)]">
              Volunteer interest
            </h2>
            <p className="mt-2 text-sm text-[var(--ink-soft)]">
              Tell us how you want to help. Admins receive notifications once this form
              posts to your backend.
            </p>
            <div className="mt-4">
              <VolunteerForm />
            </div>
          </div>
        </div>

        <section className="mt-16" aria-labelledby="sponsor-heading">
          <h2
            id="sponsor-heading"
            className="font-heading text-3xl font-bold text-[var(--ink)]"
          >
            Sponsorship menu
          </h2>
          <p className="mt-3 max-w-3xl text-[var(--ink-soft)]">
            Small businesses and corporate teams can align brand visibility with
            transparent impact reporting.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {sponsorTiers.map((tier) => (
              <div
                key={tier.name}
                className="flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--cream)] p-6"
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-[var(--coral)]">
                  {tier.amount}
                </p>
                <h3 className="mt-2 font-heading text-xl font-bold text-[var(--ink)]">
                  {tier.name}
                </h3>
                <ul className="mt-4 flex-1 space-y-2 text-sm text-[var(--ink-soft)]">
                  {tier.perks.map((perk) => (
                    <li key={perk}>• {perk}</li>
                  ))}
                </ul>
                <ButtonLink href="/contact" variant="secondary" className="mt-6 w-full">
                  Request details
                </ButtonLink>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
