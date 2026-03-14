'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import styles from './page.module.css';

type Section = 'personal' | 'contact' | 'address' | 'security' | null;

export default function ProfilePage() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [editing, setEditing] = useState<Section>(null);

  // Form state
  const [name, setName] = useState(user?.name ?? '');
  const [email, setEmail] = useState(user?.email ?? '');
  const [phone, setPhone] = useState('');
  const [wa, setWa] = useState('');
  const [addr1, setAddr1] = useState('');
  const [area, setArea] = useState('');
  const [pin, setPin] = useState('');
  const [note, setNote] = useState('');

  if (!user) {
    return (
      <div className="page-enter">
        <div className={styles.guestWrap}>
          <div className={styles.guestIcon}>👤</div>
          <h2 className={styles.guestTitle}>You're not signed in</h2>
          <p className={styles.guestDesc}>Sign in to manage your profile and save your delivery details.</p>
          <Link href="/login" className="btn-primary">Sign In</Link>
        </div>
      </div>
    );
  }

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <div className="page-enter">
      {/* Hero */}
      <div className={styles.hero}>
        <div className="hero-deco">👤</div>
        <div className="hero-rule" style={{ background: 'var(--saffron)' }} />
        <div className="hero-eyebrow">Account</div>
        <h1 className="hero-title">My Profile</h1>
        <p className="hero-sub">Manage your details, delivery address and password.</p>
      </div>

      <section className="page-section">
        <div className={styles.grid}>
          {/* Personal */}
          <div className={styles.section}>
            <div className={styles.secHead}>
              <div className={styles.secTitle}>👤 &nbsp;Personal Details</div>
              <button className={styles.editBtn} onClick={() => setEditing(editing === 'personal' ? null : 'personal')}>
                {editing === 'personal' ? 'Save' : 'Edit'}
              </button>
            </div>
            <div className={styles.secBody}>
              {editing !== 'personal' ? (
                <>
                  <div className={styles.field}><div className={styles.fLabel}>Full Name</div><div className={styles.fVal}>{name || '—'}</div></div>
                  <div className={styles.field}><div className={styles.fLabel}>Email</div><div className={styles.fVal}>{email || '—'}</div></div>
                </>
              ) : (
                <>
                  <div className="field-group"><label className="field-label">Full Name</label>
                    <input className="field-input" value={name} onChange={e => setName(e.target.value)} placeholder="Your full name" />
                  </div>
                  <div className="field-group"><label className="field-label">Email</label>
                    <input className="field-input" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" />
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Contact */}
          <div className={styles.section}>
            <div className={styles.secHead}>
              <div className={styles.secTitle}>📞 &nbsp;Contact Details</div>
              <button className={styles.editBtn} onClick={() => setEditing(editing === 'contact' ? null : 'contact')}>
                {editing === 'contact' ? 'Save' : 'Edit'}
              </button>
            </div>
            <div className={styles.secBody}>
              {editing !== 'contact' ? (
                <>
                  <div className={styles.field}><div className={styles.fLabel}>Phone</div><div className={styles.fVal}>{phone || '—'}</div></div>
                  <div className={styles.field}><div className={styles.fLabel}>WhatsApp</div><div className={styles.fVal}>{wa || phone || '—'}</div></div>
                </>
              ) : (
                <>
                  <div className="field-group"><label className="field-label">Phone Number</label>
                    <input className="field-input" type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+91 98765 43210" />
                  </div>
                  <div className="field-group"><label className="field-label">WhatsApp (if different)</label>
                    <input className="field-input" type="tel" value={wa} onChange={e => setWa(e.target.value)} placeholder="+91 98765 43210" />
                    <div className={styles.fieldHint}>Leave blank if same as phone number above.</div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Address */}
          <div className={styles.section}>
            <div className={styles.secHead}>
              <div className={styles.secTitle}>📍 &nbsp;Delivery Address</div>
              <button className={styles.editBtn} onClick={() => setEditing(editing === 'address' ? null : 'address')}>
                {editing === 'address' ? 'Save' : 'Edit'}
              </button>
            </div>
            <div className={styles.secBody}>
              {editing !== 'address' ? (
                <>
                  <div className={styles.field}><div className={styles.fLabel}>Street / Flat</div><div className={styles.fVal}>{addr1 || '—'}</div></div>
                  <div className={styles.fieldRow}>
                    <div className={styles.field}><div className={styles.fLabel}>Area</div><div className={styles.fVal}>{area || '—'}</div></div>
                    <div className={styles.field}><div className={styles.fLabel}>Pincode</div><div className={styles.fVal}>{pin || '—'}</div></div>
                  </div>
                  <div className={styles.field}><div className={styles.fLabel}>Delivery Instructions</div><div className={styles.fVal}>{note || '—'}</div></div>
                </>
              ) : (
                <>
                  <div className="field-group"><label className="field-label">Street Address / Flat No.</label>
                    <input className="field-input" value={addr1} onChange={e => setAddr1(e.target.value)} placeholder="Flat 4B, Sunrise Apartments, Banjara Hills" />
                  </div>
                  <div className={styles.formRow}>
                    <div className="field-group" style={{ flex: 1 }}><label className="field-label">Area / Locality</label>
                      <input className="field-input" value={area} onChange={e => setArea(e.target.value)} placeholder="Jubilee Hills" />
                    </div>
                    <div className="field-group" style={{ flex: 1 }}><label className="field-label">Pincode</label>
                      <input className="field-input" value={pin} onChange={e => setPin(e.target.value)} maxLength={6} placeholder="500033" />
                    </div>
                  </div>
                  <div className="field-group"><label className="field-label">Delivery Instructions <em style={{ textTransform: 'none', letterSpacing: 0 }}>(optional)</em></label>
                    <input className="field-input" value={note} onChange={e => setNote(e.target.value)} placeholder="Leave at door, call before delivery, etc." />
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Security */}
          <div className={styles.section}>
            <div className={styles.secHead}>
              <div className={styles.secTitle}>🔒 &nbsp;Change Password</div>
              <button className={styles.editBtn} onClick={() => setEditing(editing === 'security' ? null : 'security')}>
                {editing === 'security' ? 'Cancel' : 'Change'}
              </button>
            </div>
            <div className={styles.secBody}>
              {editing !== 'security' ? (
                <div style={{ fontSize: '0.85rem', color: 'var(--tl)' }}>Password set. Click "Change" to update it.</div>
              ) : (
                <div className={styles.formRow}>
                  <div className="field-group" style={{ flex: 1 }}><label className="field-label">Current Password</label>
                    <input className="field-input" type="password" placeholder="Current password" />
                  </div>
                  <div className="field-group" style={{ flex: 1 }}><label className="field-label">New Password</label>
                    <input className="field-input" type="password" placeholder="Min. 6 characters" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Danger zone */}
        <div className={styles.danger}>
          <h4 className={styles.dangerTitle}>⚠ Account Actions</h4>
          <p className={styles.dangerDesc}>Sign out of your account, or permanently delete all your saved details.</p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button className={styles.logoutBtn} onClick={handleLogout}>Sign Out</button>
            <button className={styles.deleteBtn} onClick={() => { logout(); router.push('/'); }}>Delete Account</button>
          </div>
        </div>
      </section>
    </div>
  );
}
