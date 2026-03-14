import FruitCard from '@/components/FruitCard';
import { fruitBoxes } from '@/data/fruit';
import styles from './page.module.css';

export const metadata = { title: 'Fruit Boxes — Raasa Harvest' };

const fruitFacts = [
  { icon: '🌅', label: 'Harvested', value: 'Morning same day' },
  { icon: '📦', label: '6 Boxes', value: 'Curated selections' },
  { icon: '🎁', label: 'Gift packs', value: 'Available on request' },
  { icon: '🌿', label: 'Seasonal', value: 'Rotates every week' },
];

export default function FruitPage() {
  return (
    <div className="page-enter">
      <div className={styles.heroSpice}>
        <div className="hero-deco">🍎</div>
        <div className="hero-rule" style={{ background: 'var(--spice2)' }} />
        <div className="hero-eyebrow" style={{ color: 'rgba(252,232,218,0.6)' }}>Seasonal Fruit Boxes</div>
        <h1 className="hero-title" style={{ color: 'var(--spice3)' }}>Sun-Kissed, Straight to You</h1>
        <p className="hero-sub" style={{ color: 'rgba(252,232,218,0.7)' }}>
          From everyday family boxes to festive hampers — our fruits are handpicked at peak ripeness
          and delivered fresh to Hyderabad households.
        </p>
        <div className="hero-pill" style={{ color: 'rgba(212,96,26,0.8)' }}>
          <div className="hero-pill-line" style={{ background: 'var(--spice2)' }} />
          6 Curated Boxes · Seasonal Rotation
        </div>
      </div>

      <div className={styles.infoStrip}>
        {fruitFacts.map(f => (
          <div key={f.label} className={styles.infoItem}>
            <span className={styles.infoIcon}>{f.icon}</span>
            <div>
              <div className={styles.infoLabel}>{f.label}</div>
              <div className={styles.infoValue}>{f.value}</div>
            </div>
          </div>
        ))}
      </div>

      <section className="page-section">
        <div className={styles.header}>
          <div className="section-eyebrow">Choose Your Box</div>
          <h2 className="section-title">Fruit Boxes</h2>
          <div className="section-rule" style={{ background: 'var(--spice2)' }} />
        </div>
        <div className="products-grid">
          {fruitBoxes.map(box => (
            <FruitCard key={box.id} box={box} />
          ))}
        </div>
      </section>

      <div className={styles.orderNote}>
        <div className={styles.orderNoteInner} style={{ background: 'var(--spice3)', borderColor: 'rgba(139,58,15,0.2)' }}>
          <span style={{ fontSize: '1.4rem' }}>🎁</span>
          <div>
            <strong>Gift hampers available!</strong> For weddings, festivals & corporate gifts —
            WhatsApp us at{' '}
            <a href="https://wa.me/918217729818" target="_blank" rel="noopener noreferrer"
              style={{ color: 'var(--spice)', fontWeight: 600 }}>
              +91 82177 29818
            </a>{' '}
            for custom hamper pricing and branding options.
          </div>
        </div>
      </div>
    </div>
  );
}
