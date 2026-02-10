import type { Metadata } from "next";
import { PawPrint, Heart, Sparkles, Download } from "lucide-react";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Petnames by Kinder",
  description:
    "Find the perfect name for your pet. Swipe, save, and discover names that fit.",
};

const categories = [
  "Playful",
  "Elegant",
  "Strong",
  "Gentle",
  "Funny",
  "Classic",
  "Unique",
  "Nature",
];

export default function PetnamesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroIcon}>
            <PawPrint color="white" fill="white" aria-hidden="true" />
          </div>
          <h1 className={styles.heroTitle}>
            The perfect name for your pet.
          </h1>
          <p className={styles.heroText}>
            Swipe through creative pet names for dogs, cats, and more. Find a
            name that matches your furry friend&apos;s personality.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <PawPrint fill="currentColor" aria-hidden="true" />
            </div>
            <h3 className={styles.featureTitle}>Multiple pets</h3>
            <p className={styles.featureText}>
              Browse names for dogs, cats, birds, and other pets. Filter by
              personality and style.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Heart fill="currentColor" aria-hidden="true" />
            </div>
            <h3 className={styles.featureTitle}>Save favorites</h3>
            <p className={styles.featureText}>
              Keep a list of names you love and compare them side by side.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Sparkles aria-hidden="true" />
            </div>
            <h3 className={styles.featureTitle}>
              Creative &amp; classic
            </h3>
            <p className={styles.featureText}>
              Discover unique names you&apos;ve never heard, plus timeless
              classics.
            </p>
          </div>
        </div>
      </section>

      {/* Name Categories */}
      <section className={styles.categories}>
        <div className={styles.categoriesInner}>
          <h2 className={styles.categoriesTitle}>
            Names for every personality
          </h2>
          <div className={styles.categoriesGrid}>
            {categories.map((label) => (
              <div key={label} className={styles.categoryTag}>
                <span className={styles.categoryLabel}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Made for pet lovers */}
      <section className={styles.showcase}>
        <div className={styles.showcaseInner}>
          <h2 className={styles.showcaseTitle}>Made for pet lovers</h2>
          <div className={styles.showcaseCard}>
            <div className={styles.showcaseIcon}>
              <PawPrint fill="currentColor" aria-hidden="true" />
            </div>
            <p className={styles.showcaseText}>
              Petnames makes finding the perfect name fun and stress-free. No
              pressure, just playful swiping until you find &ldquo;the
              one.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Download Petnames</h2>
          <p className={styles.ctaText}>
            Start swiping and find the perfect name for your furry friend.
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
