import { DM_Sans, Nunito } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { AppThemeProvider } from "@/components/AppThemeProvider";
import { SkipLink } from "@/components/SkipLink";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · Youth sports, music, academics, and service`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${nunito.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full min-w-0 flex-col overflow-x-hidden bg-[var(--cream)] text-[var(--ink)] antialiased">
        <AppThemeProvider>
          <SkipLink />
          <SiteHeader />
          <div className="flex min-w-0 flex-1 flex-col">{children}</div>
          <SiteFooter />
        </AppThemeProvider>
      </body>
    </html>
  );
}
