import type { Metadata } from "next";
import Link from "next/link";
import {
  Droplet,
  Users,
  Shield,
  Download,
  Thermometer,
  Heart,
  CalendarDays,
  Activity,
  Smartphone,
  TestTube,
  Eye,
  EyeOff,
  Lock,
} from "lucide-react";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Moment — Understand your cycle, together",
  description:
    "Moment is a calm fertility companion for couples. Track your cycle, log temperature and cervical mucus, share insights with your partner — gently, privately, on your terms.",
};

export default function MomentPage() {
  return (
    <div>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroIcon}>
            <Droplet color="white" fill="white" aria-hidden="true" />
          </div>
          <h1 className={styles.heroTitle}>
            Understand your cycle,{" "}
            <span className={styles.heroAccent}>together.</span>
          </h1>
          <p className={styles.heroText}>
            Moment is a calm fertility companion for couples. Track your cycle,
            notice patterns, and share insights with your partner — gently,
            privately, on your terms.
          </p>
          <div className={styles.heroBadges}>
            <span className={styles.heroBadge}>iOS &amp; Android</span>
            <span className={styles.heroBadge}>Apple Health &amp; Health Connect</span>
            <span className={styles.heroBadge}>GDPR compliant</span>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className={styles.features}>
        <h2 className={styles.sectionTitle}>Everything you need, nothing you don&apos;t</h2>
        <p className={styles.sectionSubtitle}>
          Moment gives you clear, calm insight into your cycle — without
          overwhelming you with data or pressure.
        </p>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <CalendarDays aria-hidden="true" />
            </div>
            <h3 className={styles.featureTitle}>Cycle calendar</h3>
            <p className={styles.featureText}>
              See where you are in your cycle at a glance. Track cycle length,
              period dates, and predicted fertile windows.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Thermometer aria-hidden="true" />
            </div>
            <h3 className={styles.featureTitle}>Temperature tracking</h3>
            <p className={styles.featureText}>
              Log your basal body temperature (BBT) to spot ovulation patterns
              and understand your cycle more deeply.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Droplet fill="currentColor" aria-hidden="true" />
            </div>
            <h3 className={styles.featureTitle}>Cervical mucus</h3>
            <p className={styles.featureText}>
              Track mucus quality from dry to egg white. A simple, natural
              indicator that helps predict your most fertile days.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <TestTube aria-hidden="true" />
            </div>
            <h3 className={styles.featureTitle}>LH &amp; pregnancy tests</h3>
            <p className={styles.featureText}>
              Log LH (ovulation) test results to refine timing insights. Record
              pregnancy tests and keep a clear history.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Users aria-hidden="true" />
            </div>
            <h3 className={styles.featureTitle}>Partner sharing</h3>
            <p className={styles.featureText}>
              Connect with your partner using a private code. They see fertility
              status — never your personal health details.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Heart aria-hidden="true" />
            </div>
            <h3 className={styles.featureTitle}>Intimacy logging</h3>
            <p className={styles.featureText}>
              Keep track of timing, privately. Your intimacy data is visible only
              to you and your connected partner.
            </p>
          </div>
        </div>
      </section>

      {/* Daily Tracking */}
      <section className={styles.tracking}>
        <div className={styles.trackingInner}>
          <h2 className={styles.sectionTitle}>Daily tracking, built in</h2>
          <p className={styles.sectionSubtitle}>
            Everything is right on your Today screen — no digging through
            settings. Log in seconds, see insights instantly.
          </p>
          <div className={styles.trackingGrid}>
            <div className={styles.trackingCard}>
              <div className={styles.trackingEmoji}>🌡️</div>
              <h3 className={styles.trackingCardTitle}>Temperature</h3>
              <p className={styles.trackingCardText}>
                Log your morning BBT in Celsius or Fahrenheit. Spot the thermal
                shift that signals ovulation.
              </p>
            </div>
            <div className={styles.trackingCard}>
              <div className={styles.trackingEmoji}>💧</div>
              <h3 className={styles.trackingCardTitle}>Cervical mucus</h3>
              <p className={styles.trackingCardText}>
                Tap your observation — dry, sticky, creamy, watery, or egg white.
                Includes fertility indicators and guidance.
              </p>
            </div>
            <div className={styles.trackingCard}>
              <div className={styles.trackingEmoji}>🧪</div>
              <h3 className={styles.trackingCardTitle}>LH tests</h3>
              <p className={styles.trackingCardText}>
                Log your ovulation test result — low, high, or peak. Refines your
                fertile window estimate over time.
              </p>
            </div>
            <div className={styles.trackingCard}>
              <div className={styles.trackingEmoji}>🤰</div>
              <h3 className={styles.trackingCardTitle}>Pregnancy tests</h3>
              <p className={styles.trackingCardText}>
                Record results with notes. View your full history in one place,
                clearly and without clutter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className={styles.howItWorks}>
        <div className={styles.howInner}>
          <h2 className={styles.sectionTitle}>How it works</h2>
          <div className={styles.howCard}>
            <div className={styles.stepsGrid}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>1</div>
                <h3 className={styles.stepTitle}>Set up your cycle</h3>
                <p className={styles.stepText}>
                  Log your last period start date. Moment calculates your cycle
                  day, length, and estimated fertile window.
                </p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>2</div>
                <h3 className={styles.stepTitle}>Track daily</h3>
                <p className={styles.stepText}>
                  Log temperature, cervical mucus, LH tests, or pregnancy tests
                  — whatever feels right for you.
                </p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>3</div>
                <h3 className={styles.stepTitle}>Share with your partner</h3>
                <p className={styles.stepText}>
                  Connect via invite code. They see gentle timing cues — you
                  control exactly what&apos;s visible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Integration */}
      <section className={styles.health}>
        <div className={styles.healthInner}>
          <div className={styles.healthContent}>
            <Smartphone className={styles.healthIcon} aria-hidden="true" />
            <div>
              <h2 className={styles.healthTitle}>
                Syncs with Apple Health &amp; Health Connect
              </h2>
              <p className={styles.healthText}>
                Optionally sync your cycle data, temperature readings, cervical
                mucus observations, and pregnancy test results with your
                device&apos;s health platform. Your data stays on your device —
                Moment just reads and writes what you allow.
              </p>
              <p className={styles.healthNote}>
                Health sync is entirely opt-in. You choose which data types to
                share.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className={styles.partner}>
        <div className={styles.partnerInner}>
          <h2 className={styles.sectionTitle}>Designed for two</h2>
          <p className={styles.sectionSubtitle}>
            Fertility is a shared journey. Moment makes it easy to keep your
            partner in the loop — respectfully.
          </p>
          <div className={styles.partnerGrid}>
            <div className={styles.partnerCard}>
              <Eye className={styles.partnerIcon} aria-hidden="true" />
              <h3 className={styles.partnerCardTitle}>What your partner sees</h3>
              <ul className={styles.partnerList}>
                <li>Fertility level (low, high, peak)</li>
                <li>LH test status</li>
                <li>Intimacy log (shared)</li>
                <li>Gentle daily notifications</li>
              </ul>
            </div>
            <div className={styles.partnerCard}>
              <EyeOff className={styles.partnerIcon} aria-hidden="true" />
              <h3 className={styles.partnerCardTitle}>What stays private</h3>
              <ul className={styles.partnerList}>
                <li>Period dates and flow</li>
                <li>Temperature readings</li>
                <li>Cervical mucus observations</li>
                <li>Pregnancy test results</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className={styles.privacy}>
        <div className={styles.privacyInner}>
          <h2 className={styles.sectionTitle}>Privacy at the core</h2>
          <div className={styles.privacyCard}>
            <ul className={styles.privacyList}>
              <li className={styles.privacyItem}>
                <Shield aria-hidden="true" />
                <p>
                  <strong>Your data is yours:</strong> Stored in the EU, encrypted
                  in transit and at rest. Never sold, never shared with third
                  parties.
                </p>
              </li>
              <li className={styles.privacyItem}>
                <Lock aria-hidden="true" />
                <p>
                  <strong>GDPR compliant:</strong> Full data access, export, and
                  deletion rights. Delete your account and everything goes — permanently.
                </p>
              </li>
              <li className={styles.privacyItem}>
                <Activity aria-hidden="true" />
                <p>
                  <strong>Not a medical device:</strong> Moment provides timing
                  insights, not medical advice. Always consult a healthcare
                  provider for medical decisions.
                </p>
              </li>
            </ul>
            <div className={styles.privacyLink}>
              <Link href="/moment/privacy">Read our full privacy policy &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Start tracking with care</h2>
          <p className={styles.ctaText}>
            Download Moment and understand your cycle — calmly, privately,
            together.
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
