import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useThemeContext from '@theme/hooks/useThemeContext';

export default ({ title, subtitle, items, children } = props) => {
  const {isDarkTheme, setLightTheme, setDarkTheme} = useThemeContext();
  return (
    <div className={clsx(styles.specContainer)}>
      <div className={clsx(styles.specTitle)}>
        {title}
        {subtitle && <span className={clsx(styles.specSubtitle)}>{subtitle}</span>}
      </div>
      {items && (
      <div className={clsx(styles.specTable)}>
          <table width="100%">
            <tbody>
            {items.map((item, index) => (
              <tr key={item.key}>
                <th className={clsx(styles.specKey)} >
                  {item.key}
                </th>
                <td className={clsx(styles.specValue)}>
                  {item.value}
                </td>
              </tr>
            ))}
            </tbody>
          </table>
      </div>
      )}
      {children ? (
        children
      ): null}

    </div>
  )

}