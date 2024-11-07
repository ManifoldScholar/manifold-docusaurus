import { PropsWithChildren } from "react";
import styles from "../Button.module.css";
import clsx from "clsx";

type Props = React.HTMLProps<HTMLAnchorElement> & PropsWithChildren & {
  type?: "button" | "submit" | "reset";
  size?: "small" | "wide";
  block?: boolean;
};

export default function Button({children, block, size, as, ...props}: Props) {
  return <a className={clsx(styles.button, {
    [styles["button--block"]]: block,
    [styles[`button--${size}`]]: !!size,
  })} {...props}>{children}</a>;
}