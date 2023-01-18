import React from 'react';
import styles from './title.module.scss';

export default function Title({ children, className }) {
  return (
    <h2 className={`${styles['title']} ${className ?? ''}`}>{children}</h2>
  );
}
