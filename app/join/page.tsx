import type { Metadata } from "next";
import LinkCard from "@/components/LinkCard";
import PageTitle from "@/components/PageTitle";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Join | rysc.capital",
};

export default function JoinPage() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <PageTitle>Join</PageTitle>
        <LinkCard
          href="https://tally.so/r/mJ1ae4"
          external
          color="orange"
          size="compact"
        >
          For job opportunities
        </LinkCard>
        <LinkCard
          href="https://tally.so/r/wM1k6p"
          external
          color="green"
          size="compact"
        >
          For investment inquiries
        </LinkCard>
      </section>
    </main>
  );
}
