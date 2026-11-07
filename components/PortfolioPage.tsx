import PageTitle from "./PageTitle";
import styles from "./PortfolioPage.module.css";

/** Layout shared by the individual portfolio category pages. */
export default function PortfolioPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <PageTitle>{title}</PageTitle>
        {children}
      </section>
    </main>
  );
}
