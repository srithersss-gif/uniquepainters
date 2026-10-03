export default function Contact() {
  return (
    <article className="brutalist-section animate-fade-in-up animate-delay-1" style={{ background: 'var(--gray-50)', minHeight: '100vh', padding: '120px 0' }}>
      <div className="container">
        
        {/* HEADER SECTION (CENTERED) */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 64px' }}>
          <div style={{ display: 'inline-block', border: 'var(--brutalist-border)', padding: '8px 16px', borderRadius: '50px', fontWeight: 800, marginBottom: '24px', background: 'var(--white)' }}>
            CONTACT US
          </div>
          <h1 className="text-massive contact-title" style={{ marginBottom: '24px', lineHeight: 1.1 }}>
            Let's get in <span className="accent-circle contact-mobile-circle">touch.</span>
          </h1>
          <p style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--blue-900)', opacity: 0.8 }}>
            Whether you need a free quote, a site inspection, or have a question about our services, our team is ready to help.
          </p>
        </div>

        {/* CONTACT DETAILS GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          
          {/* PHONE BOX */}
          <div style={{ background: '#FFD400', border: 'var(--brutalist-border)', padding: '40px 32px', boxShadow: '8px 8px 0 var(--blue-900)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 900 }}>Phones</h3>
            <a href="tel:+917338882034" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--blue-900)', textDecoration: 'none' }}>
              +91 73388 82034
            </a>
            <a href="tel:+919500065813" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--blue-900)', textDecoration: 'none' }}>
              +91 95000 65813
            </a>
          </div>
          
          {/* EMAIL BOX */}
          <div style={{ background: 'var(--white)', border: 'var(--brutalist-border)', padding: '40px 32px', boxShadow: '8px 8px 0 var(--orange-500)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 900 }}>Email</h3>
            <a href="mailto:sritherss.s@gmail.com" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--blue-900)', textDecoration: 'none', wordBreak: 'break-all' }}>
              sritherss.s@gmail.com
            </a>
          </div>

          {/* HEAD OFFICE BOX */}
          <div style={{ background: 'var(--white)', border: 'var(--brutalist-border)', padding: '40px 32px', boxShadow: '8px 8px 0 var(--blue-900)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 900 }}>Head Office</h3>
            <address style={{ fontSize: '1.25rem', fontWeight: 700, fontStyle: 'normal', lineHeight: 1.6, color: 'var(--blue-900)' }}>
              No 6, Jayam Industrial Estate, 1st Main Rd,<br/>
              Chettiyar Agaram, Vanagaram, Chennai – 600116.
            </address>
          </div>

        </div>
      </div>
    </article>
  );
}
