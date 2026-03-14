import RiceCard from '@/components/RiceCard';
import { riceProducts } from '@/data/rice';
import styles from './page.module.css';

export const metadata = { title: 'Rice Catalogue — Raasa Harvest' };

const riceFacts = [
  { icon: '📦', label: 'Min. Order', value: '1 kg' },
  { icon: '🚚', label: 'Delivery', value: 'Hyderabad only' },
  { icon: '🔄', label: 'Restock', value: 'Mon & Thu' },
  { icon: '💳', label: 'Payment', value: 'COD / UPI' },
];

export default function RicePage() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <div className={styles.hero}>
        <div className="hero-deco">🌾</div>
        <div className="hero-rule" style={{ background: 'var(--saffron)' }} />
        <div className="hero-eyebrow">Premium Rice Grains</div>
        <h1 className="hero-title">The Rice Catalogue</h1>
        <p className="hero-sub">
          From the everyday Sona Masoori to festive Basmati — sourced directly from the
          paddy fields of Andhra, Telangana, Punjab and Kerala. Choose your grain, choose your size.
        </p>
        <div className="hero-pill">
          <div className="hero-pill-line" />
          6 Varieties · Multiple Pack Sizes
        </div>
      </div>

      {/* Info strip */}
      <div className={styles.infoStrip}>
        {riceFacts.map(f => (
          <div key={f.label} className={styles.infoItem}>
            <span className={styles.infoIcon}>{f.icon}</span>
            <div>
              <div className={styles.infoLabel}>{f.label}</div>
              <div className={styles.infoValue}>{f.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Products */}
      <section className="page-section">
        <div className={styles.header}>
          <div className="section-eyebrow">Browse & Add to Cart</div>
          <h2 className="section-title">All Rice Varieties</h2>
          <div className="section-rule" />
          <p className={styles.headerNote}>
            Click any pack size row to add it to your cart. Hover to see it highlight.
          </p>
        </div>
        <div className="products-grid">
          {riceProducts.map(product => (
            <RiceCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Ordering note */}
      <div className={styles.orderNote}>
        <div className={styles.orderNoteInner}>
          <span style={{ fontSize: '1.4rem' }}>💬</span>
          <div>
            <strong>How to order:</strong> Add items to cart, then proceed to checkout — or
            WhatsApp us directly at{' '}
            <a href="https://wa.me/918217729818" target="_blank" rel="noopener noreferrer"
              style={{ color: 'var(--saffron)', fontWeight: 600 }}>
              +91 82177 29818
            </a>{' '}
            with your item codes.
          </div>
        </div>
      </div>
    </div>
  );
}
