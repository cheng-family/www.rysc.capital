import styles from "./PageTitle.module.css";

/** Centered page heading used at the top of interior pages. */
export default function PageTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1 className={[styles.title, className].filter(Boolean).join(" ")}>
      {children}
    </h1>
  );
}
