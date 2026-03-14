import PantryCard from '@/components/PantryCard';
import { pantryProducts } from '@/data/pantry';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import styles from './page.module.css';

export const metadata = { title: 'Special Products — Raasa Harvest' };

const specialFacts = [
  { icon: '🧈', label: 'Ghee', value: 'Traditional Bilona method' },
  { icon: '🍯', label: 'Honey', value: 'Unprocessed & wild-harvested' },
  { icon: '🌿', label: 'Sourcing', value: 'Direct from farms & forests' },
  { icon: '🚚', label: 'Delivery', value: 'Hyderabad — same day' },
];

export default function SpecialProductsPage() {
  const gheeProducts = pantryProducts.filter(p => p.category === 'ghee');
  const honeyProducts = pantryProducts.filter(p => p.category === 'honey');

  return (
    <div className="page-enter">
      {/* Hero */}
      <div className={styles.hero}>
        <div className="hero-deco">🫙</div>
        <div className="hero-rule" style={{ background: 'var(--saffron)' }} />
        <div className="hero-eyebrow">Artisanal & Authentic</div>
        <h1 className="hero-title">Special Products</h1>
        <p className="hero-sub">
          Pure, authentic ghee and honey — sourced directly from trusted farms and forest
          communities. No additives, no shortcuts, just nature&apos;s best.
        </p>
        <div className="hero-pill">
          <div className="hero-pill-line" />
          Farm Fresh · Handcrafted
        </div>
      </div>

      {/* Info strip */}
      <div className={styles.infoStrip}>
        {specialFacts.map(f => (
          <div key={f.label} className={styles.infoItem}>
            <span className={styles.infoIcon}>{f.icon}</span>
            <div>
              <div className={styles.infoLabel}>{f.label}</div>
              <div className={styles.infoValue}>{f.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Ghee Section */}
      <section className="page-section">
        <div className={styles.header}>
          <div className="section-eyebrow">Pure & Traditional</div>
          <h2 className="section-title">🧈 Premium Ghee</h2>
          <div className="section-rule" style={{ background: 'var(--saffron)' }} />
          <p className={styles.headerNote}>
            Made using the traditional Bilona method — hand-churned from farm-fresh curd.
          </p>
        </div>
        <div className={styles.productRow}>
          {gheeProducts.map(product => (
            <PantryCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Honey Section */}
      <section className="page-section" style={{ background: 'var(--card)', borderTop: '1px solid rgba(59,13,13,0.06)' }}>
        <div className={styles.header}>
          <div className="section-eyebrow">Natural & Unprocessed</div>
          <h2 className="section-title">🍯 Pure Honey</h2>
          <div className="section-rule" style={{ background: 'var(--saffron)' }} />
          <p className={styles.headerNote}>
            Unprocessed, unfiltered honey — straight from the hive to your table.
          </p>
        </div>
        <div className={styles.productRow}>
          {honeyProducts.map(product => (
            <PantryCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Ordering note */}
      <div className={styles.orderNote}>
        <div className={styles.orderNoteInner}>
          <span style={{ fontSize: '1.4rem' }}>💬</span>
          <div>
            <strong>Bulk orders or gift packaging?</strong> WhatsApp us at{' '}
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
