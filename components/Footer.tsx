import Link from 'next/link';
import WhatsAppIcon from './WhatsAppIcon';

export default function Footer() {
  return (
    <footer className="cat-footer">
      <div>
        <div className="cf-logo-m">Raasa Harvest</div>
        <div className="cf-logo-s">Hyderabad</div>
      </div>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <a href="https://wa.me/918217729818" target="_blank" rel="noopener noreferrer" className="cf-link">
          <WhatsAppIcon /> WhatsApp Us
        </a>
        <Link href="/contact" className="cf-link">📞 Contact</Link>
        <Link href="/rice" className="cf-link">🌾 Rice Catalogue</Link>
      </div>
      <div className="cf-tag">The taste of the harvest</div>
    </footer>
  );
}
