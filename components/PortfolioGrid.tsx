import styles from "./PortfolioGrid.module.css";
import { ArrowUpRight } from "./icons";

export type PortfolioCompany = {
  name: string;
  description: string;
  url: string;
  logo: string;
  /** Wide wordmarks get more horizontal room. */
  wide?: boolean;
  /** Blend away a logo's white background against the tile. */
  multiply?: boolean;
};

/**
 * Grid of square portfolio tiles. Hovering or focusing a tile reveals the
 * company's name and description on a solid color panel.
 */
export default function PortfolioGrid({
  companies,
  color,
}: {
  companies: PortfolioCompany[];
  color: string;
}) {
  return (
    <div
      className={styles.grid}
      style={{ "--tile-color": color } as React.CSSProperties}
    >
      {companies.map(({ name, description, url, logo, wide, multiply }, i) => {
        const number = String(i + 1).padStart(2, "0");
        const logoClass = [
          styles.logo,
          wide ? styles.wide : "",
          multiply ? styles.multiply : "",
        ].join(" ");
        return (
          <a key={name} href={url} className={styles.tile}>
            <span className={`eyebrow ${styles.number}`}>{number}</span>
            <span className={styles.arrow}>
              <ArrowUpRight size={20} strokeWidth={1.25} />
            </span>
            <img className={logoClass} src={logo} alt="" loading="lazy" />
            <span className={`eyebrow ${styles.name}`}>{name}</span>
            <span className={styles.overlay}>
              <span className={`eyebrow ${styles.overlayTop}`}>
                {number}
                <ArrowUpRight size={20} strokeWidth={1.25} />
              </span>
              <span className={styles.overlayText}>
                <span className={styles.overlayName}>{name}</span>
                <span className={styles.overlayDescription}>
                  {description}
                </span>
              </span>
            </span>
          </a>
        );
      })}
    </div>
  );
}
