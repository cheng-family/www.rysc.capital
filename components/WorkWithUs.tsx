import Button from "./Button";
import styles from "./WorkWithUs.module.css";

/** Dark call-to-action banner inviting visitors to get in touch. */
export default function WorkWithUs() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2 className={styles.title}>Work with us.</h2>
          <p className={styles.subtitle}>
            Whether you&apos;re looking for investment, or looking to join an
            existing effort, come join some of the best teams in the industry
          </p>
        </div>
        <div className={styles.actions}>
          <Button href="/join/" variant="pill">
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
