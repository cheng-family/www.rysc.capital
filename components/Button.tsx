import Link from "next/link";
import styles from "./Button.module.css";
import { ArrowRight, ArrowUpRight } from "./icons";

type ButtonVariant = "accent" | "light" | "outline-light";

type ButtonProps = {
  href: string;
  variant: ButtonVariant;
  children: React.ReactNode;
  /** Outbound links use a diagonal arrow; internal links a right arrow. */
  external?: boolean;
};

/** A square, uppercase monospace link styled as a button, with an arrow. */
export default function Button({
  href,
  variant,
  children,
  external = false,
}: ButtonProps) {
  const className = `${styles.button} ${styles[variant]}`;
  if (external) {
    return (
      <a href={href} className={className}>
        {children}
        <ArrowUpRight />
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
      <ArrowRight />
    </Link>
  );
}
