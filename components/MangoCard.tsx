'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { MangoVariety } from '@/data/mango';
import styles from './MangoCard.module.css';

export default function MangoCard({ mango }: { mango: MangoVariety }) {
  const { addItem } = useCart();
  const [selectedPackIndex, setSelectedPackIndex] = useState(0);

  const pack = mango.packs[selectedPackIndex];

  const handleAdd = () => {
    addItem({
      id: `${mango.id}-${pack.size}`,
      name: `${mango.name} (Pack of ${pack.size})`,
      price: pack.price,
      size: `${pack.size} pcs`,
      emoji: '🥭',
      code: mango.id,
    });
  };

  return (
    <div className={styles.card}>
      <div className={styles.imgWrap}>
        <Image src={mango.image} alt={mango.name} fill className={styles.img} />
        {mango.badges && (
          <div className={styles.badges}>
            {mango.badges.map(b => (
              <span key={b} className="badge bg-saff text-burg">{b}</span>
            ))}
          </div>
        )}
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{mango.name}</h3>
        <p className={styles.desc}>{mango.desc}</p>

        <div className={styles.sizes}>
          {mango.packs.map((p, idx) => (
            <button
              key={p.size}
              onClick={() => setSelectedPackIndex(idx)}
              className={`${styles.sizeBtn} ${idx === selectedPackIndex ? styles.sizeActive : ''}`}
            >
              <span className={styles.sizeTxt}>{p.size} pcs</span>
              {p.discount && <span className={styles.sizeDiscount}>-{p.discount}%</span>}
            </button>
          ))}
        </div>

        <div className={styles.footer}>
          <div className={styles.priceWrap}>
            <span className={styles.price}>₹{pack.price}</span>
            <span className={styles.priceUnit}>/ pack</span>
          </div>
          <button onClick={handleAdd} className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
