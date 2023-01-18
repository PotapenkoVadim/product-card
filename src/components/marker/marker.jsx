import React from 'react';
import styles from './marker.module.scss';

export default function Marker({ children, onClick, className }) {
  return (
    <span
      onClick={onClick}
      className={`${styles['marker']} ${className ?? ''}`}
    >
      {children}
    </span>
  );
}
