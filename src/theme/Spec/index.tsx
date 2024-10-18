import React from "react";
import clsx from "clsx";
import styles from "./Spec.module.css";

export default ({ title, subtitle, items, children }) => {
  return (
    <div className={clsx(styles.specContainer)}>
      {title && (
        <div className={clsx(styles.specTitleWrapper)}>
          <span className={clsx(styles.specTitle)}>{title}</span>
          {subtitle && (
            <span className={clsx(styles.specSubtitle)}>{subtitle}</span>
          )}
        </div>
      )}
      {items && (
        <div className={clsx(styles.specTable)}>
          <table width="100%">
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
      {children ? (
        <div className={clsx(styles.specContent)}>{children}</div>
      ) : null}
    </div>
  );
};
