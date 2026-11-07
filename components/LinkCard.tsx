import Link from "next/link";
import styles from "./LinkCard.module.css";

type LinkCardProps = {
  href: string;
  children: React.ReactNode;
  color: "orange" | "blue" | "green";
  /** Optional thumbnail shown on the left (hidden on smaller screens). */
  image?: string;
  /** "compact" cards are 96px tall; the default is 128px. */
  size?: "default" | "compact";
  /** Opens the link in a new tab. */
  external?: boolean;
};

/** A large, rounded, full-width link used on the Join and Portfolio pages. */
export default function LinkCard({
  href,
  children,
  color,
  image,
  size = "default",
  external = false,
}: LinkCardProps) {
  const className = [styles.card, styles[color], styles[size]].join(" ");
  const content = (
    <>
      {image && (
        <img className={styles.image} src={image} alt="" />
      )}
      <div className={styles.labelWrapper}>
        <span className={styles.label}>{children}</span>
      </div>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}
