import Link from "next/link";
import Button from "./Button";
import styles from "./SiteHeader.module.css";

const NAV_LINKS = [
  { href: "/about/", label: "About" },
  { href: "/portfolio/", label: "Portfolio" },
  { href: "/team/", label: "Team" },
  { href: "/join/", label: "Join" },
];

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          <img className={styles.logo} src="/images/logo.png" alt="" />
          <span className={styles.brandName}>rysc.capital</span>
        </Link>
        <nav className={styles.nav}>
          {NAV_LINKS.map(({ href, label }) => (
            <Button
              key={href}
              href={href}
              variant="nav"
              className={styles.navLink}
            >
              {label}
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
}
