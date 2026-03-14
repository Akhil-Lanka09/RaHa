import WhatsAppIcon from '@/components/WhatsAppIcon';
import styles from './page.module.css';

export const metadata = { title: 'Vegetable Boxes — Raasa Harvest' };

const vegFacts = [
  { icon: '🔄', label: 'Restocked', value: 'Mon & Thu' },
  { icon: '🌡️', label: 'Kept at', value: '4–8°C cold chain' },
  { icon: '📦', label: 'Packaging', value: 'Eco kraft boxes' },
  { icon: '🚚', label: 'Free delivery', value: 'On orders ₹500+' },
];

export default function VegPage() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <div className={styles.heroGreen}>
        <div className="hero-deco">🥦</div>
        <div className="hero-rule" style={{ background: 'var(--sage)' }} />
        <div className="hero-eyebrow" style={{ color: 'rgba(194,223,209,0.65)' }}>Fresh Vegetable Boxes</div>
        <h1 className="hero-title" style={{ color: 'var(--mint)' }}>From Farm to Your Kitchen</h1>
        <p className="hero-sub" style={{ color: 'rgba(194,223,209,0.7)' }}>
          Curated weekly boxes for every household. Sourced fresh, packed with care,
          and delivered straight to Hyderabad families twice a week.
        </p>
        <div className="hero-pill" style={{ color: 'rgba(106,158,127,0.8)' }}>
          <div className="hero-pill-line" style={{ background: 'var(--sage)' }} />
          6 Box Options · Weekly Subscription Available
        </div>
      </div>

      {/* Info strip */}
      <div className={styles.infoStrip}>
        {vegFacts.map(f => (
          <div key={f.label} className={styles.infoItem}>
            <span className={styles.infoIcon}>{f.icon}</span>
            <div>
              <div className={styles.infoLabel}>{f.label}</div>
              <div className={styles.infoValue}>{f.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Coming Soon */}
      <section className="page-section" style={{ textAlign: 'center', minHeight: '40vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontSize: '4rem', marginBottom: '16px', opacity: 0.4 }}>🥦</div>
        <h2 style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: '2.2rem',
          fontWeight: 600,
          color: 'var(--fern)',
          marginBottom: '12px',
        }}>Coming Soon</h2>
        <p style={{
          fontSize: '1rem',
          color: 'var(--tm)',
          maxWidth: '420px',
          lineHeight: 1.7,
          fontWeight: 300,
          marginBottom: '24px',
        }}>
          We're curating the freshest vegetable boxes for you. Stay tuned — our farm-fresh selections will be available shortly!
        </p>
        <a
          href="https://wa.me/918217729818"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ background: 'var(--fern)' }}
        >
          <WhatsAppIcon /> &nbsp;Notify Me via WhatsApp
        </a>
      </section>
    </div>
  );
}
