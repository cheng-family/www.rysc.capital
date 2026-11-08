import type { Metadata } from "next";
import PortfolioGrid, { type PortfolioCompany } from "@/components/PortfolioGrid";
import { CRYPTO, STARTUPS } from "@/lib/portfolio";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Portfolio | rysc.capital",
};

const CATEGORIES: {
  id: string;
  title: string;
  color: string;
  image: string;
  companies: PortfolioCompany[];
}[] = [
  {
    id: "startups",
    title: "Startups",
    color: "var(--color-startups)",
    image: "/images/startups.jpg",
    companies: STARTUPS,
  },
  {
    id: "crypto",
    title: "Crypto",
    color: "var(--color-crypto)",
    image: "/images/crypto.jpg",
    companies: CRYPTO,
  },
];

export default function PortfolioPage() {
  return (
    <main className={styles.main}>
      <section className={`container ${styles.hero}`}>
        <h1 className={styles.heroTitle}>
          Portfolio<span className={styles.dot}>.</span>
        </h1>
      </section>

      <nav aria-label="Portfolio categories" className={`container ${styles.chips}`}>
        {CATEGORIES.map(({ id, title, color }) => (
          <a key={id} href={`#${id}`} className={styles.chip} style={{ color }}>
            <span
              aria-hidden="true"
              className={styles.chipDot}
              style={{ background: color }}
            />
            {title}
          </a>
        ))}
      </nav>

      {CATEGORIES.map(({ id, title, color, image, companies }, i) => (
        <section key={id} id={id} className={`container ${styles.category}`}>
          <div className={styles.categoryHeader}>
            <div className={styles.index}>
              <span className="eyebrow" style={{ color }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className={styles.tick} style={{ background: color }} />
            </div>
            <h2 className={styles.categoryTitle} style={{ color }}>
              {title}
            </h2>
            <img
              className={`photo ${styles.categoryImage}`}
              src={image}
              alt=""
              loading="lazy"
            />
          </div>
          <PortfolioGrid companies={companies} color={color} />
        </section>
      ))}
    </main>
  );
}
