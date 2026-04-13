import { useState, useEffect } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, target) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(target)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap');

        :root {
          --sogan: #5c3d1e;
          --emas: #c8a96e;
          --hijau: #4a6741;
          --krem: #faf7f0;
          --coklat-muda: #8b5e3c;
        }

        html { scroll-behavior: smooth; }

        .nav-jawa {
          background-color: var(--krem);
          border-bottom: 1px solid var(--emas);
          position: sticky;
          top: 0;
          z-index: 50;
          transition: box-shadow 0.3s ease;
        }

        .nav-jawa.scrolled {
          box-shadow: 0 2px 20px rgba(92,61,30,0.12);
        }

        .nav-jawa::before {
          content: '';
          display: block;
          height: 4px;
          background: repeating-linear-gradient(
            90deg,
            var(--sogan) 0px, var(--sogan) 10px,
            var(--emas) 10px, var(--emas) 18px,
            var(--hijau) 18px, var(--hijau) 28px
          );
        }

        .logo-jawa {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          color: var(--sogan);
          font-size: 1.2rem;
          transition: opacity 0.2s;
        }
        .logo-jawa:hover { opacity: 0.75; }

        .nav-link-jawa {
          font-family: 'Crimson Text', serif;
          letter-spacing: .15em;
          text-transform: uppercase;
          color: var(--sogan);
          font-size: .9rem;
          padding: 6px 14px;
          position: relative;
          transition: color 0.2s;
        }

        .nav-link-jawa::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 14px;
          right: 14px;
          height: 1px;
          background: var(--emas);
          transform: scaleX(0);
          transition: transform 0.25s ease;
        }

        .nav-link-jawa:hover::after { transform: scaleX(1); }

        .mobile-dropdown {
          background-color: var(--krem);
          border-top: 1px solid rgba(200,169,110,0.4);
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.3s ease, opacity 0.3s ease;
          opacity: 0;
        }

        .mobile-dropdown.open {
          max-height: 200px;
          opacity: 1;
        }

        .nav-link-mobile {
          font-family: 'Crimson Text', serif;
          letter-spacing: .15em;
          text-transform: uppercase;
          color: var(--sogan);
          font-size: 1rem;
          display: block;
          padding: 14px 20px;
          border-bottom: 1px solid rgba(200,169,110,0.2);
          transition: background 0.2s, padding-left 0.2s;
          cursor: pointer;
        }

        .nav-link-mobile:hover {
          background: rgba(200,169,110,0.12);
          padding-left: 26px;
        }

        .hamburger-btn {
          padding: 6px;
          border-radius: 6px;
          transition: background 0.2s;
          color: var(--sogan);
        }
        .hamburger-btn:hover { background: rgba(200,169,110,0.15); }

        .hamburger-line {
          display: block;
          width: 22px;
          height: 2px;
          background: var(--sogan);
          border-radius: 2px;
          transition: transform 0.3s ease, opacity 0.3s ease;
          transform-origin: center;
        }
        .hamburger-line:nth-child(2) { margin: 5px 0; }

        .hamburger-btn.open .hamburger-line:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger-btn.open .hamburger-line:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hamburger-btn.open .hamburger-line:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
      `}</style>

      <nav className={`nav-jawa w-full ${scrolled ? 'scrolled' : ''}`}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-3 sm:py-4 flex justify-between items-center">

          <div className="flex items-center gap-2">
            <span style={{ color: 'var(--emas)', fontSize: '0.85rem' }}>❧</span>
            <span className="logo-jawa">MyPortfolio</span>
            <span style={{ color: 'var(--emas)', fontSize: '0.85rem' }}>❧</span>
          </div>

          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-2">
            <li><a href="#projects" className="nav-link-jawa" onClick={(e) => handleNavClick(e, '#projects')}>Projects</a></li>
            <li><a href="#contact" className="nav-link-jawa" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a></li>
          </ul>

          {/* Mobile hamburger */}
          <button
            className={`hamburger-btn md:hidden ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>

        {/* Mobile dropdown */}
        <div className={`mobile-dropdown md:hidden ${menuOpen ? 'open' : ''}`}>
          <a href="#projects" className="nav-link-mobile" onClick={(e) => handleNavClick(e, '#projects')}>Projects</a>
          <a href="#contact" className="nav-link-mobile" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a>
        </div>
      </nav>
    </>
  )
}

export default Navbar