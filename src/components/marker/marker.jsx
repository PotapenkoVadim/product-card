import React from 'react';
import styles from './marker.module.scss';

export default function Marker({ children }) {
  return <span className={styles['marker']}>{children}</span>;
}
