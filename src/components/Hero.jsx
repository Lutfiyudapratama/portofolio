import picture from '../assets/lutfi.jpg'

function Hero() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Crimson+Text:ital,wght@0,400;0,600;1,400;1,600&display=swap');

        :root {
          --sogan: #5c3d1e;
          --emas: #c8a96e;
          --emas-muda: #e8d5a3;
          --hijau: #4a6741;
          --krem: #faf7f0;
          --coklat-muda: #8b5e3c;
          --krem-gelap: #f0e9d8;
          --krem-medium: #f5efe0;
        }

        /* Batik parang background pattern */
        .hero-jawa {
          background-color: var(--krem);
          position: relative;
          overflow: hidden;
        }
        .hero-jawa::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            repeating-linear-gradient(
              45deg,
              transparent 0px,
              transparent 28px,
              rgba(200,169,110,0.07) 28px,
              rgba(200,169,110,0.07) 30px
            ),
            repeating-linear-gradient(
              -45deg,
              transparent 0px,
              transparent 28px,
              rgba(200,169,110,0.07) 28px,
              rgba(200,169,110,0.07) 30px
            );
          pointer-events: none;
        }

        /* Garis dekoratif pinggir */
        .hero-jawa::after {
          content: '';
          position: absolute;
          left: 40px;
          top: 0;
          bottom: 0;
          width: 1px;
          background: linear-gradient(to bottom, transparent, var(--emas) 20%, var(--emas) 80%, transparent);
          opacity: 0.4;
          pointer-events: none;
        }

        .hero-label {
          font-family: 'Crimson Text', Georgia, serif;
          font-size: 0.8rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--hijau);
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .hero-label::before, .hero-label::after {
          content: '';
          flex: 0 0 28px;
          height: 1px;
          background: var(--hijau);
          opacity: 0.5;
        }

        .hero-heading {
          font-family: 'Playfair Display', Georgia, serif;
          font-weight: 900;
          color: var(--sogan);
          line-height: 1.1;
          letter-spacing: -0.01em;
        }
        .hero-heading-italic {
          font-style: italic;
          color: var(--coklat-muda);
        }

        /* Frame foto bergaya keraton */
        .foto-frame {
          position: relative;
          display: inline-block;
        }
        .foto-frame::before {
          content: '';
          position: absolute;
          inset: -10px;
          border: 1px solid var(--emas);
          pointer-events: none;
          z-index: 0;
        }
        .foto-frame::after {
          content: '';
          position: absolute;
          inset: -18px;
          border: 1px dashed var(--emas);
          opacity: 0.4;
          pointer-events: none;
          z-index: 0;
        }
        .foto-img {
          position: relative;
          z-index: 1;
          display: block;
          filter: sepia(15%) contrast(1.02);
          transition: filter 0.4s ease;
        }
        .foto-img:hover { filter: sepia(0%) contrast(1.02); }

        /* Ornamen sudut foto */
        .corner-ornament {
          position: absolute;
          width: 14px;
          height: 14px;
          border-color: var(--emas);
          border-style: solid;
          z-index: 2;
        }
        .corner-tl { top: -4px; left: -4px; border-width: 2px 0 0 2px; }
        .corner-tr { top: -4px; right: -4px; border-width: 2px 2px 0 0; }
        .corner-bl { bottom: -4px; left: -4px; border-width: 0 0 2px 2px; }
        .corner-br { bottom: -4px; right: -4px; border-width: 0 2px 2px 0; }

        .bio-text {
          font-family: 'Crimson Text', Georgia, serif;
          font-size: 1.15rem;
          line-height: 1.85;
          color: #6b4c2a;
        }
        .bio-highlight {
          font-weight: 600;
          color: var(--sogan);
          font-style: italic;
        }

        /* Border kiri bio bergaya tumpal */
        .bio-container {
          border-left: 3px solid var(--emas);
          padding-left: 1.5rem;
          position: relative;
        }
        .bio-container::before {
          content: '◆';
          position: absolute;
          top: -10px;
          left: -8px;
          color: var(--emas);
          font-size: 0.75rem;
        }
        .bio-container::after {
          content: '◆';
          position: absolute;
          bottom: -10px;
          left: -8px;
          color: var(--emas);
          font-size: 0.75rem;
        }

        /* Tombol bergaya batik */
        .btn-utama {
          font-family: 'Crimson Text', Georgia, serif;
          font-size: 0.95rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          background-color: var(--sogan);
          color: var(--emas-muda);
          padding: 12px 28px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          position: relative;
          transition: all 0.25s ease;
          border: 1px solid var(--sogan);
        }
        .btn-utama::before {
          content: '';
          position: absolute;
          inset: 3px;
          border: 1px solid rgba(200,169,110,0.3);
          pointer-events: none;
          transition: all 0.25s;
        }
        .btn-utama:hover {
          background-color: var(--coklat-muda);
          border-color: var(--coklat-muda);
        }

        .btn-sekunder {
          font-family: 'Crimson Text', Georgia, serif;
          font-size: 0.95rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          background-color: transparent;
          color: var(--sogan);
          padding: 12px 28px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid var(--emas);
          position: relative;
          transition: all 0.25s ease;
        }
        .btn-sekunder:hover {
          background-color: var(--krem-gelap);
        }

        /* Garis pemisah bergaya batik */
        .divider-jawa {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 2rem;
        }
        .divider-jawa span {
          color: var(--emas);
          font-size: 0.7rem;
        }
        .divider-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(to right, var(--emas), transparent);
          max-width: 80px;
        }
      `}</style>

      <section className="hero-jawa w-full">
        <div className="max-w-6xl mx-auto px-8 py-28 w-full relative z-10">

          {/* Label */}
          <div className="hero-label mb-8">
            Frontend · UI/UX Designer
          </div>

          {/* Heading */}
          <h1 className="hero-heading text-5xl lg:text-7xl mb-14">
            Halo, Saya<br />
            <span className="hero-heading-italic">Lutfi Yuda</span><br />
            Pratama
          </h1>

          {/* Content row */}
          <div className="flex flex-col lg:flex-row items-start gap-16 mb-14">

            {/* Foto */}
            <div className="flex-shrink-0">
              <div className="foto-frame">
                <div className="corner-ornament corner-tl" />
                <div className="corner-ornament corner-tr" />
                <div className="corner-ornament corner-bl" />
                <div className="corner-ornament corner-br" />
                <img
                  src={picture}
                  className="foto-img w-44 h-44 lg:w-60 lg:h-60 object-cover"
                  alt="Lutfi Yuda Pratama"
                />
              </div>
              {/* Tulisan bawah foto */}
              <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                <p style={{
                  fontFamily: "'Crimson Text', Georgia, serif",
                  fontStyle: 'italic',
                  fontSize: '0.8rem',
                  letterSpacing: '0.12em',
                  color: '#a07040',
                  textTransform: 'uppercase'
                }}>
                  ✦ Yogyakarta, Indonesia ✦
                </p>
              </div>
            </div>

            {/* Bio */}
            <div className="max-w-lg pt-2">
              <div className="bio-container">
                <p className="bio-text">
                  Saya adalah seorang siswa tingkat akhir yang memiliki minat besar dalam pengembangan web,
                  terutama dalam pengembangan <span className="bio-highlight">frontend dan UI/UX</span>.
                </p>
                <p className="bio-text mt-4">
                  Saya memiliki pengalaman dalam menggunakan berbagai teknologi frontend seperti{' '}
                  <span className="bio-highlight">HTML, CSS, JavaScript, React,</span>{' '}
                  dan <span className="bio-highlight">Tailwind CSS</span>.
                </p>
              </div>
            </div>

          </div>

          {/* Divider ornamen */}
          <div className="divider-jawa">
            <div className="divider-line" />
            <span>✦ ◆ ✦</span>
          </div>

          {/* CTA */}
          <div className="flex gap-4 flex-wrap">
            <a href="#projects" className="btn-utama">
              Lihat Projects <span>→</span>
            </a>
            <a href="#contact" className="btn-sekunder">
              Hubungi Saya
            </a>
          </div>

        </div>
      </section>
    </>
  )
}

export default Hero