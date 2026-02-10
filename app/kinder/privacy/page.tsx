import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../shared.module.css";

export const metadata: Metadata = {
  title: "Kinder — Privacy Policy",
  description:
    "Privacy policy for Kinder, the baby name swiping app for couples.",
};

export default function KinderPrivacyPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.pageTitle}>Kinder — Privacy Policy</h1>

      <p className={styles.pageText}>
        This privacy policy explains how Kinder collects, uses, and protects
        your information. We believe your data is yours, and we treat it with
        care.
      </p>

      <hr className={styles.divider} />

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>What data we collect</h2>
        <ul className={styles.list}>
          <li>
            <strong>Profile:</strong> You create a profile with a display name
            and optional preferences. No real name or email is required.
          </li>
          <li>
            <strong>Name preferences:</strong> When you swipe on baby names,
            your likes and passes are stored to build your shortlist and find
            matches with your partner.
          </li>
          <li>
            <strong>Partner linking:</strong> You can link with a partner using
            a unique code. We do not access your contacts or require email
            addresses for linking.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Partner sharing</h2>
        <p className={styles.pageText}>
          When you link with a partner, your name matches (names you both liked)
          are shared between accounts. Individual swipes are not shared — only
          mutual matches. You can unlink at any time.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Analytics</h2>
        <p className={styles.pageText}>
          We collect anonymous usage analytics to understand how the app is used
          and to improve the experience. This data does not include your name
          preferences or any personal information.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Data storage &amp; security</h2>
        <p className={styles.pageText}>
          Your data is stored securely and is never sold to third parties. We use
          industry-standard security practices to protect your information.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Data deletion</h2>
        <p className={styles.pageText}>
          You can delete your account and all associated data at any time from
          within the app. Once deleted, your data is permanently removed from our
          servers.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Advertising &amp; paid features</h2>
        <p className={styles.pageText}>
          Kinder may include optional paid features or non-intrusive advertising
          in the future. We will always be transparent about changes and will
          never use your personal data for ad targeting.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Contact</h2>
        <p className={styles.pageText}>
          If you have questions about this privacy policy or your data, please
          contact us at:
        </p>
        <p className={styles.pageText}>
          <a
            href="mailto:krijn.kinderapp@gmail.com"
            className={styles.contactEmail}
          >
            krijn.kinderapp@gmail.com
          </a>
        </p>
      </section>

      <hr className={styles.divider} />

      <p
        className={styles.pageText}
        style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)" }}
      >
        This policy is effective as of February 2026 and applies to Kinder on
        the Apple App Store and Google Play Store. We may update this policy from
        time to time — any changes will be reflected on this page.
      </p>

      <Link href="/kinder" className={styles.backLink}>
        &larr; Back to Kinder
      </Link>
    </div>
  );
}
