import Link from "next/link";
import styles from "./SiteFooter.module.css";

const SITE_LINKS = [
  { href: "/about/", label: "About" },
  { href: "/team/", label: "Team" },
  { href: "/join/", label: "Join" },
];

const PORTFOLIO_LINKS = [
  { href: "/portfolio/startups/", label: "Startups" },
  { href: "/portfolio/crypto/", label: "Crypto" },
];

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.columns}>
          <div className={`${styles.column} ${styles.brandColumn}`}>
            <h3 className={styles.brand}>rysc.capital</h3>
            <div className={styles.copyright}>
              © All rights reserved. This site proudly built with{" "}
              <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
                Next.js
              </a>
              .
            </div>
          </div>
          <div className={`${styles.column} ${styles.linkColumn}`}>
            {SITE_LINKS.map(({ href, label }) => (
              <Link key={href} href={href} className={styles.link}>
                {label}
              </Link>
            ))}
          </div>
          <div className={`${styles.column} ${styles.linkColumn}`}>
            {PORTFOLIO_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`${styles.link} ${styles.portfolioLink}`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
