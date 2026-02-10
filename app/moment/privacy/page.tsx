import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../shared.module.css";

export const metadata: Metadata = {
  title: "Moment — Privacy Policy",
  description:
    "Privacy policy for Moment, the calm fertility and cycle tracking companion.",
};

export default function MomentPrivacyPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.pageTitle}>Moment — Privacy Policy</h1>

      <p className={styles.pageText}>
        This privacy policy explains how Moment collects, uses, and protects
        your information. Your health data is personal, and we handle it with
        the utmost care.
      </p>

      <div className={styles.note}>
        Moment is not a medical device and does not provide medical advice.
      </div>

      <hr className={styles.divider} />

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>What data we collect</h2>
        <ul className={styles.list}>
          <li>
            <strong>Profile:</strong> You create a profile with a display name
            and optional preferences to personalise your experience. No real
            name or email is required.
          </li>
          <li>
            <strong>Cycle data:</strong> When you log cycle dates, the data is
            stored to provide timing insights. This data is only accessible to
            you (and your linked partner, if you choose).
          </li>
          <li>
            <strong>LH test results:</strong> Optionally, you can log LH
            (luteinizing hormone) test results to refine timing insights. This
            data is treated as sensitive health data.
          </li>
          <li>
            <strong>Partner linking:</strong> You can link with a partner using
            a unique code — no contact list access required. Shared insights are
            always opt-in.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Health data handling</h2>
        <p className={styles.pageText}>
          Cycle data and LH test results are treated as sensitive health
          information. This data is stored securely, is never used for
          advertising purposes, and is never shared with third parties. Where
          possible, health data is stored locally on your device.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Partner sharing</h2>
        <p className={styles.pageText}>
          When you choose to link with a partner, certain cycle timing insights
          may be shared with them. This sharing is always opt-in, and you control
          exactly what is visible. You can unlink at any time, which immediately
          revokes your partner&apos;s access.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Analytics</h2>
        <p className={styles.pageText}>
          We may collect limited, non-sensitive usage analytics to improve the
          app. No health data, cycle information, or personal details are
          included in analytics. You can opt out where available.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Data storage &amp; security</h2>
        <p className={styles.pageText}>
          Your data is stored securely using industry-standard encryption. We
          never sell your data to third parties. Health data is handled with
          extra care and kept separate from analytics data.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Data deletion</h2>
        <p className={styles.pageText}>
          You can delete your account and all associated data — including all
          health data — at any time from within the app. Once deleted, your data
          is permanently removed from our servers.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Advertising &amp; paid features</h2>
        <p className={styles.pageText}>
          Moment may include optional paid features or non-intrusive advertising
          in the future. We will always be transparent about changes and will
          never use your health or personal data for ad targeting.
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
        This policy is effective as of February 2026 and applies to Moment on
        the Apple App Store and Google Play Store. We may update this policy from
        time to time — any changes will be reflected on this page.
      </p>

      <Link href="/moment" className={styles.backLink}>
        &larr; Back to Moment
      </Link>
    </div>
  );
}
