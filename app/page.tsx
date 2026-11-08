import Link from "next/link";
import Button from "@/components/Button";
import { ArrowUpRight } from "@/components/icons";
import NumberedRow, { RowsEnd } from "@/components/NumberedRow";
import WorkWithUs from "@/components/WorkWithUs";
import styles from "./page.module.css";

const FOCUS_AREAS = [
  {
    title: "Startups",
    color: "var(--color-startups)",
    href: "/portfolio/#startups",
    image: "/images/startups.jpg",
    description:
      "Startups have been an incredible economic engine in pushing humanity forward. Here, small teams will make important decisions about how people interact in new digital spaces, where we increasingly spend our time, from work life to personal life. We help teams grow fast and responsibly.",
  },
  {
    title: "Crypto",
    color: "var(--color-crypto)",
    href: "/portfolio/#crypto",
    image: "/images/crypto.jpg",
    description:
      "Blockchains are the substrate where we'll see the next generation of digital communities and markets thrive. We believe it will play a growing role in global society as a platform for self-organizing in the digital world. Now is the time to bake in secure protocols to protect our self-sovereignty, privacy, and freedoms.",
  },
  {
    title: "Real Estate",
    color: "var(--color-real-estate)",
    href: undefined,
    image: "/images/real-estate.jpg",
    description:
      "Safe and affordable housing is a basic human need that is crucial for individuals, families, and communities to thrive. Home ownership provides one of the best forms of financial security.",
  },
];

export default function HomePage() {
  return (
    <main className={styles.main}>
      <section className={`container ${styles.hero}`}>
        <h1 className={styles.heroTitle}>
          We build spaces for <span className={styles.heroAccent}>people</span>
        </h1>
      </section>

      <div className="photo-band">
        <img
          className={styles.heroImage}
          src="/images/city-skyline.jpg"
          alt=""
        />
      </div>

      <section className={`container ${styles.about}`}>
        <NumberedRow
          index={1}
          hideTick
          title={<h2 className={`eyebrow ${styles.aboutLabel}`}>About us</h2>}
        >
          <div className={styles.aboutBody}>
            <p className={styles.aboutText}>
              We are mission-oriented founders. We back mission-oriented
              founders. The next products and affordances that we build into
              technology will fundamentally shape how people interact with each
              other in an increasingly digital society. We believe that
              technology can be built in a way that amplifies our humanity ---
              our freedoms, our rights, our creativity, and our collective
              pluralist strength. And we believe that when mission-aligned
              people work together, we will make superlinear impact.
            </p>
            <Button href="/about/" variant="accent">
              Read more
            </Button>
          </div>
        </NumberedRow>
      </section>

      <section className={`container ${styles.focusAreas}`}>
        {FOCUS_AREAS.map(({ title, color, href, image, description }, i) => (
          <NumberedRow
            key={title}
            index={i + 2}
            color={color}
            title={
              <h3 className={styles.focusTitle} style={{ color }}>
                {href ? (
                  <Link href={href} className={styles.focusLink}>
                    {title}
                    <span className={styles.focusArrow}>
                      <ArrowUpRight size={30} strokeWidth={1.25} />
                    </span>
                  </Link>
                ) : (
                  title
                )}
              </h3>
            }
          >
            <div className={styles.focusBody}>
              <p className={styles.focusText}>{description}</p>
              <img
                className={`photo ${styles.focusImage}`}
                src={image}
                alt={title}
                loading="lazy"
              />
            </div>
          </NumberedRow>
        ))}
        <RowsEnd />
      </section>

      <WorkWithUs />
    </main>
  );
}
