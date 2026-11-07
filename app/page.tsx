import Button from "@/components/Button";
import WorkWithUs from "@/components/WorkWithUs";
import styles from "./page.module.css";

const FOCUS_AREAS = [
  {
    title: "Startups",
    className: styles.startups,
    description:
      "Startups have been an incredible economic engine in pushing humanity forward. Here, small teams will make important decisions about how people interact in new digital spaces, where we  increasingly spend our time, from work life to personal life. We help teams grow fast and responsibly.",
  },
  {
    title: "Crypto",
    className: styles.crypto,
    description:
      "Blockchains are the substrate where we'll see the next generation of digital communities and markets thrive. We believe it will play a growing role in global society as a platform for self-organizing in the digital world. Now is the time to bake in secure protocols to protect our self-sovereignty, privacy, and freedoms.",
  },
  {
    title: "Real Estate",
    className: styles.realEstate,
    description:
      "Safe and affordable housing is a basic human need that is crucial for individuals, families, and communities to thrive. Home ownership provides one of the best forms of financial security.",
  },
];

export default function HomePage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroCard}>
            <h1 className={styles.heroTitle}>We build spaces for people</h1>
          </div>
        </div>
      </section>

      <section className={styles.intro}>
        <div className={styles.introInner}>
          <h2 className={styles.introTitle}>
            <span className={styles.desktopOnly}>
              Backing the missionaries that build for good
            </span>
            <span className={styles.mobileOnly}>About us</span>
          </h2>
          <p>
            We are mission-oriented founders. We back mission-oriented founders.
            The next products and affordances that we build into technology will
            fundamentally shape how people interact with each other in an
            increasingly digital society. We believe that technology can be
            built in a way that amplifies our humanity --- our freedoms, our
            rights, our creativity, and our collective pluralist strength. And
            we believe that when mission-aligned people work together, we will
            make superlinear impact.
          </p>
          <div className={styles.introActions}>
            <Button href="/about/" variant="dark">
              READ MORE
            </Button>
          </div>
        </div>
      </section>

      <section className={styles.focusAreas}>
        <div className={styles.focusAreasGrid}>
          {FOCUS_AREAS.map(({ title, className, description }) => (
            <div key={title} className={`${styles.focusCard} ${className}`}>
              <div className={styles.focusCardContent}>
                <h2 className={styles.focusCardTitle}>{title}</h2>
                <div className={styles.divider} />
                <p className={styles.focusCardText}>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.skyline}>
        <img
          className={styles.skylineImage}
          src="/images/city-skyline.jpg"
          alt=""
          loading="lazy"
        />
      </div>

      <WorkWithUs />
    </main>
  );
}
