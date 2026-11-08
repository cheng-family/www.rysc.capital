import { CONTACT_FORMS } from "@/lib/config";
import Button from "./Button";
import styles from "./WorkWithUs.module.css";

/** Indigo call-to-action band linking to the contact forms. */
export default function WorkWithUs() {
  return (
    <section id="work-with-us" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.title}>Work with us.</h2>
        <div className={styles.row}>
          <p className={styles.subtitle}>
            Whether you&apos;re looking for investment, or looking to join an
            existing effort, come join some of the best teams in the industry
          </p>
          <div className={styles.actions}>
            <Button href={CONTACT_FORMS.investment} variant="light" external>
              For investment inquiries
            </Button>
            <Button href={CONTACT_FORMS.jobs} variant="outline-light" external>
              For job opportunities
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
