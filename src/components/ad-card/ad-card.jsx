import React, { useState } from 'react';
import { configuration } from '@/configuration';
import Marker from '@/components/marker/marker';
import styles from './ad-card.module.scss';
import Description from '@/components/description/description';

const productName = configuration.productName;

export default function AdCard({ product }) {
  const [isSelected, setIsSelected] = useState(false);
  const [isMouseLeave, setIsMouseLeave] = useState(false);

  const toggleProduct = () => {
    if (product.inStok) {
      setIsSelected(!isSelected);
    }
  };

  const selectProduct = () => {
    if (product.inStok) {
      setIsSelected(true);
    }
  };

  const handleMouseLeave = () => {
    setIsMouseLeave(true);
  };

  const handleMouseEnter = () => {
    setIsMouseLeave(false);
  };

  return (
    <div className={styles['ad-card']}>
      <div
        aria-disabled={!product.inStok}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        onClick={toggleProduct}
        className={`${styles['ad-card__card']} ${
          isSelected && product.inStok ? styles['ad-card__card_selected'] : ''
        }`}
      >
        {isMouseLeave && isSelected ? (
          <div
            className={`${styles['ad-card__subtitle']} ${styles['ad-card__subtitle_leaved']}`}
          >
            Котэ не одобряет?
          </div>
        ) : (
          <div className={styles['ad-card__subtitle']}>
            Сказочное заморское яство
          </div>
        )}

        <div className={styles['ad-card__title']}>{productName}</div>
        <div className={styles['ad-card__taste']}>{product.taste}</div>
        <div className={styles['ad-card__benefits']}>
          {product.portion} порций
        </div>

        <div className={styles['ad-card__benefits']}>{product.bonus}</div>
        <div className={styles['ad-card__weight']}>
          <span className={styles['ad-card__weight-value']}>
            {product.weight}
          </span>
          <span className={styles['ad-card__weight-kilo']}>кг</span>
        </div>

        {!product.inStok && (
          <div className={styles['ad-card__disabled-wrapper']}></div>
        )}
      </div>

      <Description
        product={product}
        description={
          isSelected ? (
            product.description
          ) : (
            <>
              Чего сидишь? Порадуй котэ,{' '}
              <Marker
                className={styles['ad-card__marker']}
                onClick={selectProduct}
              >
                купи.
              </Marker>
            </>
          )
        }
      />
    </div>
  );
}
