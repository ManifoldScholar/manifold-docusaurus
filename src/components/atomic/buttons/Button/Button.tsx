import { PropsWithChildren } from "react";
import styles from "../Button.module.css";
import clsx from "clsx";

type Props = Omit<React.HTMLProps<HTMLButtonElement>, "size"> & PropsWithChildren & {
  type?: "button" | "submit" | "reset";
  size?: "small" | "wide";
  block?: boolean;
};

export default function Button({children, block, size, ...props}: Props) {
  return <button className={clsx(styles.button, {
    [styles["button--block"]]: block,
    [styles[`button--${size}`]]: !!size,
  })} {...props}>{children}</button>;
}