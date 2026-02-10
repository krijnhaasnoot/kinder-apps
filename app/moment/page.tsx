import type { Metadata } from "next";
import { Droplet, Users, Shield, Download } from "lucide-react";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Moment — Understand your cycle",
  description:
    "Moment is a calm fertility companion. Track your cycle, notice patterns, and share insights with your partner — without pressure.",
};

export default function MomentPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroIcon}>
            <Droplet color="white" fill="white" aria-hidden="true" />
          </div>
          <h1 className={styles.heroTitle}>Timing, without pressure.</h1>
          <p className={styles.heroText}>
            Moment helps couples understand fertility and cycle timing in a
            gentle, privacy-first way.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Droplet fill="currentColor" aria-hidden="true" />
            </div>
            <h3 className={styles.featureTitle}>Cycle insights</h3>
            <p className={styles.featureText}>
              Understand where you are in your cycle with simple, calm visuals.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Users aria-hidden="true" />
            </div>
            <h3 className={styles.featureTitle}>Partner sharing</h3>
            <p className={styles.featureText}>
              Share timing with your partner using a private code — only if you
              choose.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Shield aria-hidden="true" />
            </div>
            <h3 className={styles.featureTitle}>Privacy-first</h3>
            <p className={styles.featureText}>
              Built to minimize data collection and keep things respectful.
            </p>
          </div>
        </div>
      </section>

      {/* How LH tests help */}
      <section className={styles.lh}>
        <div className={styles.lhInner}>
          <h2 className={styles.lhTitle}>How LH tests help</h2>
          <div className={styles.lhCard}>
            <p>
              Logging LH (luteinizing hormone) test results is optional, but it
              can help refine timing insights over time.
            </p>
            <p>
              Moment is designed with a gentle, non-medical tone — it&apos;s a
              tool to support understanding, not to replace medical advice.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className={styles.privacy}>
        <div className={styles.privacyInner}>
          <h2 className={styles.privacyTitle}>Your privacy matters</h2>
          <div className={styles.privacyCard}>
            <ul className={styles.privacyList}>
              <li className={styles.privacyItem}>
                <Shield aria-hidden="true" />
                <p>
                  <strong>Not a medical device:</strong> Moment is not a medical
                  device and does not provide medical advice.
                </p>
              </li>
              <li className={styles.privacyItem}>
                <Shield aria-hidden="true" />
                <p>
                  <strong>No selling data:</strong> We do not sell personal data.
                </p>
              </li>
              <li className={styles.privacyItem}>
                <Shield aria-hidden="true" />
                <p>
                  <strong>Limited analytics:</strong> We may collect limited,
                  non-sensitive usage analytics to improve the app. You can opt
                  out where available.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Ready to get started?</h2>
          <p className={styles.ctaText}>
            Download Moment today and start understanding your cycle with care.
          </p>
          <div className={styles.ctaButtons}>
            <span className={styles.ctaBadge}>
              <Download aria-hidden="true" />
              iOS — Coming soon
            </span>
            <span className={styles.ctaBadge}>
              <Download aria-hidden="true" />
              Android — Coming soon
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
