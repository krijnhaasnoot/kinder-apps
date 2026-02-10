import Link from "next/link";
import { Circle, PawPrint, Droplet, ArrowRight, MessageCircle } from "lucide-react";
import styles from "./page.module.css";

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

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>The Kinder Family</h1>
          <p className={styles.heroText}>
            Four apps designed with care for life&apos;s most important moments
            — from choosing names to welcoming new life.
          </p>
        </div>
      </section>

      {/* Apps Grid */}
      <section className={styles.appsSection}>
        <div className={styles.grid}>
          {/* Kinder */}
          <Link href="/kinder" className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={`${styles.cardIcon} ${styles.iconKinder}`}>
                <StorkIcon />
              </div>
              <div className={styles.cardInfo}>
                <h2 className={styles.cardTitle}>Kinder</h2>
                <p className={styles.cardSubtitle}>Baby name swiping</p>
              </div>
            </div>
            <p className={styles.cardText}>
              Swipe through baby names together. Save favorites, share with your
              partner, and find the perfect name for your little one.
            </p>
            <span className={`${styles.cardLink} ${styles.linkKinder}`}>
              Learn more <ArrowRight />
            </span>
          </Link>

          {/* Birthflow */}
          <Link href="/birthflow" className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={`${styles.cardIcon} ${styles.iconBirthflow}`}>
                <Circle color="white" strokeWidth={3} />
              </div>
              <div className={styles.cardInfo}>
                <h2 className={styles.cardTitle}>Birthflow</h2>
                <p className={styles.cardSubtitle}>Contraction timer</p>
              </div>
            </div>
            <p className={styles.cardText}>
              Track contractions with clarity and calm. Simple one-tap timing
              designed to help you stay present during labor.
            </p>
            <span className={`${styles.cardLink} ${styles.linkBirthflow}`}>
              Learn more <ArrowRight />
            </span>
          </Link>

          {/* Moment */}
          <Link href="/moment" className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={`${styles.cardIcon} ${styles.iconMoment}`}>
                <Droplet color="white" fill="white" />
              </div>
              <div className={styles.cardInfo}>
                <h2 className={styles.cardTitle}>Moment</h2>
                <p className={styles.cardSubtitle}>
                  Fertility &amp; cycle tracking
                </p>
              </div>
            </div>
            <p className={styles.cardText}>
              Understand your cycle with privacy and care. Gentle timing insights
              built to support, not pressure.
            </p>
            <span className={`${styles.cardLink} ${styles.linkMoment}`}>
              Learn more <ArrowRight />
            </span>
          </Link>

          {/* Petnames */}
          <Link href="/petnames" className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={`${styles.cardIcon} ${styles.iconPetnames}`}>
                <PawPrint color="white" fill="white" />
              </div>
              <div className={styles.cardInfo}>
                <h2 className={styles.cardTitle}>Petnames</h2>
                <p className={styles.cardSubtitle}>Pet name swiping</p>
              </div>
            </div>
            <p className={styles.cardText}>
              Find the perfect name for your furry friend. Swipe, save
              favorites, and discover a name that fits.
            </p>
            <span className={`${styles.cardLink} ${styles.linkPetnames}`}>
              Learn more <ArrowRight />
            </span>
          </Link>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className={styles.philosophy}>
        <div className={styles.philosophyInner}>
          <h2 className={styles.philosophyTitle}>Designed with care</h2>
          <p className={styles.philosophyText}>
            Every app in the Kinder Family shares the same design DNA: friendly
            rounded shapes, generous whitespace, and thoughtful details that make
            important moments feel a little easier.
          </p>
          <div className={styles.pillars}>
            <div>
              <div
                className={`${styles.pillarWord} ${styles.pillarKinder}`}
              >
                Simple
              </div>
              <p className={styles.pillarDesc}>
                One clear purpose per screen
              </p>
            </div>
            <div>
              <div
                className={`${styles.pillarWord} ${styles.pillarBirthflow}`}
              >
                Private
              </div>
              <p className={styles.pillarDesc}>Your data stays yours</p>
            </div>
            <div>
              <div
                className={`${styles.pillarWord} ${styles.pillarMoment}`}
              >
                Calm
              </div>
              <p className={styles.pillarDesc}>Support without pressure</p>
            </div>
          </div>
        </div>
      </section>

      {/* App Showcase */}
      <section className={styles.family}>
        <div className={styles.familyInner}>
          <h2 className={styles.familyTitle}>The complete family</h2>
          <div className={styles.familyIcons}>
            <div className={styles.familyItem}>
              <div
                className={`${styles.familyIcon} ${styles.familyIconKinder}`}
              >
                <StorkIcon />
              </div>
              <span className={styles.familyLabel}>Kinder</span>
            </div>
            <div className={styles.familyItem}>
              <div
                className={`${styles.familyIcon} ${styles.familyIconBirthflow}`}
              >
                <Circle color="white" strokeWidth={3} />
              </div>
              <span className={styles.familyLabel}>Birthflow</span>
            </div>
            <div className={styles.familyItem}>
              <div
                className={`${styles.familyIcon} ${styles.familyIconMoment}`}
              >
                <Droplet color="white" fill="white" />
              </div>
              <span className={styles.familyLabel}>Moment</span>
            </div>
            <div className={styles.familyItem}>
              <div
                className={`${styles.familyIcon} ${styles.familyIconPetnames}`}
              >
                <PawPrint color="white" fill="white" />
              </div>
              <span className={styles.familyLabel}>Petnames</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className={styles.contact}>
        <div className={styles.contactInner}>
          <h2 className={styles.contactTitle}>Get in touch</h2>
          <p className={styles.contactText}>
            Questions, feedback, or just want to say hi? We&apos;d love to hear
            from you.
          </p>
          <a
            href="https://wa.me/31611220008"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappButton}
          >
            <MessageCircle />
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
