import styles from "./PortfolioGrid.module.css";

export type PortfolioCompany = {
  name: string;
  description: string;
  url: string;
  logo: string;
};

/** Grid of portfolio company logos; hovering a logo reveals its name and description. */
export default function PortfolioGrid({
  companies,
}: {
  companies: PortfolioCompany[];
}) {
  return (
    <div className={styles.grid}>
      {companies.map(({ name, description, url, logo }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
          aria-label={name}
        >
          <img className={styles.logo} src={logo} alt="" loading="lazy" />
          <div className={styles.overlay}>
            <span className={styles.name}>{name}</span>
            <span className={styles.description}>{description}</span>
          </div>
        </a>
      ))}
    </div>
  );
}
