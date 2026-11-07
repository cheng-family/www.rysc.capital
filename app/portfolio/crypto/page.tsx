import type { Metadata } from "next";
import PortfolioGrid, { type PortfolioCompany } from "@/components/PortfolioGrid";
import PortfolioPage from "@/components/PortfolioPage";

export const metadata: Metadata = {
  title: "Crypto | rysc.capital",
};

const CRYPTO: PortfolioCompany[] = [
  {
    name: "Bitcoin",
    description: "The one that started it all",
    url: "https://bitcoin.org/en/",
    logo: "https://s2.coinmarketcap.com/static/img/coins/128x128/1.png",
  },
  {
    name: "Ethereum",
    description:
      "Ethereum is the community-run technology powering the cryptocurrency ether (ETH) and thousands of decentralized applications.",
    url: "https://ethereum.org/en/",
    logo: "https://s2.coinmarketcap.com/static/img/coins/128x128/1027.png",
  },
  {
    name: "Filecoin",
    description:
      "Filecoin is a decentralized storage network designed to store humanity's most important information",
    url: "https://filecoin.io/",
    logo: "/images/portfolio/filecoin.svg",
  },
  {
    name: "Stellar",
    description: "Stellar is an open network for storing and moving money.",
    url: "https://www.stellar.org/",
    logo: "/images/portfolio/stellar.png",
  },
  {
    name: "Optimism",
    description:
      "Optimism is a low-cost and lightning-fast Ethereum L2 blockchain.",
    url: "https://www.optimism.io/",
    logo: "/images/portfolio/optimism.svg",
  },
  {
    name: "Oasis Network",
    description: "The Oasis Network provides a privacy layer for Web3",
    url: "https://oasisprotocol.org/",
    logo: "/images/portfolio/oasis.svg",
  },
  {
    name: "Reserve",
    description:
      "We build tools for people to create and use stable currencies around the world.",
    url: "https://reserve.org/en/",
    logo: "/images/portfolio/reserve.svg",
  },
];

export default function CryptoPage() {
  return (
    <PortfolioPage title="Crypto">
      <PortfolioGrid companies={CRYPTO} />
    </PortfolioPage>
  );
}
