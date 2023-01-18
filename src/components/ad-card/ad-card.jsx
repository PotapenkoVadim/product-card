import React from 'react';
import Marker from '@/components/marker/marker';
import { configuration } from '@/configuration';
import styles from './ad-card.module.scss';

const productName = configuration.productName;

export default function AdCard({ product }) {
  return (
    <div className={styles['ad-card']}>
      <div className={styles['ad-card__card']}>
        <div className={styles['ad-card__subtitle']}>
          Сказочное заморское яство
        </div>
        <div className={styles['ad-card__title']}>{productName}</div>
        <div className={styles['ad-card__taste']}>{product.taste}</div>
        <div className={styles['ad-card__benefits']}>{product.portion} порций</div>
        <div className={styles['ad-card__benefits']}>{product.bonus}</div>

        <div className={styles['ad-card__weight']}>
          <span className={styles['ad-card__weight-value']}>
            {product.weight}
          </span>
          <span className={styles['ad-card__weight-kilo']}>кг</span>
        </div>
      </div>

      <div className={styles['ad-card__appeal']}>
        Чего сидишь? Порадуй котэ, <Marker>купи.</Marker>
      </div>
    </div>
  );
}
