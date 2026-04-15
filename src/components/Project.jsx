import { useState, useEffect, useRef } from 'react'
import pictureex1 from '../assets/expose/expose1.png'
import pictureex2 from '../assets/expose/expose2.png'
import pictureex3 from '../assets/expose/expose3.png'
import pictureex4 from '../assets/expose/expose4.png'
import pictureex5 from '../assets/expose/expose5.png'
import pictureex6 from '../assets/expose/expose6.png'
import picturef1 from '../assets/financeapp/f1.jpg'
import picturef2 from '../assets/financeapp/f2.jpg'
import picturef3 from '../assets/financeapp/f3.jpg'
import picturef4 from '../assets/financeapp/f4.jpg'
import picturef5 from '../assets/financeapp/f5.png'
import picturef6 from '../assets/financeapp/f6.png'
import picturef7 from '../assets/financeapp/f7.png'

function Project() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [imgOpacity, setImgOpacity] = useState(1)
  const [touchStartX, setTouchStartX] = useState(null)

  const projects = [
    // {
    //   title: "Website Toko Listrik",
    //   desc: "Website ini dibuat untuk memudahkan pelanggan untuk memesan produk dari toko electronic.",
    //   tags: ["laravel", "bootstrap", "mysql"],
    //   images: [picturetl, picturet2, picturet3, picturet6, picturet5, picturet4, picturet9, picturet7, picturet8],
    //   year: "2025",
    // },
    {
      title: "Website Expose FC",
      desc: "Pengembangan fitur merchandise untuk website Expose FC, dengan fitur menampilkan produk, dan checkout.",
      tags: ["laravel", "bootstrap", "mysql"],
      images: [pictureex1, pictureex2, pictureex3, pictureex4, pictureex5, pictureex6],
      year: "2025",
    },
    {
      title: "Website Catatan Keuangan",
      desc: "Website catatan keuangan untuk membantu pengguna mengelola keuangan pribadi dengan visualisasi data.",
      tags: ["laravel", "tailwind css", "mysql"],
      images: [picturef1, picturef2, picturef3, picturef4, picturef6, picturef5, picturef7],
      year: "2024",
    },
  ]

  // Modal open/close with animation
  const openModal = (project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
    setImgOpacity(1)
    setModalVisible(true)
    document.body.style.overflow = 'hidden'
    requestAnimationFrame(() => requestAnimationFrame(() => setIsOpen(true)))
  }

  const closeModal = () => {
    setIsOpen(false)
    setTimeout(() => {
      setModalVisible(false)
      setSelectedProject(null)
      document.body.style.overflow = ''
    }, 300)
  }

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (!modalVisible) return
      if (e.key === 'Escape') closeModal()
      if (e.key === 'ArrowRight') changeImage('next')
      if (e.key === 'ArrowLeft') changeImage('prev')
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [modalVisible, selectedProject, currentImageIndex])

  const changeImage = (dir) => {
    if (!selectedProject) return
    setImgOpacity(0)
    setTimeout(() => {
      setCurrentImageIndex(prev => {
        const len = selectedProject.images.length
        return dir === 'next' ? (prev + 1) % len : (prev - 1 + len) % len
      })
      setImgOpacity(1)
    }, 180)
  }

  const goToImage = (i) => {
    if (i === currentImageIndex) return
    setImgOpacity(0)
    setTimeout(() => {
      setCurrentImageIndex(i)
      setImgOpacity(1)
    }, 180)
  }

  // Touch swipe support
  const onTouchStart = (e) => setTouchStartX(e.touches[0].clientX)
  const onTouchEnd = (e) => {
    if (touchStartX === null) return
    const diff = touchStartX - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) changeImage(diff > 0 ? 'next' : 'prev')
    setTouchStartX(null)
  }

  return (
    <>
      <style>{`
        .project-card {
          transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }
        .project-card:hover {
          background: #27272a;
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(0,0,0,0.35);
        }
        .project-card:active { transform: translateY(0) scale(0.985); }

        .modal-backdrop {
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .modal-backdrop.open { opacity: 1; }

        .modal-panel {
          opacity: 0;
          transform: translateY(24px) scale(0.97);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        @media (max-width: 639px) {
          .modal-panel {
            transform: translateY(100%);
          }
        }
        .modal-panel.open {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .modal-img {
          transition: opacity 0.18s ease;
        }

        .nav-arrow {
          transition: background 0.2s ease, transform 0.15s ease, opacity 0.2s ease;
          opacity: 0.8;
        }
        .nav-arrow:hover { opacity: 1; transform: translateY(-50%) scale(1.08); }
        .nav-arrow:active { transform: translateY(-50%) scale(0.95); }

        .dot-btn {
          transition: all 0.25s ease;
          cursor: pointer;
        }

        .close-btn {
          transition: background 0.2s ease, transform 0.15s ease;
        }
        .close-btn:hover { transform: scale(1.1); }
        .close-btn:active { transform: scale(0.9); }

        .tutup-btn {
          transition: background 0.2s ease, transform 0.15s ease;
        }
        .tutup-btn:hover { background: #f4f4f5; }
        .tutup-btn:active { transform: scale(0.97); }

        .tag-pill {
          transition: background 0.2s ease, border-color 0.2s ease;
        }

        .section-fade-in {
          animation: fadeUp 0.6s ease both;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section id="projects" className="w-full bg-zinc-900 relative overflow-hidden">

        {/* Subtle texture */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />

        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-24 relative z-10 section-fade-in">

          {/* Section header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-amber-400" />
            <p className="text-xs text-amber-400 tracking-widest uppercase font-semibold">Projects</p>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-3"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Projects Saya
          </h2>
          <p className="text-zinc-500 text-sm mb-8 sm:mb-12">Klik project untuk melihat detail & screenshot</p>

          {/* Project grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <div
                key={index}
                onClick={() => openModal(project)}
                className="project-card bg-zinc-900 p-5 sm:p-6 cursor-pointer flex flex-col gap-4 rounded-2xl border border-zinc-700/50"
              >
                {/* Top row */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-600 transition-colors duration-200 group-hover:text-amber-400">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-xs font-mono text-zinc-600">{project.year}</span>
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-zinc-100 leading-snug">
                  {project.title}
                </h3>

                {/* Desc */}
                <p className="text-sm text-zinc-500 leading-relaxed line-clamp-3 flex-1">
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="tag-pill text-xs font-mono text-zinc-400 bg-zinc-800 border border-zinc-700 px-2.5 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom row */}
                <div className="flex items-center justify-between">
                  <div className="w-2 h-2 rounded-full bg-zinc-700 transition-colors duration-200" />
                  <span className="text-zinc-600 transition-all duration-200 text-sm">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== MODAL ===== */}
        {modalVisible && selectedProject && (
          <div
            className={`modal-backdrop fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 lg:p-6 ${isOpen ? 'open' : ''}`}
            onClick={closeModal}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

            {/* Panel */}
            <div
              className={`modal-panel relative bg-zinc-900 border border-zinc-700/80 w-full sm:max-w-md lg:max-w-lg sm:rounded-2xl overflow-hidden shadow-2xl flex flex-col ${isOpen ? 'open' : ''}`}
              style={{ maxHeight: '95dvh' }}
              onClick={(e) => e.stopPropagation()}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >

              {/* Image area */}
              <div className="relative w-full bg-zinc-950 flex-shrink-0 select-none">
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={`${selectedProject.title} - ${currentImageIndex + 1}`}
                  className="modal-img w-full h-auto object-contain block"
                  style={{ maxHeight: '55vh', opacity: imgOpacity }}
                  draggable={false}
                />

                {/* Gradient overlay bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(24,24,27,0.6), transparent)' }} />

                {/* Close */}
                <button
                  onClick={closeModal}
                  className="close-btn absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-zinc-900/80 text-white border border-zinc-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>

                {/* Prev / Next */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={() => changeImage('prev')}
                      className="nav-arrow absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-zinc-900/75 text-white border border-zinc-700"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6" />
                      </svg>
                    </button>
                    <button
                      onClick={() => changeImage('next')}
                      className="nav-arrow absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-zinc-900/75 text-white border border-zinc-700"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </button>
                  </>
                )}

                {/* Counter */}
                {selectedProject.images.length > 1 && (
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-zinc-900/80 text-white text-xs px-3 py-1 rounded-full font-mono border border-zinc-700 tracking-widest whitespace-nowrap">
                    {currentImageIndex + 1} / {selectedProject.images.length}
                  </div>
                )}
              </div>

              {/* Dot indicators */}
              {selectedProject.images.length > 1 && (
                <div className="flex justify-center gap-1.5 pt-3 px-5 flex-wrap">
                  {selectedProject.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goToImage(i)}
                      className={`dot-btn rounded-full ${
                        i === currentImageIndex
                          ? 'w-5 h-1.5 bg-amber-400'
                          : 'w-1.5 h-1.5 bg-zinc-600 hover:bg-zinc-400'
                      }`}
                    />
                  ))}
                </div>
              )}

              {/* Content */}
              <div className="px-4 sm:px-5 pt-3 pb-4 sm:pb-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <h3
                      className="text-base font-bold text-white leading-tight"
                      style={{ fontFamily: "'Georgia', serif" }}
                    >
                      {selectedProject.title}
                    </h3>
                    {selectedProject.year && (
                      <p className="text-xs text-zinc-500 mt-0.5 font-mono">{selectedProject.year}</p>
                    )}
                  </div>
                  {selectedProject.status && (
                    <span className="flex-shrink-0 flex items-center gap-1.5 text-xs font-medium text-emerald-400 bg-emerald-950 border border-emerald-800 px-2.5 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                      {selectedProject.status}
                    </span>
                  )}
                </div>

                <div className="border-t border-zinc-800 mb-2 sm:mb-3" />

                <p className="text-sm text-zinc-400 leading-relaxed mb-3">
                  {selectedProject.fullDesc || selectedProject.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {selectedProject.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-mono text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={closeModal}
                  className="tutup-btn w-full bg-white text-zinc-900 text-sm font-bold px-4 py-2 sm:py-2.5 rounded-xl tracking-wide"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  )
}

export default Project