'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import styles from './page.module.css';

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [tab, setTab] = useState<'login' | 'signup'>('login');

  // Login form
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPwd, setLoginPwd] = useState('');
  const [loginErr, setLoginErr] = useState('');

  // Signup form
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPhone, setSignupPhone] = useState('');
  const [signupPwd, setSignupPwd] = useState('');
  const [signupPwdStrength, setSignupPwdStrength] = useState(0);

  const checkStrength = (pwd: string) => {
    if (pwd.length === 0) return 0;
    if (pwd.length < 6) return 1;
    if (pwd.length < 10 || !/[0-9]/.test(pwd)) return 2;
    return 3;
  };

  const strengthLabel = ['', 'Weak', 'Medium', 'Strong'];
  const strengthColor = ['', '#c01818', 'var(--saffron)', 'var(--fern)'];
  const strengthWidth = ['0%', '33%', '66%', '100%'];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginEmail || !loginPwd) { setLoginErr('Please fill in all fields.'); return; }
    if (loginPwd.length < 6) { setLoginErr('Password must be at least 6 characters.'); return; }
    login({ name: loginEmail.split('@')[0], email: loginEmail });
    router.push('/profile');
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!signupName || !signupEmail || !signupPwd) return;
    login({ name: signupName, email: signupEmail, whatsapp: signupPhone });
    router.push('/profile');
  };

  return (
    <div className="page-enter">
      <div className={styles.bg}>
        <div className={styles.card}>
          {/* Logo */}
          <div className={styles.logoArea}>
            <div className={styles.logoMain}>Raasa Harvest</div>
            <div className={styles.logoSub}>Farm · Fresh · Delivered</div>
          </div>

          {/* Tabs */}
          <div className={styles.tabs}>
            <button
              className={`${styles.tabBtn} ${tab === 'login' ? styles.tabActive : ''}`}
              onClick={() => setTab('login')}
            >
              Sign In
            </button>
            <button
              className={`${styles.tabBtn} ${tab === 'signup' ? styles.tabActive : ''}`}
              onClick={() => setTab('signup')}
            >
              Create Account
            </button>
          </div>

          {/* Login Form */}
          {tab === 'login' && (
            <form onSubmit={handleLogin} className={styles.form}>
              <div className="field-group">
                <label className="field-label" htmlFor="lemail">Email Address</label>
                <input className="field-input" id="lemail" type="email" required
                  placeholder="you@example.com"
                  value={loginEmail} onChange={e => { setLoginEmail(e.target.value); setLoginErr(''); }} />
              </div>
              <div className="field-group">
                <label className="field-label" htmlFor="lpwd">Password</label>
                <input className="field-input" id="lpwd" type="password" required
                  placeholder="Min. 6 characters"
                  value={loginPwd} onChange={e => { setLoginPwd(e.target.value); setLoginErr(''); }} />
              </div>
              {loginErr && <div className={styles.errMsg}>{loginErr}</div>}
              <button type="submit" className="btn-primary" style={{ width: '100%' }}>Sign In</button>

              <div className={styles.divider}><span>or</span></div>

              <a
                href="https://wa.me/918217729818"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.waBtn}
              >
                <WhatsAppIcon /> &nbsp;Order without an account via WhatsApp
              </a>
            </form>
          )}

          {/* Signup Form */}
          {tab === 'signup' && (
            <form onSubmit={handleSignup} className={styles.form}>
              <div className="field-group">
                <label className="field-label" htmlFor="sname">Full Name</label>
                <input className="field-input" id="sname" type="text" required
                  placeholder="e.g. Priya Reddy"
                  value={signupName} onChange={e => setSignupName(e.target.value)} />
              </div>
              <div className="field-group">
                <label className="field-label" htmlFor="semail">Email Address</label>
                <input className="field-input" id="semail" type="email" required
                  placeholder="you@example.com"
                  value={signupEmail} onChange={e => setSignupEmail(e.target.value)} />
              </div>
              <div className="field-group">
                <label className="field-label" htmlFor="sphone">WhatsApp Number</label>
                <input className="field-input" id="sphone" type="tel" required
                  placeholder="+91 98765 43210"
                  value={signupPhone} onChange={e => setSignupPhone(e.target.value)} />
              </div>
              <div className="field-group">
                <label className="field-label" htmlFor="spwd">Password</label>
                <input className="field-input" id="spwd" type="password" required
                  placeholder="Min. 6 characters"
                  value={signupPwd}
                  onChange={e => { setSignupPwd(e.target.value); setSignupPwdStrength(checkStrength(e.target.value)); }} />
                {signupPwd && (
                  <div className={styles.pwdBar}>
                    <div
                      className={styles.pwdFill}
                      style={{
                        width: strengthWidth[signupPwdStrength],
                        background: strengthColor[signupPwdStrength],
                      }}
                    />
                    <span style={{ color: strengthColor[signupPwdStrength] }}>
                      {strengthLabel[signupPwdStrength]}
                    </span>
                  </div>
                )}
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%' }}>Create Account</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
