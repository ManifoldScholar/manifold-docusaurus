import styles from "./UnderlinedLink.module.css";

type Props =  React.HTMLProps<HTMLAnchorElement> & {
  size?: "nav";
}

export default function UnderlinedLink({size, children, ...props}: Props) {
  const style = { "--_link-font-size": `var(--font-size-${size}` } as React.CSSProperties;

  return <a className={styles.link} style={style} {...props}>{children}</a>;
}
