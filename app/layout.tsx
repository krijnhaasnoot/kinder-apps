import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import Link from "next/link";
import Nav from "./components/Nav";
import "./globals.css";
import styles from "./layout.module.css";

const BASE_URL = "https://kinder-apps.vercel.app";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Kinder — Calm apps for growing families",
    template: "%s | Kinder",
  },
  description:
    "Kinder builds calm, thoughtful apps for growing families — from choosing a name to tracking fertility and birth.",
  openGraph: {
    title: "Kinder — Calm apps for growing families",
    description:
      "Kinder builds calm, thoughtful apps for growing families — from choosing a name to tracking fertility and birth.",
    url: BASE_URL,
    siteName: "Kinder",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/kinder-icon.png",
        width: 512,
        height: 512,
        alt: "Kinder — Calm apps for growing families",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Kinder — Calm apps for growing families",
    description:
      "Kinder builds calm, thoughtful apps for growing families — from choosing a name to tracking fertility and birth.",
    images: ["/images/kinder-icon.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/images/kinder-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Kinder",
              url: BASE_URL,
              logo: `${BASE_URL}/images/kinder-icon.png`,
              description:
                "Kinder builds calm, thoughtful apps for growing families — from choosing a name to tracking fertility and birth.",
              contactPoint: {
                "@type": "ContactPoint",
                email: "krijn.kinderapp@gmail.com",
                contactType: "customer support",
              },
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable}`}>
        <div className={styles.wrapper}>
          <Nav />

          <main className={styles.main}>{children}</main>

          <footer className={styles.footer}>
            <div className={styles.footerInner}>
              <p className={styles.footerText}>
                &copy; {new Date().getFullYear()} Kinder Family. Designed with
                care for life&apos;s important moments.
              </p>
              <ul className={styles.footerLinks}>
                <li>
                  <Link href="/privacy" className={styles.footerLink}>
                    Privacy
                  </Link>
                </li>
                <li>
                  <a
                    href="mailto:krijn.kinderapp@gmail.com"
                    className={styles.footerLink}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
