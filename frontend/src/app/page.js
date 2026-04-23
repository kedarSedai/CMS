import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { blogPosts } from "@/data/blogPosts";
import { events, sortEventsByDate } from "@/data/events";
import { serviceProjects } from "@/data/serviceProjects";
import { testimonials } from "@/data/testimonials";
import { pressItems } from "@/data/press";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ButtonLink";
import { formatDate, formatDateTimeRange, isPastEvent } from "@/lib/dates";

export const metadata = {
  title: "Home",
  description: site.description,
  openGraph: {
    title: `${site.name} · Home`,
    description: site.description,
  },
};

function MiniMeta({ children }) {
  return (
    <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--accent)]">
      {children}
    </p>
  );
}

export default function HomePage() {
  const sortedEvents = sortEventsByDate(events);
  const upcoming = sortedEvents.filter((e) => !isPastEvent(e.startDate));
  const nextEvent = upcoming[0];
  const eventRows = sortedEvents.slice(0, 6);
  const sidebarPosts = blogPosts.slice(0, 4);
  const sidebarPress = pressItems.slice(0, 2);

  return (
    <main id="main" className="min-w-0 overflow-x-hidden">
      {/* Top strip — dense utility bar (sports-club style) */}
      <div className="min-w-0 border-b border-[var(--border)] bg-[var(--surface)] text-xs text-[var(--ink-soft)]">
        <Container
          wide
          className="flex flex-col gap-2 py-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-2"
        >
          <div className="flex min-w-0 flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3">
            <a
              className="min-w-0 break-all hover:text-[var(--accent)] sm:break-words"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
            <span className="hidden text-[var(--ink-muted)] sm:inline" aria-hidden>
              ·
            </span>
            <span className="shrink-0">{site.phone}</span>
          </div>
          <div className="flex flex-shrink-0 flex-wrap gap-x-3 gap-y-1 font-medium">
            <Link className="hover:text-[var(--accent)]" href="/events">
              Events
            </Link>
            <Link className="hover:text-[var(--accent)]" href="/get-involved">
              Volunteer
            </Link>
            <a className="text-[var(--accent)] hover:underline" href={site.donateUrl}>
              Donate →
            </a>
          </div>
        </Container>
      </div>

      {/* Hero + sidebar widgets */}
      <section className="min-w-0 border-b border-[var(--border)] bg-[var(--surface-2)] py-6 sm:py-8">
        <Container wide className="min-w-0">
          <div className="grid min-w-0 gap-6 xl:grid-cols-12">
            <div className="flex min-w-0 flex-col gap-5 xl:col-span-8">
              <div className="min-w-0 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm sm:p-7">
                <MiniMeta>Nonprofit · Founded by {site.founder}</MiniMeta>
                <h1 className="mt-2 hyphens-auto break-words font-heading text-2xl font-extrabold leading-tight tracking-tight text-[var(--ink)] sm:text-3xl md:text-4xl lg:text-5xl">
                  Youth sports, music, academics, and service—rising together in every
                  neighborhood.
                </h1>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--ink-soft)] sm:text-base">
                  {site.tagline} This layout mirrors a dense club homepage: hero story
                  on the left, live widgets on the right, then full-width grids so the
                  page feels full and scannable.
                </p>
                <div className="mt-5 flex min-w-0 flex-wrap gap-2">
                  <ButtonLink href={site.donateUrl} external className="max-w-full text-center">
                    Donate (secure link)
                  </ButtonLink>
                  <ButtonLink href="/get-involved" variant="secondary" className="max-w-full text-center">
                    Get involved
                  </ButtonLink>
                  <ButtonLink href="/resources" variant="ghost" className="max-w-full !px-3 text-center">
                    Parent resources →
                  </ButtonLink>
                </div>
                <p className="mt-3 break-words text-[11px] text-[var(--ink-muted)]">
                  Set <code className="break-all rounded bg-[var(--code-bg)] px-1">NEXT_PUBLIC_DONATE_URL</code> or edit{" "}
                  <code className="break-all rounded bg-[var(--code-bg)] px-1">src/data/site.js</code>.
                </p>
              </div>
              <div className="relative aspect-[4/3] min-h-[180px] w-full max-w-full overflow-hidden rounded-xl border border-[var(--border)] shadow-md sm:aspect-[21/10] sm:min-h-[200px]">
                <Image
                  src="/photo.JPEG"
                  alt="Rising MVPs youth and community outdoors"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 66vw"
                  priority
                />
              </div>
            </div>

            <aside className="flex min-w-0 flex-col gap-3 xl:col-span-4">
              <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm">
                <MiniMeta>Give</MiniMeta>
                <p className="mt-1 font-heading text-lg font-bold text-[var(--ink)]">
                  Fuel clinics &amp; service days
                </p>
                <p className="mt-1 text-xs text-[var(--ink-soft)]">
                  One-time or recurring—your platform handles receipts.
                </p>
                <ButtonLink href={site.donateUrl} external className="mt-3 w-full">
                  Open donation flow
                </ButtonLink>
              </div>

              <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm">
                <MiniMeta>Next on the calendar</MiniMeta>
                {nextEvent ? (
                  <Link
                    href={`/events/${nextEvent.slug}`}
                    className="mt-2 block rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-3 transition hover:border-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
                  >
                    <p className="text-[11px] font-medium text-[var(--ink-muted)]">
                      {formatDateTimeRange(nextEvent.startDate, nextEvent.endDate)}
                    </p>
                    <p className="mt-1 font-heading text-base font-bold text-[var(--ink)]">
                      {nextEvent.title}
                    </p>
                    <p className="mt-1 line-clamp-2 text-xs text-[var(--ink-soft)]">
                      {nextEvent.summary}
                    </p>
                    <span className="mt-2 inline-block text-xs font-semibold text-[var(--accent)]">
                      Details &amp; RSVP →
                    </span>
                  </Link>
                ) : (
                  <p className="mt-2 text-sm text-[var(--ink-soft)]">
                    New dates posting soon.
                  </p>
                )}
                <Link
                  href="/events"
                  className="mt-3 block text-center text-xs font-semibold text-[var(--accent)] hover:underline"
                >
                  Full calendar
                </Link>
              </div>

              <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm">
                <MiniMeta>Latest stories</MiniMeta>
                <ul className="mt-2 divide-y divide-[var(--border)]">
                  {sidebarPosts.map((post) => (
                    <li key={post.id} className="py-2 first:pt-0 last:pb-0">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="group flex min-w-0 gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
                      >
                        <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-md border border-[var(--border)]">
                          <Image
                            src={post.coverUrl}
                            alt=""
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[10px] text-[var(--ink-muted)]">
                            {formatDate(post.publishedAt)}
                          </p>
                          <p className="line-clamp-2 text-xs font-semibold leading-snug text-[var(--ink)] group-hover:text-[var(--accent)]">
                            {post.title}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm">
                <MiniMeta>In the press</MiniMeta>
                <ul className="mt-2 space-y-2">
                  {sidebarPress.map((p) => (
                    <li key={p.id}>
                      <Link
                        href={`/press/${p.slug}`}
                        className="break-words text-xs font-semibold text-[var(--ink)] hover:text-[var(--accent)]"
                      >
                        {p.title}
                      </Link>
                      <p className="text-[10px] text-[var(--ink-muted)]">{p.outlet}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* Dense 3-column band: service + blog list + voices */}
      <section className="min-w-0 border-b border-[var(--border)] bg-[var(--surface)] py-8">
        <Container wide className="min-w-0">
          <div className="grid min-w-0 gap-6 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="border-b border-[var(--border)] pb-2 font-heading text-lg font-bold text-[var(--ink)]">
                Service in motion
              </h2>
              <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {serviceProjects.map((p) => (
                  <article
                    key={p.id}
                    className="flex min-w-0 gap-3 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-3"
                  >
                    <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-md">
                      <Image
                        src={p.coverUrl}
                        alt={p.coverAlt}
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-heading text-sm font-bold leading-tight text-[var(--ink)]">
                        {p.title}
                      </h3>
                      <p className="mt-1 line-clamp-2 text-[11px] text-[var(--ink-soft)]">
                        {p.summary}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
              <ButtonLink href="/service-projects" variant="ghost" className="mt-3 !px-0 text-xs">
                All service projects →
              </ButtonLink>
            </div>

            <div className="lg:col-span-5">
              <h2 className="border-b border-[var(--border)] pb-2 font-heading text-lg font-bold text-[var(--ink)]">
                Featured &amp; long reads
              </h2>
              <div className="mt-3 space-y-3">
                {blogPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="flex min-w-0 gap-3 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-3 transition hover:border-[var(--accent)]"
                  >
                    <div className="relative hidden h-24 w-32 shrink-0 overflow-hidden rounded-md sm:block">
                      <Image
                        src={post.coverUrl}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="128px"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((t) => (
                          <span
                            key={t.slug}
                            className="rounded bg-[var(--code-bg)] px-1.5 py-0.5 text-[10px] font-semibold text-[var(--ink-muted)]"
                          >
                            {t.name}
                          </span>
                        ))}
                      </div>
                      <h3 className="mt-1 font-heading text-sm font-bold text-[var(--ink)] sm:text-base">
                        {post.title}
                      </h3>
                      <p className="mt-1 line-clamp-2 text-xs text-[var(--ink-soft)]">
                        {post.excerpt}
                      </p>
                      <p className="mt-2 text-[10px] text-[var(--ink-muted)]">
                        {formatDate(post.publishedAt)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              <h2 className="border-b border-[var(--border)] pb-2 font-heading text-lg font-bold text-[var(--ink)]">
                Voices
              </h2>
              <div className="mt-3 space-y-3">
                {testimonials.map((t) => (
                  <figure
                    key={t.id}
                    className="rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-3"
                  >
                    <blockquote className="text-xs leading-relaxed text-[var(--ink-soft)]">
                      “{t.quote}”
                    </blockquote>
                    <figcaption className="mt-2 text-[11px] font-semibold text-[var(--ink)]">
                      {t.name}
                      <span className="font-normal text-[var(--ink-muted)]">
                        {" "}
                        · {t.role}
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>
              <Link
                href="/testimonials"
                className="mt-3 inline-block text-xs font-semibold text-[var(--accent)] hover:underline"
              >
                More testimonials →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Schedule table — fills width */}
      <section className="min-w-0 bg-[var(--surface-2)] py-8">
        <Container wide className="min-w-0">
          <div className="mb-4 flex min-w-0 flex-wrap items-end justify-between gap-3 border-b border-[var(--border)] pb-3">
            <h2 className="font-heading text-xl font-bold text-[var(--ink)]">
              Schedule &amp; results
            </h2>
            <Link
              href="/events"
              className="text-sm font-semibold text-[var(--accent)] hover:underline"
            >
              View all events
            </Link>
          </div>
          <div className="max-w-full overflow-x-auto rounded-lg border border-[var(--border)] bg-[var(--surface)] [-webkit-overflow-scrolling:touch]">
            <table className="w-full min-w-[min(100%,36rem)] table-fixed text-left text-xs sm:min-w-[40rem] sm:text-sm md:table-auto md:min-w-[640px]">
              <thead className="border-b border-[var(--border)] bg-[var(--surface-2)] text-[10px] font-semibold uppercase tracking-wide text-[var(--ink-muted)]">
                <tr>
                  <th className="w-[12%] px-2 py-2 sm:px-3">Status</th>
                  <th className="w-[22%] px-2 py-2 sm:px-3">When</th>
                  <th className="px-2 py-2 sm:px-3">Event</th>
                  <th className="hidden px-2 py-2 sm:table-cell sm:px-3">Location</th>
                  <th className="w-[10%] px-2 py-2 text-right sm:px-3"> </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)]">
                {eventRows.map((e) => {
                  const past = isPastEvent(e.startDate);
                  return (
                    <tr key={e.id} className="hover:bg-[var(--surface-2)]">
                      <td className="px-2 py-2 sm:px-3">
                        <span
                          className={`inline-block rounded px-2 py-0.5 text-[10px] font-bold uppercase ${
                            past
                              ? "bg-[var(--sun)] text-[var(--ink)]"
                              : "bg-[var(--accent)] text-[var(--accent-fg)]"
                          }`}
                        >
                          {past ? "Past" : "Upcoming"}
                        </span>
                      </td>
                      <td className="break-words px-2 py-2 text-[10px] leading-snug text-[var(--ink-soft)] sm:whitespace-nowrap sm:px-3 sm:text-xs">
                        {formatDateTimeRange(e.startDate, e.endDate)}
                      </td>
                      <td className="break-words px-2 py-2 font-medium text-[var(--ink)] sm:px-3">
                        {e.title}
                      </td>
                      <td className="hidden break-words px-2 py-2 text-xs text-[var(--ink-muted)] sm:table-cell sm:px-3">
                        {e.location}
                      </td>
                      <td className="px-2 py-2 text-right sm:px-3">
                        <Link
                          className="text-xs font-semibold text-[var(--accent)] hover:underline"
                          href={`/events/${e.slug}`}
                        >
                          {past ? "Recap" : "RSVP"}
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* Mission strip */}
      <section className="min-w-0 border-b border-[var(--border)] bg-[var(--surface)] py-8">
        <Container wide className="min-w-0">
          <div className="grid min-w-0 gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl font-bold text-[var(--ink)]">
                Mission &amp; story
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)] sm:text-base">
                Rising MVPs grows discipline and empathy through sports, music, and
                academics, then channels that same energy into neighborhood service. When
                families need
                support, we aim to be a steady presence—not a one-off photo op.
              </p>
              <ButtonLink href="/about" variant="ghost" className="mt-3 !px-0 text-sm">
                About {site.founder} &amp; the team →
              </ButtonLink>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-2)] p-5">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-[var(--accent)]">
                Quick links
              </h3>
              <ul className="mt-3 space-y-2 text-sm font-medium text-[var(--accent)]">
                <li>
                  <Link href="/faq" className="hover:underline">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/press" className="hover:underline">
                    Press room
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact &amp; media
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="hover:underline">
                    Music, sports, &amp; study resources
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="min-w-0 bg-[var(--cta-bg)] py-12 text-[var(--cta-fg)]">
        <Container wide className="flex min-w-0 flex-col items-center px-4 text-center sm:px-6">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">
            Ready to rise with us?
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-[var(--cta-muted)] sm:text-base">
            Donate, volunteer, or start a sponsorship conversation. The backend folder is
            ready when you plug in Strapi or your API.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <ButtonLink
              href={site.donateUrl}
              external
              className="!bg-[var(--surface)] !text-[var(--ink)] hover:!opacity-95"
            >
              Give today
            </ButtonLink>
            <ButtonLink
              href="/contact"
              variant="secondary"
              className="!border-[var(--cta-fg)] !bg-transparent !text-[var(--cta-fg)] hover:!bg-white/10"
            >
              Contact the team
            </ButtonLink>
          </div>
        </Container>
      </section>
    </main>
  );
}
