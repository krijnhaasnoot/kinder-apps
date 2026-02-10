"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/kinder", label: "Kinder" },
  { href: "/moment", label: "Moment" },
  { href: "/birthflow", label: "Birthflow" },
  { href: "/petnames", label: "Petnames" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <div className={styles.navInner}>
        {links.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.pill} ${isActive ? styles.pillActive : styles.pillInactive}`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
