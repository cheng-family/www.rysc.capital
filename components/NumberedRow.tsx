import styles from "./NumberedRow.module.css";

type NumberedRowProps = {
  index: number;
  /** Accent color for the index number and tick mark. */
  color?: string;
  /** Hide the small tick mark under the index number. */
  hideTick?: boolean;
  title: React.ReactNode;
  children: React.ReactNode;
  align?: "start" | "center";
};

/**
 * A three-column row separated by a hairline rule: a numbered index, a title
 * and body content. Columns wrap and stack on narrow screens.
 */
export default function NumberedRow({
  index,
  color,
  hideTick = false,
  title,
  children,
  align = "start",
}: NumberedRowProps) {
  const style = color
    ? ({ "--row-color": color } as React.CSSProperties)
    : undefined;
  return (
    <div
      className={`${styles.row} ${align === "center" ? styles.center : ""}`}
      style={style}
    >
      <div className={styles.index}>
        <span className={`eyebrow ${styles.number}`}>
          {String(index).padStart(2, "0")}
        </span>
        {!hideTick && <div className={styles.tick} />}
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.body}>{children}</div>
    </div>
  );
}

/** Closing hairline rule after the last row in a list. */
export function RowsEnd() {
  return <div className={styles.end} />;
}
