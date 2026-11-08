"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./SiteHeader.module.css";

export const NAV_LINKS = [
  { href: "/about/", label: "About" },
  { href: "/portfolio/", label: "Portfolio" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand}>
          <span className={styles.logoWrap}>
            <img
              className={styles.logo}
              src="/images/logo.png"
              alt="rysc.capital logo"
            />
          </span>
          <span className={styles.brandName}>rysc.capital</span>
        </Link>
        <nav aria-label="Main" className={styles.nav}>
          {NAV_LINKS.map(({ href, label }, i) => {
            const active = pathname?.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`${styles.navLink} ${active ? styles.active : ""}`}
                aria-current={active ? "page" : undefined}
              >
                <span aria-hidden="true" className={styles.navNumber}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
