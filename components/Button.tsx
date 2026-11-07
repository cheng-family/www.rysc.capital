import Link from "next/link";
import styles from "./Button.module.css";

type ButtonVariant = "nav" | "dark" | "pill";

type ButtonProps = {
  href: string;
  variant: ButtonVariant;
  children: React.ReactNode;
  className?: string;
};

/** A link styled as a button. */
export default function Button({
  href,
  variant,
  children,
  className,
}: ButtonProps) {
  const classes = [styles.button, styles[variant], className]
    .filter(Boolean)
    .join(" ");
  return (
    <Link href={href} className={classes}>
      <span className={styles.label}>{children}</span>
    </Link>
  );
}
