import type { Metadata } from "next";
import Link from "next/link";
import WorkWithUs from "@/components/WorkWithUs";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About | rysc.capital",
};

const FAQS: { question: string; answer: React.ReactNode }[] = [
  {
    question: "What areas are you interested in?",
    answer:
      "We focus on pre-seed and seed investments in amazing entrepreneurs who want to change the world for the better. We are really excited about technology, crypto, and real estate. Any new spaces that scales people's ability to create, organize, and interact. Whether it's physical spaces, hardware, software, or new networks on top --- we care about the experiences you are bringing to people.",
  },
  {
    question: "Why did you start this firm?",
    answer:
      "Technology is not inherently good or bad. It amplifies the impact and intent of the creator and operator. So more than ever --- intent matters. It can be difficult to discuss morality in technology, especially in a world where every misstep can be excoriated as hypocritical on social media. We understand that positive intent doesn't mean there won't be missteps. The giants of today all started with positive intent. Instead of giving up or leaving it as an afterthought, we believe it's worth trying harder towards ideals, even if we fall short.",
  },
  {
    question: "Why not business as usual?",
    answer:
      'It\'s time to move past a simple --- "maximizing shareholder value" without any regard to our effect on society and the planet. We can choose to make money while doing good for the world.',
  },
  {
    question: "What are you looking for in founders?",
    answer:
      "We look for mission-aligned individuals who want to scale positive impact in a massive way. We work with incredible people with founder-mindset --- people who take responsibility for change and find whatever it takes to get there. We believe that the founder-mindset can come from anywhere, from inside an existing organization, to starting a high-growth company. \n\n" +
      "Long-term change requires passionate and determined persistence towards a goal, as well as smart, creative, and rapid iteration with a learning mindset. That means people who get back up after falling, and know how to lead a team to success.",
  },
  {
    question: "How do I get in touch?",
    answer: (
      <>
        The best way is to reach out on our contact form{" "}
        <Link href="/join/">here</Link>. You can also find us at conferences or
        get an intro from someone in our network (e.g. LinkedIn / Twitter).
      </>
    ),
  },
];

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>rysc.capital</h1>
          <p className={styles.heroSubtitle}>A mission-oriented fund</p>
        </div>
      </section>

      <section className={styles.body}>
        <article className={styles.card}>
          <div className={styles.intro}>
            <h2 className={styles.introTitle}>
              We back disruptive companies that build better spaces (both meat
              and cyber) for everyday people.
            </h2>
            <div className={styles.introText}>
              {"Technology has turbocharged a small team's ability to scale their impact, for both good and bad. This has led to incredible advancements for users, such as instant access to knowledge and near-instant purchases direct to your door. However, it has also led to an unprecedented imbalance in power, where a relatively small group of people can effectively dictate the rules of how society operates. It can easily be used to curtail speech, thwart social organizing, surveil activity, and influence behavior.\n\n"}
              {"If we were to apply John Rawls' "}
              <a href="https://en.wikipedia.org/wiki/A_Theory_of_Justice">
                veil of ignorance
              </a>
              {", would we be happy with what we've built?\nImagine that "}
              <em>
                &quot;no one knows his place in society, his class position or
                social status, nor does anyone know his fortune in the
                distribution of natural assets and abilities, his intelligence,
                strength, and the like... The principles of justice are chosen
                behind a veil of ignorance.&quot;
              </em>
              {"\nWhat are "}
              <em>
                &quot;the principles that rational and free persons concerned
                to further their own interests would accept in an initial
                position of equality...?&quot;
              </em>
              {"\n\nStartups, engineers, researchers --- we are quite literally building what society will look like in the future. We do not have to build systems that harm or manipulate others. We can build technology that respects the desires, rights, and freedoms of the user. And we can make money doing so. Nothing is inevitable. Let's build a better future together."}
            </div>
          </div>

          <img
            className={styles.art}
            src="/images/about-art.jpg"
            alt=""
            loading="lazy"
          />

          <div className={styles.faqs}>
            {FAQS.map(({ question, answer }) => (
              <div key={question} className={styles.faq}>
                <h3 className={styles.question}>{question}</h3>
                <div className={styles.rule} />
                <div className={styles.answer}>{answer}</div>
              </div>
            ))}
          </div>
        </article>
      </section>

      <WorkWithUs />
    </main>
  );
}
