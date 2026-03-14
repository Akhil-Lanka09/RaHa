import Link from 'next/link';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import styles from './page.module.css';

const features = [
  { icon: '🌾', title: 'Direct from Farms', desc: 'We partner directly with farmers across Andhra Pradesh, Telangana, Punjab and Kerala.' },
  { icon: '🚚', title: 'Hyderabad Delivery', desc: 'Fresh produce delivered to your doorstep within 24 hours of harvest.' },
  { icon: '✅', title: 'Quality Guaranteed', desc: 'Every batch is hand-sorted and quality-checked before dispatch.' },
  { icon: '💚', title: 'Fair Prices', desc: 'Farmers earn more. You pay less. No middlemen, no markups.' },
];

const categories = [
  {
    href: '/rice',
    emoji: '🌾',
    title: 'Premium Rice',
    desc: 'Sona Masoori, Basmati, Ponni, Red Rice & more — direct from the paddy field.',
    cta: 'Shop Rice',
    color: '#c8860a',
    bg: 'linear-gradient(135deg, #3b0d0d 0%, #5c1a1a 100%)',
  },
  {
    href: '/veg',
    emoji: '🥦',
    title: 'Vegetable Boxes',
    desc: 'Curated weekly boxes for every kitchen — family packs to organic selections.',
    cta: 'Shop Veg',
    color: '#3a6b50',
    bg: 'linear-gradient(135deg, #1e3a2f 0%, #2d5a42 100%)',
  },
  {
    href: '/fruit',
    emoji: '🍎',
    title: 'Fruit Boxes',
    desc: 'From daily essentials to festive hampers — seasonal, tropical and exotic.',
    cta: 'Shop Fruits',
    color: '#d4601a',
    bg: 'linear-gradient(135deg, #5c1a00 0%, #8b3a0f 100%)',
  },
];

export default function Home() {
  return (
    <div className="page-enter">
      {/* ── HERO ── */}
      <div className={styles.hero}>
        <div className="hero-deco">🏡</div>
        <div className="hero-rule" style={{ background: 'var(--saffron)' }} />
        <div className="hero-eyebrow">Welcome to Raasa Harvest</div>
        <h1 className="hero-title">
          Farm-fresh goodness,<br /><em>delivered to your door.</em>
        </h1>
        <p className="hero-sub">
          We bridge the gap between local farmers and your kitchen. Experience the true taste
          of the harvest with our premium rice grains, fresh vegetables, and seasonal fruits.
        </p>
        <div className="hero-pill">
          <div className="hero-pill-line" />
          Sourced with Love · Delivered in Hyderabad
        </div>
      </div>

      {/* ── PHILOSOPHY ── */}
      <section className={styles.philosophy}>
        <div className="section-eyebrow">Who We Are</div>
        <h2 className="section-title">Our Philosophy</h2>
        <div className="section-rule" />
        <p className={styles.philosophyText}>
          At Raasa Harvest, we believe that the best food doesn't come from a factory —
          it comes straight from the earth. By partnering directly with farmers across
          Andhra Pradesh, Telangana, Punjab, and Kerala, we ensure that you get the freshest
          produce while the hardworking farmers get a fair price.
        </p>
        <div className={styles.ctaRow}>
          <Link href="/rice" className="btn-primary">Shop Rice</Link>
          <Link href="/veg" className="btn-secondary">Veg Boxes</Link>
          <Link href="/fruit" className="btn-tertiary">Fruit Boxes</Link>
        </div>
      </section>

      {/* ── FEATURE TILES ── */}
      <section className={styles.features}>
        {features.map(f => (
          <div key={f.title} className={styles.featureTile}>
            <div className={styles.featureIcon}>{f.icon}</div>
            <h3 className={styles.featureTitle}>{f.title}</h3>
            <p className={styles.featureDesc}>{f.desc}</p>
          </div>
        ))}
      </section>

      {/* ── CATEGORIES ── */}
      <section className={styles.categories}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="section-eyebrow">Explore Our Range</div>
          <h2 className="section-title" style={{ margin: '0 auto' }}>What We Offer</h2>
          <div className="section-rule" style={{ margin: '12px auto 0' }} />
        </div>
        <div className={styles.catGrid}>
          {categories.map(cat => (
            <Link key={cat.href} href={cat.href} className={styles.catCard} style={{ background: cat.bg }}>
              <div className={styles.catEmoji}>{cat.emoji}</div>
              <h3 className={styles.catTitle}>{cat.title}</h3>
              <p className={styles.catDesc}>{cat.desc}</p>
              <div className={styles.catCta} style={{ color: cat.color, borderColor: cat.color }}>
                {cat.cta} →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaBannerInner}>
          <div className="hero-eyebrow" style={{ textAlign: 'center' }}>Ready to Order?</div>
          <h2 className={styles.ctaBannerTitle}>Place your order via WhatsApp</h2>
          <p className={styles.ctaBannerSub}>
            Browse our catalogue, pick what you need, and message us directly.
            Fast, personal, reliable delivery.
          </p>
          <a
            href="https://wa.me/918217729818"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: '1rem', padding: '16px 40px' }}
          >
            <WhatsAppIcon /> &nbsp;WhatsApp Us Now
          </a>
        </div>
      </section>
    </div>
  );
}
