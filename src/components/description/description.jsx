import React, { useEffect, useState } from 'react';
import styles from './description.module.scss';

export default function Description({ product, description }) {
  const [text, setText] = useState('');

  useEffect(() => {
    setText(
      !product.inStok ? `Печалька, ${product.taste} закончился.` : description
    );
  }, [product, description]);

  return (
    <div
      className={`
      ${styles['description']}
      ${!product.inStok ? styles['description_disabled'] : ''}
    `}
    >
      {text}
    </div>
  );
}
