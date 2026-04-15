import picture from '../assets/lutfi.jpg'
import { useState, useEffect } from 'react'

function Hero() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 50)
    return () => clearTimeout(t)
  }, [])

  const handleNavClick = (e, target) => {
    e.preventDefault()
    const el = document.querySelector(target)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <style>{`
        .hero-item {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .hero-item.show {
          opacity: 1;
          transform: translateY(0);
        }
        .hero-item:nth-child(1) { transition-delay: 0.05s; }
        .hero-item:nth-child(2) { transition-delay: 0.15s; }
        .hero-item:nth-child(3) { transition-delay: 0.28s; }
        .hero-item:nth-child(4) { transition-delay: 0.42s; }

        .btn-primary {
          display: inline-block;
          padding: 10px 24px;
          background: #5c3d1e;
          color: #e8d5a3;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-size: 0.8rem;
          transition: background 0.25s ease, transform 0.15s ease, box-shadow 0.25s ease;
        }
        .btn-primary:hover {
          background: #7a5228;
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(92,61,30,0.25);
        }
        .btn-primary:active { transform: translateY(0); }

        .btn-outline {
          display: inline-block;
          padding: 10px 24px;
          border: 1px solid #c8a96e;
          color: #5c3d1e;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-size: 0.8rem;
          transition: border-color 0.25s ease, background 0.25s ease, transform 0.15s ease;
        }
        .btn-outline:hover {
          background: rgba(200,169,110,0.1);
          border-color: #5c3d1e;
          transform: translateY(-1px);
        }
        .btn-outline:active { transform: translateY(0); }

        .hero-photo {
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          border-radius: 6px;
        }
        .hero-photo:hover {
          transform: scale(1.03);
          box-shadow: 0 8px 32px rgba(92,61,30,0.2);
        }
      `}</style>

      <section>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 sm:py-16 lg:py-20">

          <div className={`hero-item ${show ? 'show' : ''}`}>
            <p className="text-xs uppercase tracking-[0.3em] text-[#4a6741] mb-6 sm:mb-8 text-center lg:text-left">
              Frontend · UI/UX Designer
            </p>
          </div>

          <div className={`hero-item ${show ? 'show' : ''}`}>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-[#5c3d1e] leading-tight mb-8 sm:mb-12 text-center lg:text-left">
              Halo, Saya <br />
              <span className="italic text-[#8b5e3c]">Lutfi Yuda Pratama</span>
            </h1>
          </div>

          <div className={`hero-item ${show ? 'show' : ''} flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-10`}>
            <div className="flex-shrink-0 text-center">
              <img
                src={picture}
                className="hero-photo mx-auto w-28 sm:w-36 lg:w-44 h-auto"
                alt="Lutfi"
              />
            </div>

            <div className="max-w-lg text-center lg:text-left">
              <p className="text-base sm:text-lg leading-relaxed text-[#6b4c2a]">
                Saya adalah seorang siswa tingkat akhir yang memiliki minat besar dalam pengembangan web,
                terutama dalam pengembangan <span className="font-semibold italic text-[#5c3d1e]">frontend dan UI/UX</span>.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-[#6b4c2a] mt-4">
                Saya memiliki pengalaman dalam menggunakan berbagai teknologi frontend seperti
                <span className="font-semibold italic text-[#5c3d1e]"> HTML, CSS, JavaScript, React</span>,
                dan <span className="font-semibold italic text-[#5c3d1e]">Tailwind CSS</span>.
              </p>
            </div>
          </div>

          <div className={`hero-item ${show ? 'show' : ''} flex gap-3 sm:gap-4 mt-10 sm:mt-12 flex-wrap justify-center lg:justify-start`}>
            <a href="#projects" className="btn-primary" onClick={(e) => handleNavClick(e, '#projects')}>
              Lihat Projects →
            </a>
            <a href="#contact" className="btn-outline" onClick={(e) => handleNavClick(e, '#contact')}>
              Hubungi Saya
            </a>
          </div>

        </div>
      </section>
    </>
  )
}

export default Hero