import type { Metadata } from "next";
import { Heart, Users, Sparkles, Download } from "lucide-react";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Kinder — Baby names, together",
  description:
    "Kinder helps parents discover baby names together. Swipe, match, and build a shortlist you both love.",
};

function StorkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 21C12 21 4 15 4 9.5C4 6.5 6 4 8.5 4C10 4 11.5 5 12 6.5C12.5 5 14 4 15.5 4C18 4 20 6.5 20 9.5C20 15 12 21 12 21Z"
        fill="white"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function KinderPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroIcon}>
            <StorkIcon />
          </div>
          <h1 className={styles.heroTitle}>
            Find the perfect baby name, together.
          </h1>
          <p className={styles.heroText}>
            Swipe through thousands of baby names with your partner. Save
            favorites, share lists, and discover the name that feels just right.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Heart fill="currentColor" />
            </div>
            <h3 className={styles.featureTitle}>Swipe together</h3>
            <p className={styles.featureText}>
              Connect with your partner and swipe through names side by side. See
              instant matches when you both love a name.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Users />
            </div>
            <h3 className={styles.featureTitle}>
              First &amp; last names
            </h3>
            <p className={styles.featureText}>
              Browse both first names and surnames. See how they sound together
              before making your choice.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Sparkles />
            </div>
            <h3 className={styles.featureTitle}>Meaningful origins</h3>
            <p className={styles.featureText}>
              Discover the meaning and origin of each name to find one that
              resonates with your family.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className={styles.howItWorks}>
        <div className={styles.howInner}>
          <h2 className={styles.howTitle}>Simple as swipe right</h2>
          <div className={styles.howCard}>
            <div className={styles.stepsGrid}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>1</div>
                <h3 className={styles.stepTitle}>Connect</h3>
                <p className={styles.stepText}>
                  Invite your partner with a simple code
                </p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>2</div>
                <h3 className={styles.stepTitle}>Swipe</h3>
                <p className={styles.stepText}>
                  Like names you love, pass on the rest
                </p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>3</div>
                <h3 className={styles.stepTitle}>Match</h3>
                <p className={styles.stepText}>
                  Find names you both agree on
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className={styles.privacy}>
        <div className={styles.privacyInner}>
          <h2 className={styles.privacyTitle}>
            Your choices, your privacy
          </h2>
          <div className={styles.privacyCard}>
            <ul className={styles.privacyList}>
              <li className={styles.privacyItem}>
                <Heart fill="currentColor" />
                <p>
                  <strong>Private by default:</strong> Your name preferences are
                  only shared with your partner.
                </p>
              </li>
              <li className={styles.privacyItem}>
                <Heart fill="currentColor" />
                <p>
                  <strong>No pressure:</strong> Take your time exploring names at
                  your own pace.
                </p>
              </li>
              <li className={styles.privacyItem}>
                <Heart fill="currentColor" />
                <p>
                  <strong>No selling data:</strong> We do not sell personal data.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Start swiping today</h2>
          <p className={styles.ctaText}>
            Download Kinder and find the perfect name for your little one.
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.ctaPrimary}>
              <Download />
              Download on iOS
            </button>
            <button className={styles.ctaSecondary}>
              <Download />
              Download on Android
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
