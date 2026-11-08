import type { Metadata } from "next";
import { ArrowUpRight } from "@/components/icons";
import NumberedRow, { RowsEnd } from "@/components/NumberedRow";
import WorkWithUs from "@/components/WorkWithUs";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Team | rysc.capital",
};

const LINKS = [
  { href: "https://www.raymondcheng.net/", label: "raymondcheng.net" },
  { href: "https://www.linkedin.com/in/ryscheng", label: "LinkedIn" },
  { href: "https://twitter.com/RaymondCheng00", label: "Twitter" },
];

export default function TeamPage() {
  return (
    <main className={styles.main}>
      <section className={`container ${styles.hero}`}>
        <h1 className={styles.heroTitle}>
          Team<span className={styles.dot}>.</span>
        </h1>
        <p className={`eyebrow ${styles.heroSubtitle}`}>
          A team that is as committed to impact as you are
        </p>
      </section>

      <section className={`container ${styles.members}`}>
        <NumberedRow
          index={1}
          title={
            <div className={styles.profile}>
              <img
                className={`photo ${styles.photo}`}
                src="/images/raymond-cheng.jpg"
                alt="Raymond Cheng"
              />
              <div className={styles.nameBlock}>
                <h2 className={styles.name}>Raymond Cheng</h2>
                <span className="eyebrow">Founding Partner</span>
              </div>
              <ul className={styles.links}>
                {LINKS.map(({ href, label }) => (
                  <li key={href}>
                    <a href={href} className={styles.link}>
                      {label}
                      <ArrowUpRight size={14} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          }
        >
          <p className={styles.bio}>
            {"Raymond Cheng is a software engineer, entrepreneur, research scientist, open source contributor, and adjunct professor, who is passionate about building technology that improves the lives and freedoms of Internet users. He has made contributions in a wide range of areas in distributed systems and security, including data privacy, secure computing, blockchains, and scalable network systems.\n\n" +
              "Raymond has helped start multiple projects that are now used by millions of people, including co-founding security company Oasis Labs, and creating a networking project that was productionized by Google into Outline. His work has been recognized in top publications and conferences around the world, including Forbes, Wired, WSJ, Time, and NBC.\n\n" +
              "Raymond obtained his PhD in Computer Science from the University of Washington, and graduated from MIT with degrees in Physics (Bachelor of Science), Electrical Engineering and Computer Science (Bachelor of Science and Master of Engineering)."}
          </p>
        </NumberedRow>
        <RowsEnd />
      </section>

      <WorkWithUs />
    </main>
  );
}
