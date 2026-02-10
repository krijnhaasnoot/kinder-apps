import type { Metadata } from "next";
import styles from "../shared.module.css";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Privacy policy for all Kinder apps — Kinder, Moment, Birthflow, and Petnames.",
};

export default function PrivacyPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.pageTitle}>Privacy</h1>

      <p className={styles.pageText}>
        This privacy policy applies to all apps published by Kinder, including
        Kinder, Moment, Birthflow, and Petnames. We believe your data is yours,
        and we treat it with care.
      </p>

      <hr className={styles.divider} />

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>What data we collect</h2>
        <ul className={styles.list}>
          <li>
            <strong>Account information:</strong> When you create a profile, we
            store your chosen display name and app preferences. No real name or
            email is required to use the app.
          </li>
          <li>
            <strong>App-specific data:</strong> Depending on the app, this may
            include baby name preferences (Kinder), cycle and fertility data
            (Moment), contraction timings (Birthflow), or pet name favourites
            (Petnames).
          </li>
          <li>
            <strong>Partner linking:</strong> Some apps allow you to link with a
            partner using a unique code. We do not access your contacts or
            require email addresses for linking.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Analytics</h2>
        <p className={styles.pageText}>
          We collect anonymous usage analytics to understand how our apps are
          used and to improve the experience. This data does not include any
          personal information, health data, or content you create within the
          apps.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Partner sharing</h2>
        <p className={styles.pageText}>
          When you choose to link with a partner, certain data (such as name
          matches or cycle insights) may be shared with your linked partner. This
          sharing is always opt-in, and you can unlink at any time.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Data storage &amp; security</h2>
        <p className={styles.pageText}>
          Your data is stored securely and is never sold to third parties. We use
          industry-standard security practices to protect your information. Health
          data in Moment and Birthflow is handled with extra care and is never
          used for advertising purposes.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Data deletion</h2>
        <p className={styles.pageText}>
          You can delete your account and all associated data at any time from
          within the app. Once deleted, your data is permanently removed from
          our servers. If you need help, contact us at the address below.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Advertising &amp; paid features</h2>
        <p className={styles.pageText}>
          Some apps may include optional paid features or non-intrusive
          advertising in the future. We will always be transparent about any
          changes and will never use your personal or health data for ad
          targeting.
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

      <p className={styles.pageText} style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)" }}>
        This policy is effective as of February 2026 and applies to all Kinder
        apps available on the Apple App Store and Google Play Store. We may
        update this policy from time to time — any changes will be reflected on
        this page.
      </p>
    </div>
  );
}
