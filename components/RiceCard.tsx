'use client';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import type { Product } from '@/data/rice';

export default function RiceCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className="rc-card">
      {/* Image Area */}
      <div className="rc-img-wrap" style={{ position: 'relative', overflow: 'hidden' }}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          style={{ objectFit: 'cover' }}
        />
        {product.badge && (
          <span
            className={`badge ${product.badge.type}`}
            style={{ position: 'absolute', top: '12px', right: '12px', zIndex: 1 }}
          >
            {product.badge.label}
          </span>
        )}
      </div>

      <div className="rc-body">
        {/* Header row */}
        <div className="rc-variety">{product.variety}</div>

        <div className="rc-name">
          {product.name}
          {product.subtitle && (
            <em style={{ fontSize: '0.8em', fontWeight: 400, color: 'var(--tl)' }}> ({product.subtitle})</em>
          )}
        </div>
        <div className="rc-desc">{product.description}</div>
        <div className="rc-origin">
          <span className={`dot ${product.dotType}`}></span>
          {product.origin}
        </div>

        {/* Size options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {product.sizes.map(s => (
            <div
              key={s.code}
              className={`sr ${product.dotType === 'green' ? 'green-row' : ''}`}
              onClick={() => addItem({
                id: s.code,
                name: product.name,
                size: s.size,
                price: s.price,
                emoji: product.emoji,
                code: s.code,
              })}
            >
              <div>
                <div className="sr-lbl">{s.size}</div>
                <div className="sr-cod">{s.code}</div>
              </div>
              <div className={`sr-price ${product.dotType === 'green' ? 'green-price' : ''}`}>
                ₹{s.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
