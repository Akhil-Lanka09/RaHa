'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import styles from './Navbar.module.css';

const navItems = [
  { href: '/',        label: '🏡 Home' },
  { href: '/rice',    label: '🌾 Rice' },
  { href: '/veg',     label: '🥦 Veg Boxes' },
  { href: '/fruit',   label: '🍎 Fruit Boxes' },
  { href: '/summer-specials', label: '🥭 Summer Specials' },
  { href: '/special-products', label: '🫙 Special Products' },
  { href: '/contact', label: '📞 Order / Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const { count } = useCart();
  const { user, logout } = useAuth();

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        <span className={styles.logoMain}>Raasa Harvest</span>
        <span className={styles.logoSub}>Farm · Fresh · Delivered</span>
      </Link>

      <div className={styles.tabs}>
        {navItems.map(item => (
          <Link
            key={item.href}
            href={item.href}
            className={`${styles.tab} ${pathname === item.href ? styles.active : ''}`}
          >
            {item.label}
          </Link>
        ))}

        <Link
          href="/cart"
          className={`${styles.tab} ${pathname === '/cart' ? styles.active : ''}`}
        >
          🛒&nbsp;Cart
          {count > 0 && <span className={styles.cartBadge}>{count}</span>}
        </Link>

        {user ? (
          <Link
            href="/profile"
            className={`${styles.tab} ${pathname === '/profile' ? styles.active : ''}`}
          >
            👤&nbsp;My Profile
          </Link>
        ) : (
          <Link
            href="/login"
            className={`${styles.tab} ${pathname === '/login' ? styles.active : ''}`}
          >
            👤&nbsp;Sign In
          </Link>
        )}
      </div>

      {user && (
        <div className={styles.userPill}>
          <div className={styles.avatar}>{user.name.slice(0, 2).toUpperCase()}</div>
          <span className={styles.userName}>{user.name.split(' ')[0]}</span>
        </div>
      )}
    </nav>
  );
}
