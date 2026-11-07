import type { Metadata } from "next";
import LinkCard from "@/components/LinkCard";
import PageTitle from "@/components/PageTitle";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Portfolio | rysc.capital",
};

export default function PortfolioPage() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <PageTitle>Portfolio</PageTitle>
        <LinkCard
          href="/portfolio/startups/"
          color="orange"
          image="/images/startups.jpg"
        >
          Startups
        </LinkCard>
        <LinkCard
          href="/portfolio/crypto/"
          color="blue"
          image="/images/crypto.jpg"
        >
          Crypto
        </LinkCard>
      </section>
    </main>
  );
}
