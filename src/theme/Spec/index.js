import React from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";
import useThemeContext from "@theme/hooks/useThemeContext";

export default ({ title, subtitle, items, children } = props) => {
  const { isDarkTheme, setLightTheme, setDarkTheme } = useThemeContext();
  return (
    <div className={clsx(styles.specContainer)}>
      {items && (
        <div className={clsx(styles.specTable)}>
          <table width="100%">
            <caption className={clsx(styles.specTitleWrapper)}>
              <span className={clsx(styles.specTitle)}>{title}</span>
              {subtitle && (
                <span className={clsx(styles.specSubtitle)}>{subtitle}</span>
              )}
            </caption>
            <tbody>
              {items.map((item, index) => (
                <tr key={item.key}>
                  <th className={clsx(styles.specKey)}>{item.key}</th>
                  <td className={clsx(styles.specValue)}>{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {children ? children : null}
    </div>
  );
};
