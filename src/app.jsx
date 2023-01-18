import React from 'react';
import styles from './app.module.scss';
import Advertisement from '@/components/advertisement/advertisement';

export default function App() {
  return (
    <main className={styles['app']}>
      <Advertisement />
    </main>
  );
}
