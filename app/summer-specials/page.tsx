import MangoCard from '@/components/MangoCard';
import { mangoes } from '@/data/mango';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import styles from './page.module.css';

export const metadata = { title: 'Summer Specials — Raasa Harvest' };

const mangoFacts = [
  { icon: '🥭', label: 'Origin', value: 'Direct from Andhra & Telangana Farms' },
  { icon: '✨', label: 'Ripening', value: '100% Calcium Carbide Free' },
  { icon: '📦', label: 'Packaging', value: 'Padded cartons to prevent bruising' },
  { icon: '🚚', label: 'Delivery', value: 'Delivered in 24-48 hours' },
];

export default function SummerSpecialsPage() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <div className={styles.hero}>
        <div className="hero-deco">🥭</div>
        <div className="hero-rule" style={{ background: 'var(--saffron)' }} />
        <div className="hero-eyebrow">Summer Specials</div>
        <h1 className="hero-title">The Mango Festival</h1>
        <p className="hero-sub">
          Experience the authentic taste of Indian summers. We bring you 9 premium varieties of
          naturally ripened, farm-fresh mangoes directly from the best orchards.
        </p>
        <div className="hero-pill">
          <div className="hero-pill-line" />
          Naturally Ripened · Handpicked
        </div>
      </div>

      {/* Info strip */}
      <div className={styles.infoStrip}>
        {mangoFacts.map(f => (
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
          <h2 className="section-title">Fresh Mango Varieties</h2>
          <div className="section-rule" style={{ background: 'var(--saffron)' }} />
          <p className={styles.headerNote}>
            Select a pack size, then click "Add to Cart" to start your order.
          </p>
        </div>
        <div className="products-grid">
          {mangoes.map(mango => (
            <MangoCard key={mango.id} mango={mango} />
          ))}
        </div>
      </section>

      {/* Ordering note */}
      <div className={styles.orderNote}>
        <div className={styles.orderNoteInner}>
          <span style={{ fontSize: '1.4rem' }}>💬</span>
          <div>
            <strong>Bulk orders or corporate gifting?</strong> We offer special packaging for large orders.
            Ask us on{' '}
            <a href="https://wa.me/918217729818" target="_blank" rel="noopener noreferrer"
              style={{ color: 'var(--saffron)', fontWeight: 600 }}>
              <WhatsAppIcon size={16} /> +91 82177 29818
            </a>{' '}
            for custom pricing.
          </div>
        </div>
      </div>
    </div>
  );
}
