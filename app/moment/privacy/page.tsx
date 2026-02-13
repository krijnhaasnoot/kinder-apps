import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../shared.module.css";

export const metadata: Metadata = {
  title: "Moment — Privacy Policy",
  description:
    "Privacy policy for Moment, the calm fertility and cycle tracking companion. GDPR compliant.",
};

export default function MomentPrivacyPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.pageTitle}>Moment — Privacy Policy</h1>

      <p className={styles.pageText}>
        Your privacy is at the core of Moment. We collect{" "}
        <strong>only what&apos;s needed</strong> to help you track your cycle,
        and we <strong>never sell your data</strong>.
      </p>

      <div className={styles.note}>
        Moment is not a medical device and does not provide medical advice. It is
        intended for informational purposes only.
      </div>

      <p
        className={styles.pageText}
        style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", marginTop: "1rem" }}
      >
        Last updated: February 2026
      </p>

      <hr className={styles.divider} />

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>1. What data we collect</h2>
        <p className={styles.pageText}>
          Moment collects only the data you actively provide:
        </p>
        <ul className={styles.list}>
          <li>
            <strong>Account:</strong> Your name, email address, and
            authentication credentials.
          </li>
          <li>
            <strong>Cycle data:</strong> Menstrual cycle dates, fertility levels,
            LH test results, basal body temperature, cervical mucus observations,
            and pregnancy test results.
          </li>
          <li>
            <strong>Intimacy:</strong> Dates you choose to log.
          </li>
          <li>
            <strong>Partner link:</strong> An invite code to connect accounts.
            Your partner sees only fertility status — never your menstrual
            details, test results, or health observations.
          </li>
          <li>
            <strong>Health apps (optional):</strong> If you connect Apple Health
            or Health Connect, Moment reads and writes cycle-related data. This
            is entirely opt-in.
          </li>
          <li>
            <strong>Profile photo (optional):</strong> Stored securely if you
            choose to add one.
          </li>
        </ul>
        <p className={styles.pageText}>
          We <strong>do not</strong> collect location data, contacts, browsing
          history, or any data beyond what is listed above.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>2. How we use your data</h2>
        <p className={styles.pageText}>
          Your data is used exclusively to:
        </p>
        <ul className={styles.list}>
          <li>Provide fertility insights and cycle predictions within the app.</li>
          <li>Sync your data across your devices.</li>
          <li>
            Share limited fertility status with your connected partner (only what
            you&apos;ve opted into).
          </li>
          <li>Send push notifications you&apos;ve opted into.</li>
        </ul>
        <p className={styles.pageText}>
          We do <strong>not</strong> use your data for advertising, profiling,
          analytics, or any purpose other than the app&apos;s core functionality.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>3. Where your data is stored</h2>
        <p className={styles.pageText}>
          Your data is stored in <strong>Supabase</strong>, a cloud platform with
          servers in the <strong>EU</strong>. All data is encrypted in transit
          (TLS) and at rest.
        </p>
        <p className={styles.pageText}>
          Your profile photo is stored in Supabase Storage with signed URLs —
          only you and your connected partner can access it.
        </p>
        <p className={styles.pageText}>
          Local data (cycle cache, preferences) is stored on your device using
          standard iOS/Android storage mechanisms.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>4. Data sharing</h2>
        <p className={styles.pageText}>
          <strong>
            We do not sell, rent, or share your personal data with third parties.
            Period.
          </strong>
        </p>
        <p className={styles.pageText}>The only data sharing that occurs is:</p>
        <ul className={styles.list}>
          <li>
            <strong>Partner sync:</strong> If you connect a partner, they see
            your fertility level and LH test status. They do{" "}
            <strong>not</strong> see menstrual dates, temperature, cervical
            mucus, pregnancy tests, or notes.
          </li>
          <li>
            <strong>Apple Health / Health Connect:</strong> If you enable this,
            Moment reads and writes cycle data to your device&apos;s health
            platform. This data stays on your device and under your control.
          </li>
          <li>
            <strong>Push notifications:</strong> Delivered via Apple Push
            Notification Service (APNs) or Firebase Cloud Messaging (FCM).
            Notification content is minimal and follows your tone preference.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>5. Your rights (GDPR/AVG)</h2>
        <p className={styles.pageText}>
          Under the General Data Protection Regulation (GDPR), you have the
          right to:
        </p>
        <ul className={styles.list}>
          <li>
            <strong>Access:</strong> Request a copy of all data we store about
            you.
          </li>
          <li>
            <strong>Rectification:</strong> Correct any inaccurate data.
          </li>
          <li>
            <strong>Erasure:</strong> Delete your account and all associated data
            at any time (Settings &gt; Reset App).
          </li>
          <li>
            <strong>Portability:</strong> Export your data via Apple Health or
            Health Connect.
          </li>
          <li>
            <strong>Withdraw consent:</strong> Disable Health sync, partner
            sharing, or notifications at any time.
          </li>
          <li>
            <strong>Object:</strong> Object to data processing at any time.
          </li>
        </ul>
        <p className={styles.pageText}>
          To exercise these rights, contact us at{" "}
          <a href="mailto:privacy@momentapp.nl" className={styles.contactEmail}>
            privacy@momentapp.nl
          </a>
          .
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>6. Data retention</h2>
        <p className={styles.pageText}>
          Your data is stored as long as your account exists. When you delete
          your account (Settings &gt; Reset App), all data is{" "}
          <strong>permanently deleted</strong> from our servers within 30 days.
        </p>
        <p className={styles.pageText}>
          Local data on your device is deleted immediately.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>7. Children</h2>
        <p className={styles.pageText}>
          Moment is not intended for use by anyone under the age of 16. We do
          not knowingly collect data from children.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>8. Changes to this policy</h2>
        <p className={styles.pageText}>
          We may update this privacy policy from time to time. Significant
          changes will be communicated through the app. Continued use of Moment
          after changes constitutes acceptance.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>9. Contact</h2>
        <p className={styles.pageText}>
          If you have questions about this privacy policy or your data:
        </p>
        <p className={styles.pageText}>
          Email:{" "}
          <a href="mailto:privacy@momentapp.nl" className={styles.contactEmail}>
            privacy@momentapp.nl
          </a>
          <br />
          WhatsApp:{" "}
          <a href="https://wa.me/31611220008" className={styles.contactEmail}>
            +31 6 11220008
          </a>
        </p>
        <p className={styles.pageText}>
          Moment is developed by Krijn Haasnoot, based in the Netherlands.
        </p>
      </section>

      <hr className={styles.divider} />

      <p
        className={styles.pageText}
        style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)" }}
      >
        This policy is effective as of February 2026 and applies to Moment on
        the Apple App Store and Google Play Store.
      </p>

      <Link href="/moment" className={styles.backLink}>
        &larr; Back to Moment
      </Link>
    </div>
  );
}
