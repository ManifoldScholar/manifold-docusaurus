import { default as DocLink } from "@docusaurus/Link";
import styles from "./FooterLink.module.css";

export default function FooterLink({children, ...props}: React.ComponentProps<typeof DocLink>) {
  return <DocLink className={styles.link} {...props}>{children}</DocLink>;
}

FooterLink.displayName = "Global.Footer.Link";