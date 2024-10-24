import { useThemeConfig } from "@docusaurus/theme-common";
import Logo from "../../svgs/Logo";
import styles from "./HomeLink.module.css";

type Props = {
  color?: string;
  hoverColor?: string;
}

export default function HomeLink({ hoverColor, color }: Props) {
  const { manifoldLogoLink } = useThemeConfig();

  return (
    <a href={manifoldLogoLink} className={styles.link} style={{
      "--_home-color": `var(--${color || "green"})`,
      "--_home-hover-color": `var(--${hoverColor || "text-color"})`
    } as React.CSSProperties}>
      <Logo size={38} className={styles.link__logo} />
      <span>Manifold</span>
    </a>
  );
};

HomeLink.displayName = "Global.HomeLink";
