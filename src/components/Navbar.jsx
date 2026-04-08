function Navbar() {
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

        .nav-jawa {
          background-color: var(--krem);
          border-bottom: 1px solid var(--emas);
          position: sticky;
          top: 0;
          z-index: 50;
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
          font-size: 1.3rem;
        }

        .nav-link-jawa {
          font-family: 'Crimson Text', serif;
          letter-spacing: .15em;
          text-transform: uppercase;
          color: var(--sogan);
          font-size: .9rem;
          padding: 6px 14px;
          position: relative;
        }

        .nav-link-jawa::after {
          content:'';
          position:absolute;
          bottom:2px;
          left:14px;
          right:14px;
          height:1px;
          background:var(--emas);
          transform:scaleX(0);
          transition:.25s;
        }

        .nav-link-jawa:hover::after{
          transform:scaleX(1);
        }

      `}</style>

      <nav className="nav-jawa w-full">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-4 flex justify-between items-center">

          <div className="flex items-center gap-2">
            <span className="text-[var(--emas)]">❧</span>
            <span className="logo-jawa">MyPortfolio</span>
            <span className="text-[var(--emas)]">❧</span>
          </div>

          <ul className="hidden md:flex items-center gap-2">
            <li><a href="#projects" className="nav-link-jawa">Projects</a></li>
            <li><a href="#contact" className="nav-link-jawa">Contact</a></li>
          </ul>

          {/* mobile menu icon */}
          <button className="md:hidden text-[var(--sogan)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>

        </div>
      </nav>
    </>
  )
}

export default Navbar