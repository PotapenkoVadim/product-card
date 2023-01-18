import React from 'react';
import Title from '@/components/title/title';
import AdCard from '@/components/ad-card/ad-card';
import { configuration } from '@/configuration';
import styles from './advertisement.module.scss';

const products = configuration.products;

export default function Advertisement() {
  return (
    <div className={styles['advertisement']}>
      <Title className={styles['advertisement__title']}>
        Ты сегодня покормил кота?
      </Title>

      <div className={styles['advertisement__list']}>
        {products.length > 0 &&
          products.map((item) => <AdCard key={item.id} product={item} />)}
      </div>
    </div>
  );
}
