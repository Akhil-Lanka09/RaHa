'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { PantryProduct } from '@/data/pantry';
import styles from './PantryCard.module.css';

export default function PantryCard({ product }: { product: PantryProduct }) {
  const { addItem } = useCart();
  const [selectedIdx, setSelectedIdx] = useState(0);

  const size = product.sizes[selectedIdx];

  const handleAdd = () => {
    addItem({
      id: `${product.id}-${size.label.replace(/\s/g, '')}`,
      name: `${product.name} (${size.label})`,
      price: size.price,
      size: size.label,
      emoji: product.category === 'ghee' ? '🧈' : '🍯',
      code: product.id,
    });
  };

  return (
    <div className={styles.card}>
      <div className={styles.imgWrap}>
        <Image src={product.image} alt={product.name} fill className={styles.img} />
        {product.badges && (
          <div className={styles.badges}>
            {product.badges.map(b => (
              <span key={b} className="badge bg-saff text-burg">{b}</span>
            ))}
          </div>
        )}
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{product.name}</h3>
        <div className={styles.subtitle}>{product.subtitle}</div>
        <p className={styles.desc}>{product.desc}</p>

        <div className={styles.sizes}>
          {product.sizes.map((s, idx) => (
            <button
              key={s.label}
              onClick={() => setSelectedIdx(idx)}
              className={`${styles.sizeBtn} ${idx === selectedIdx ? styles.sizeActive : ''}`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className={styles.footer}>
          <div className={styles.priceWrap}>
            <span className={styles.price}>₹{size.price}</span>
          </div>
          <button onClick={handleAdd} className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
