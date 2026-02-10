import Link from "next/link";
import styles from "./shared.module.css";

export default function NotFound() {
  return (
    <div className={styles.page} style={{ textAlign: "center", paddingTop: "5rem" }}>
      <h1 className={styles.pageTitle}>Page not found</h1>
      <p className={styles.pageText}>
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <Link href="/" className={styles.backLink}>
        &larr; Back to home
      </Link>
    </div>
  );
}
