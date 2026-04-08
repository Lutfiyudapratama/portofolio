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
          --krem-gelap: #f0e9d8;
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
            var(--hijau) 18px, var(--hijau) 28px,
            var(--emas) 28px, var(--emas) 36px
          );
        }
        .logo-jawa {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          color: var(--sogan);
          font-size: 1.25rem;
          letter-spacing: 0.03em;
        }
        .ornamen-kecil {
          color: var(--emas);
          font-size: 0.85rem;
          user-select: none;
        }
        .nav-link-jawa {
          font-family: 'Crimson Text', Georgia, serif;
          font-size: 0.95rem;
          letter-spacing: 0.14em;
          color: var(--sogan);
          text-transform: uppercase;
          padding: 6px 14px;
          position: relative;
          transition: color 0.2s;
          text-decoration: none;
          display: inline-block;
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
          transform-origin: center;
        }
        .nav-link-jawa:hover { color: var(--coklat-muda); }
        .nav-link-jawa:hover::after { transform: scaleX(1); }
      `}</style>

      <nav className="nav-jawa w-full">
        <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="ornamen-kecil">❧</span>
            <span className="logo-jawa">MyPortfolio</span>
            <span className="ornamen-kecil">❧</span>
          </div>
          <ul className="flex items-center gap-1 list-none">
            <li><a href="#projects" className="nav-link-jawa">Projects</a></li>
            <span className="ornamen-kecil mx-1">·</span>
            <li><a href="#contact" className="nav-link-jawa">Contact</a></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar