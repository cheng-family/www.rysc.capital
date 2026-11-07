import type { Metadata } from "next";
import PortfolioPage from "@/components/PortfolioPage";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Real Estate | rysc.capital",
};

export default function RealEstatePage() {
  return (
    <PortfolioPage title="Real Estate">
      <div className={styles.placeholder}>
        <p className={styles.comingSoon}>Coming soon...</p>
      </div>
    </PortfolioPage>
  );
}
