import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../shared.module.css";

export const metadata: Metadata = {
  title: "Birthflow — Privacy Policy",
  description:
    "Privacy policy for Birthflow, the calm contraction timer for labor.",
};

export default function BirthflowPrivacyPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.pageTitle}>Birthflow — Privacy Policy</h1>

      <p className={styles.pageText}>
        This privacy policy explains how Birthflow collects, uses, and protects
        your information. We keep things minimal and private, especially during
        such an important moment.
      </p>

      <div className={styles.note}>
        Birthflow is not a medical device and does not provide medical advice.
        Always consult your healthcare provider during labor.
      </div>

      <hr className={styles.divider} />

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>What data we collect</h2>
        <ul className={styles.list}>
          <li>
            <strong>Contraction data:</strong> When you track contractions,
            timestamps and durations are stored to show you intervals and
            patterns. This data is stored locally on your device where possible.
          </li>
          <li>
            <strong>No account required:</strong> Birthflow does not require you
            to create an account or provide any personal information to use the
            app.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Local-first design</h2>
        <p className={styles.pageText}>
          Birthflow is designed with a local-first approach. Your contraction
          data is stored on your device where possible, minimising the amount of
          data that leaves your phone. This means your most sensitive data stays
          with you.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Analytics</h2>
        <p className={styles.pageText}>
          We may collect limited, non-sensitive usage analytics to understand how
          the app is used and to improve the experience. No contraction data,
          health information, or personal details are included in analytics.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Data storage &amp; security</h2>
        <p className={styles.pageText}>
          Any data that is stored remotely is protected using industry-standard
          encryption. We never sell your data to third parties. Health-related
          data is never used for advertising purposes.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Data deletion</h2>
        <p className={styles.pageText}>
          You can clear your contraction history at any time from within the app.
          Since data is primarily stored locally, deleting the app also removes
          your data. If any data is stored remotely, it will be permanently
          deleted upon request.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Advertising &amp; paid features</h2>
        <p className={styles.pageText}>
          Birthflow may include optional paid features in the future. We will
          always be transparent about changes and will never use your personal or
          health data for ad targeting.
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
        This policy is effective as of February 2026 and applies to Birthflow on
        the Apple App Store and Google Play Store. We may update this policy from
        time to time — any changes will be reflected on this page.
      </p>

      <Link href="/birthflow" className={styles.backLink}>
        &larr; Back to Birthflow
      </Link>
    </div>
  );
}
