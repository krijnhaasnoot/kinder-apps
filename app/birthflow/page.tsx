import type { Metadata } from "next";
import { Circle, Clock, List, Shield, Download, Heart } from "lucide-react";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Birthflow — Support during labor",
  description:
    "Birthflow helps you track contractions and focus on the moment during labor. Simple, calm, and supportive.",
};

export default function BirthflowPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroIcon}>
            <Circle color="white" strokeWidth={3} aria-hidden="true" />
          </div>
          <h1 className={styles.heroTitle}>
            A calm contraction timer for labor.
          </h1>
          <p className={styles.heroText}>
            Start, stop, and review contractions with clarity — so you can stay
            present.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Circle strokeWidth={3} aria-hidden="true" />
            </div>
            <h3 className={styles.featureTitle}>One-tap tracking</h3>
            <p className={styles.featureText}>
              Start and stop a contraction in a single tap.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Clock aria-hidden="true" />
            </div>
            <h3 className={styles.featureTitle}>Intervals &amp; duration</h3>
            <p className={styles.featureText}>
              See how long contractions last and how far apart they are.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <List aria-hidden="true" />
            </div>
            <h3 className={styles.featureTitle}>Simple history</h3>
            <p className={styles.featureText}>
              Review recent contractions at a glance.
            </p>
          </div>
        </div>
      </section>

      {/* Designed for Focus */}
      <section className={styles.focus}>
        <div className={styles.focusInner}>
          <h2 className={styles.focusTitle}>Designed for focus</h2>
          <div className={styles.focusCard}>
            <div className={styles.focusIcon}>
              <Circle strokeWidth={3} aria-hidden="true" />
            </div>
            <p className={styles.focusText}>
              Birthflow keeps the interface minimal and clear, so you can focus
              on what matters most during labor.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className={styles.privacy}>
        <div className={styles.privacyInner}>
          <h2 className={styles.privacyTitle}>Private &amp; secure</h2>
          <div className={styles.privacyCard}>
            <ul className={styles.privacyList}>
              <li className={styles.privacyItem}>
                <Shield aria-hidden="true" />
                <p>
                  <strong>Local-first:</strong> Your contraction data is stored
                  locally on your device where possible.
                </p>
              </li>
              <li className={styles.privacyItem}>
                <Shield aria-hidden="true" />
                <p>
                  <strong>Not a medical device:</strong> Birthflow is not a
                  medical device and does not provide medical advice.
                </p>
              </li>
              <li className={styles.privacyItem}>
                <Shield aria-hidden="true" />
                <p>
                  <strong>No selling data:</strong> We do not sell personal data.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* War Child */}
      <section className={styles.warChild}>
        <div className={styles.warChildInner}>
          <div className={styles.warChildIcon}>
            <Heart aria-hidden="true" />
          </div>
          <h2 className={styles.warChildTitle}>Supporting War Child</h2>
          <p className={styles.warChildText}>
            Birthflow is made from gratitude for a safe start. All proceeds are
            donated to War Child, supporting children growing up in conflict.
          </p>
          <a
            href="https://actie.voorwarchild.nl/fundraisers/birthflow"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.warChildLink}
          >
            Donate to War Child &rarr;
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Download Birthflow</h2>
          <p className={styles.ctaText}>
            Track contractions with clarity and calm.
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
