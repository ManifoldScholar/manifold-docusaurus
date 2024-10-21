import clsx from "clsx";
import { PropsWithChildren } from "react";
import styles from "./Heading.module.css";

type Props = {
  color?: string;
  underline?: boolean;
  weight?: "regular" | "medium" | "semi-bold";
  uppercase?: boolean;
  as?: "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: string;
} & PropsWithChildren;

export default function Heading({children, as, color, weight = "regular", size, underline, uppercase}: Props) {
  const Tag = as;

  const style = { 
    "--_heading-color": color ? `var(--${color})` : "var(--header-color)",
    "--_heading-span-color": color ? "var(--header-color)" : "var(--color-secondary)",
    ...weight ? {"--_heading-font-weight": `var(--font-weight-${weight})`} : {},
    ...size ? {"--_heading-font-size": `var(--font-size-${size})`} : {}
  } as React.CSSProperties;

  const className = clsx(styles.heading, {
    [styles["heading--underline"]]: underline,
    [styles["heading--uppercase"]]: uppercase
  })

  return <Tag style={style} className={className}>{children}</Tag>;
}

Heading.displayName = "Typography.Heading";

