import type { Metadata } from "next";
import PortfolioGrid, { type PortfolioCompany } from "@/components/PortfolioGrid";
import PortfolioPage from "@/components/PortfolioPage";

export const metadata: Metadata = {
  title: "Startups | rysc.capital",
};

const STARTUPS: PortfolioCompany[] = [
  {
    name: "Navette Bio",
    description: "Simplifying Non-Viral Delivery\nfor Cell and Gene Therapy",
    url: "https://www.navette.bio/",
    logo: "/images/portfolio/navette.png",
  },
  {
    name: "Plasmic",
    description: "The visual builder for your tech stack.",
    url: "https://www.plasmic.app/",
    logo: "https://avatars.githubusercontent.com/u/57023879?s=200&v=4",
  },
  {
    name: "Side",
    description: "Real Estate Brokerage Platform for Top Agents",
    url: "https://www.side.com/",
    logo: "https://www.side.com/wp-content/uploads/2022/12/Side-Logo.jpg",
  },
  {
    name: "replit",
    description: "Build apps and sites with AI",
    url: "https://replit.com/",
    logo: "https://avatars.githubusercontent.com/u/983194?s=200&v=4",
  },
  {
    name: "Maverick",
    description: "AI-powered Email Marketing",
    url: "https://www.trymaverick.com/",
    logo: "https://assets-global.website-files.com/61dfc899a471635beadca9b9/61e63088837e7fecd3de06aa_maverick-wordmark-new-large.svg",
  },
];

export default function StartupsPage() {
  return (
    <PortfolioPage title="Startups">
      <PortfolioGrid companies={STARTUPS} />
    </PortfolioPage>
  );
}
