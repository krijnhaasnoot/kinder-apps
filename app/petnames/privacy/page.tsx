import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../shared.module.css";

export const metadata: Metadata = {
  title: "Petnames — Privacy Policy",
  description:
    "Privacy policy for Petnames, the pet name swiping app by Kinder.",
};

export default function PetnamesPrivacyPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.pageTitle}>Petnames — Privacy Policy</h1>

      <p className={styles.pageText}>
        This privacy policy explains how Petnames collects, uses, and protects
        your information. We keep things simple and respectful — just like the
        app.
      </p>

      <hr className={styles.divider} />

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>What data we collect</h2>
        <ul className={styles.list}>
          <li>
            <strong>Profile:</strong> You may create a profile with a display
            name and pet preferences. No real name or email is required.
          </li>
          <li>
            <strong>Name preferences:</strong> When you swipe on pet names, your
            likes and passes are stored to build your favourites list.
          </li>
          <li>
            <strong>Pet type selection:</strong> Your chosen pet type (dog, cat,
            etc.) is stored to personalise name suggestions.
          </li>
        </ul>
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
          Petnames may include optional paid features or non-intrusive
          advertising in the future. We will always be transparent about changes
          and will never use your personal data for ad targeting.
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
        This policy is effective as of February 2026 and applies to Petnames on
        the Apple App Store and Google Play Store. We may update this policy from
        time to time — any changes will be reflected on this page.
      </p>

      <Link href="/petnames" className={styles.backLink}>
        &larr; Back to Petnames
      </Link>
    </div>
  );
}
