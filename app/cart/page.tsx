'use client';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import styles from './page.module.css';

export default function CartPage() {
  const { items, removeItem, updateQty, total, count, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="page-enter">
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>🛒</div>
          <h2 className={styles.emptyTitle}>Your cart is empty</h2>
          <p className={styles.emptyDesc}>
            Browse our catalogue and add items to get started.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '8px' }}>
            <Link href="/rice" className="btn-primary">Shop Rice</Link>
            <Link href="/veg" className="btn-secondary">Veg Boxes</Link>
            <Link href="/fruit" className="btn-tertiary">Fruit Boxes</Link>
          </div>
        </div>
      </div>
    );
  }

  const waMsg = encodeURIComponent(
    `Hi Raasa Harvest! I'd like to place an order:\n\n` +
    items.map(i => `- ${i.name} (${i.size}) × ${i.qty} = ₹${i.price * i.qty}  [${i.code}]`).join('\n') +
    `\n\nTotal: ₹${total}\n\nPlease confirm availability and delivery.`
  );

  return (
    <div className="page-enter">
      <div className={styles.hero}>
        <div className="hero-rule" style={{ background: 'var(--saffron)' }} />
        <div className="hero-eyebrow">Your Selection</div>
        <h1 className="hero-title">Shopping Cart</h1>
        <p className="hero-sub">
          {count} item{count !== 1 ? 's' : ''} · Total ₹{total}
        </p>
      </div>

      <section className="page-section">
        <div className={styles.layout}>
          {/* Items list */}
          <div className={styles.itemsList}>
            <div className={styles.listHeader}>
              <h2 className={styles.listTitle}>Cart Items</h2>
              <button className={styles.clearBtn} onClick={clearCart}>Clear all</button>
            </div>

            {items.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-emoji">{item.emoji}</div>
                <div style={{ flex: 1 }}>
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-sub">{item.size} · {item.code}</div>
                  <div className="cart-item-price" style={{ marginTop: '4px' }}>
                    ₹{item.price} × {item.qty} = <strong>₹{item.price * item.qty}</strong>
                  </div>
                </div>
                <div className={styles.qtyControl}>
                  <button className={styles.qtyBtn} onClick={() => updateQty(item.id, item.qty - 1)}>−</button>
                  <span className={styles.qtyNum}>{item.qty}</span>
                  <button className={styles.qtyBtn} onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                </div>
                <button className={styles.removeBtn} onClick={() => removeItem(item.id)} title="Remove">✕</button>
              </div>
            ))}
          </div>

          {/* Summary panel */}
          <div className={styles.summary}>
            <div className={styles.summaryTitle}>Order Summary</div>
            <div className={styles.summaryRows}>
              {items.map(item => (
                <div key={item.id} className={styles.summaryRow}>
                  <span>{item.name} ({item.size}) ×{item.qty}</span>
                  <span>₹{item.price * item.qty}</span>
                </div>
              ))}
            </div>
            <div className={styles.summaryDivider} />
            <div className={styles.summaryTotal}>
              <span>Total</span>
              <span>₹{total}</span>
            </div>
            {total < 500 && (
              <div className={styles.deliveryNote}>
                Add ₹{500 - total} more for free delivery
              </div>
            )}
            {total >= 500 && (
              <div className={styles.deliveryFree}>✓ Free delivery included!</div>
            )}

            <a
              href={`https://wa.me/918217729818?text=${waMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ width: '100%', textAlign: 'center', marginTop: '16px', display: 'block' }}
            >
              <WhatsAppIcon /> &nbsp;Order via WhatsApp
            </a>
            <Link href="/contact" className="btn-secondary"
              style={{ width: '100%', textAlign: 'center', marginTop: '10px', display: 'block', padding: '12px' }}>
              Place Order via Form
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
