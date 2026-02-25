import type { Metadata } from "next";
import Image from "next/image";
import { Users, MapPin, Shield, Download, Snowflake } from "lucide-react";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Iglo — Stay connected on the slopes",
  description:
    "Iglo is a ski group and family tracker for winter sports. See where everyone is, set meeting points, and enjoy the mountain together.",
};

export default function IgloPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <Image
            src="/images/iglo-icon.png"
            alt="Iglo"
            width={80}
            height={80}
            className={styles.heroAppIcon}
          />
          <h1 className={styles.heroTitle}>
            Stay connected on the slopes.
          </h1>
          <p className={styles.heroText}>
            Iglo keeps your ski group together — see where everyone is, set
            meeting points, and enjoy the mountain without losing each other.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Users aria-hidden="true" />
            </div>
            <h3 className={styles.featureTitle}>Group tracking</h3>
            <p className={styles.featureText}>
              See your group on the map in real time. Know who&apos;s on which
              slope, who&apos;s at the lodge, and who&apos;s still on their way.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <MapPin aria-hidden="true" />
            </div>
            <h3 className={styles.featureTitle}>Meeting points</h3>
            <p className={styles.featureText}>
              Drop a pin at the restaurant, lift, or lodge. Everyone gets a
              notification and can navigate there.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Snowflake aria-hidden="true" />
            </div>
            <h3 className={styles.featureTitle}>Ski stats</h3>
            <p className={styles.featureText}>
              Track your runs, vertical meters, and top speed. Compare with
              your group at the end of the day.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className={styles.howItWorks}>
        <div className={styles.howItWorksInner}>
          <h2 className={styles.howItWorksTitle}>How it works</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3 className={styles.stepTitle}>Create a group</h3>
              <p className={styles.stepText}>
                Start a group and share the invite code with your family or
                friends.
              </p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3 className={styles.stepTitle}>Hit the slopes</h3>
              <p className={styles.stepText}>
                Everyone shows up on the map. Ski at your own pace, stay
                connected.
              </p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3 className={styles.stepTitle}>Meet up easily</h3>
              <p className={styles.stepText}>
                Set a meeting point when it&apos;s time for lunch or the last
                run of the day.
              </p>
            </div>
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
                  <strong>Only your group:</strong> Your location is only
                  visible to people in your group — never to strangers.
                </p>
              </li>
              <li className={styles.privacyItem}>
                <Shield aria-hidden="true" />
                <p>
                  <strong>You&apos;re in control:</strong> Stop sharing your
                  location at any time with a single tap.
                </p>
              </li>
              <li className={styles.privacyItem}>
                <Shield aria-hidden="true" />
                <p>
                  <strong>No tracking off-slope:</strong> Iglo only tracks when
                  you&apos;re actively using it. No background surveillance.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Ready for the mountain?</h2>
          <p className={styles.ctaText}>
            Download Iglo and keep your group together on the slopes.
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
