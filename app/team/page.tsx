import type { Metadata } from "next";
import PageTitle from "@/components/PageTitle";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Team | rysc.capital",
};

export default function TeamPage() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <PageTitle>Team</PageTitle>

        <div className={styles.banner}>
          <p className={styles.bannerText}>
            A team that is as committed to impact as you are
          </p>
        </div>

        <div className={styles.member}>
          <div className={styles.profileColumn}>
            <div className={styles.profile}>
              <img
                className={styles.photo}
                src="/images/raymond-cheng.jpg"
                alt="Raymond Cheng"
              />
              <div className={styles.profileInfo}>
                <div className={styles.nameBlock}>
                  <h3 className={styles.name}>Raymond Cheng</h3>
                  <span className={styles.role}>Founding Partner</span>
                </div>
                <div className={styles.links}>
                  <a
                    href="https://www.raymondcheng.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    raymondcheng.net
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ryscheng"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className={styles.socialLink}
                  >
                    <LinkedInIcon />
                  </a>
                  <a
                    href="https://twitter.com/RaymondCheng00"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className={styles.socialLink}
                  >
                    <TwitterIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.bioColumn}>
            <p className={styles.bio}>
              {"Raymond Cheng is a software engineer, entrepreneur, research scientist, open source contributor, and adjunct professor, who is passionate about building technology that improves the lives and freedoms of Internet users. He has made contributions in a wide range of areas in distributed systems and security, including data privacy, secure computing, blockchains, and scalable network systems.\n\n" +
                "Raymond has helped start multiple projects that are now used by millions of people, including co-founding security company Oasis Labs, and creating a networking project that was productionized by Google into Outline. His work has been recognized in top publications and conferences around the world, including Forbes, Wired, WSJ, Time, and NBC. \n\n" +
                "Raymond obtained his PhD in Computer Science from the University of Washington, and graduated from MIT with degrees in Physics (Bachelor of Science), Electrical Engineering and Computer Science (Bachelor of Science and Master of Engineering).\n"}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width="1em"
      height="1em"
      fill="currentColor"
      role="img"
      aria-hidden="true"
    >
      <path d="M.516 19.639h3.896V7.296H.516v12.343zM2.365 5.752h-.028a2.153 2.153 0 01-2.325-2.14 2.376 2.376 0 112.353 2.14zM20 19.64h-4.417v-6.388c0-1.672-.692-2.816-2.211-2.816-.954 0-1.803.608-2.11 1.512-.09.328-.122.67-.09 1.009v6.683H6.791s.056-11.315 0-12.344h4.376v1.937c.259-.846 1.657-2.056 3.888-2.056 2.769 0 4.945 1.776 4.945 5.599v6.864z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width="1em"
      height="1em"
      fill="currentColor"
      role="img"
      aria-hidden="true"
    >
      <path d="M6.29 18.254c7.547 0 11.675-6.253 11.675-11.675 0-.178-.004-.354-.012-.53A8.339 8.339 0 0020 3.924a8.165 8.165 0 01-2.356.646 4.12 4.12 0 001.804-2.27 8.198 8.198 0 01-2.606.996A4.104 4.104 0 009.85 7.039a11.652 11.652 0 01-8.458-4.287 4.101 4.101 0 001.27 5.477 4.058 4.058 0 01-1.858-.513l-.001.052a4.104 4.104 0 003.292 4.023 4.107 4.107 0 01-1.853.07 4.107 4.107 0 003.833 2.85 8.233 8.233 0 01-5.096 1.757A8.33 8.33 0 010 16.411a11.614 11.614 0 006.29 1.843" />
    </svg>
  );
}
