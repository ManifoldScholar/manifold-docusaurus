import { PropsWithChildren } from "react";
import styles from "./Text.module.css";
import clsx from "clsx";

type Props = {
  color?: string;
  underline?: boolean;
  underlineColor?: string;
  size?: string;
  monospaced?: boolean;
  weight?: "regular" | "medium" | "semi-bold";
  as?: "span" | "time";
  dateTime?: string;
} & PropsWithChildren;

export default function Text({children, monospaced, color, weight, size, underline, underlineColor, as = "span", dateTime}: Props) {
  const style = { 
    "--_text-color": color ? `var(--${color})` : "var(--text-color)",
    ...weight ? {"--_text-font-weight": `var(--font-weight-${weight})`} : {},
    ...size ? {"--_text-font-size": `var(--font-size-${size})`} : {},
    ...underlineColor ? {"--underline-color": `var(--color-${underlineColor})`} : {}
  } as React.CSSProperties;

  const className = clsx(styles.text, {
    "t-monospaced": monospaced,
    [styles["text--underline"]]: underline
  });

  const Tag = as;

  const tagProps = {
    ... as === "time" ? {dateTime}:{}
  };

  return <Tag className={className} style={style} {...tagProps}>{children} </Tag>;
}