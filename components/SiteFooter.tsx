import Link from "next/link";
import styles from "./SiteFooter.module.css";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/portfolio/", label: "Portfolio" },
];

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <p className={styles.brand}>rysc.capital</p>
          <nav aria-label="Footer" className={styles.links}>
            {LINKS.map(({ href, label }) => (
              <Link key={href} href={href} className={styles.link}>
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <div className={styles.copyright}>© All rights reserved.</div>
      </div>
    </footer>
  );
}
