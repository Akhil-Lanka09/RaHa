'use client';
import { useCart } from '@/context/CartContext';
import type { FruitBox } from '@/data/fruit';
import styles from './FruitCard.module.css';

export default function FruitCard({ box }: { box: FruitBox }) {
  const { addItem } = useCart();

  return (
    <div className={styles.card}>
      <div className={styles.imgArea}>
        <span className={styles.emoji}>{box.emoji}</span>
        {box.seasonal && <span className={styles.seasonal}>🌿 Seasonal</span>}
        {box.badge && (
          <span className={`badge ${box.badge.type} ${styles.cardBadge}`}>{box.badge.label}</span>
        )}
      </div>
      <div className={styles.body}>
        <div className={styles.serves}>{box.serves}</div>
        <h3 className={styles.name}>{box.name}</h3>
        <p className={styles.subtitle}>{box.subtitle}</p>
        <p className={styles.desc}>{box.description}</p>

        <div className={styles.itemsWrap}>
          <div className={styles.itemsLabel}>Box includes:</div>
          <div className={styles.itemsList}>
            {box.items.map((item, i) => (
              <span key={i} className={styles.item}>{item}</span>
            ))}
          </div>
        </div>

        <div className={styles.footer}>
          <div>
            <div className={styles.priceLabel}>Box Price</div>
            <div className={styles.price}>₹{box.price}</div>
            <div className={styles.code}>{box.code}</div>
          </div>
          <button
            className={styles.addBtn}
            onClick={() => addItem({
              id: box.code,
              name: box.name,
              size: box.serves,
              price: box.price,
              emoji: box.emoji,
              code: box.code,
            })}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
