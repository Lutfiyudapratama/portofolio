import { useState, useEffect } from 'react'
import picturetl from '../assets/toko-listrik/Toko-Listrik1.png'
import picturet2 from '../assets/toko-listrik/Toko-Listrik2.png'
import picturet3 from '../assets/toko-listrik/Toko-Listrik3.png'
import picturet4 from '../assets/toko-listrik/Toko-Listrik4.png'
import picturet5 from '../assets/toko-listrik/Toko-Listrik5.png'
import picturet6 from '../assets/toko-listrik/Toko-Listrik6.png'
import picturet7 from '../assets/toko-listrik/Toko-Listrik7.png'
import picturet8 from '../assets/toko-listrik/Toko-Listrik8.png'
import picturet9 from '../assets/toko-listrik/Toko-Listrik9.png'
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
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const projects = [
    {
      title: "Website Toko Listrik",
      desc: "Website ini dibuat untuk memudahkan pelanggan untuk memesan produk dari toko electronic.",
      tags: ["laravel", "bootstrap", "mysql"],
      images: [picturetl, picturet2, picturet3, picturet6, picturet5, picturet4, picturet9, picturet7, picturet8],
      year: "2025",
    },
    {
      title: "Website Expose FC",
      desc: "Pengembangan fitur merchandise untuk website Expose FC, dengan fitur menampilkan produk, keranjang, dan checkout.",
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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
    }
    if (isModalOpen) window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isModalOpen, selectedProject, currentImageIndex])

  const openModal = (project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  const changeImage = (newIndex) => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentImageIndex(newIndex)
    setTimeout(() => setIsAnimating(false), 300)
  }

  const nextImage = () => {
    if (selectedProject) {
      changeImage((currentImageIndex + 1) % selectedProject.images.length)
    }
  }

  const prevImage = () => {
    if (selectedProject) {
      changeImage((currentImageIndex - 1 + selectedProject.images.length) % selectedProject.images.length)
    }
  }

  return (
    <section id="projects" className="w-full bg-zinc-900 relative overflow-hidden">

      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-6xl mx-auto px-8 py-24 relative z-10">

        {/* Section header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-amber-400" />
          <p className="text-xs text-amber-400 tracking-widest uppercase font-semibold">Projects</p>
        </div>
        <h2
          className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-3"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Projects Saya
        </h2>
        <p className="text-zinc-500 text-sm mb-12">Klik project untuk melihat detail & screenshot</p>

        {/* Project grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-700/40 border border-zinc-700/50 rounded-2xl overflow-hidden">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => openModal(project)}
              className="group bg-zinc-900 hover:bg-zinc-800 p-6 cursor-pointer transition-all duration-200 flex flex-col gap-4"
            >
              {/* Top row */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-600 group-hover:text-amber-400 transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-xs font-mono text-zinc-600">{project.year}</span>
              </div>

              {/* Title */}
              <h3 className="text-sm font-bold text-zinc-100 group-hover:text-white transition-colors leading-snug">
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
                    className="text-xs font-mono text-zinc-400 bg-zinc-800 group-hover:bg-zinc-700 border border-zinc-700 px-2.5 py-0.5 rounded-full transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom row */}
              <div className="flex items-center justify-between">
                <div className="w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-amber-400 transition-colors" />
                <span className="text-zinc-600 group-hover:text-amber-400 group-hover:translate-x-1 transition-all duration-200 text-sm">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== MODAL ===== */}
      {isModalOpen && selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6"
          onClick={closeModal}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

          {/* Modal Panel */}
          <div
            className="relative bg-zinc-900 border border-zinc-700 w-full sm:max-w-2xl sm:rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[95dvh] sm:max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Image Carousel */}
            <div className="relative w-full aspect-video bg-zinc-950 flex-shrink-0 overflow-hidden">
              <img
                key={currentImageIndex}
                src={selectedProject.images[currentImageIndex]}
                alt={`${selectedProject.title} - ${currentImageIndex + 1}`}
                className="w-full h-full object-cover transition-opacity duration-300"
                style={{ opacity: isAnimating ? 0.3 : 1 }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-zinc-950/30 pointer-events-none" />

              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-zinc-900/70 hover:bg-zinc-800 text-white backdrop-blur-sm transition-all border border-zinc-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              {/* Prev / Next */}
              {selectedProject.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-zinc-900/70 hover:bg-zinc-800 text-white backdrop-blur-sm transition-all border border-zinc-700 active:scale-95"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-zinc-900/70 hover:bg-zinc-800 text-white backdrop-blur-sm transition-all border border-zinc-700 active:scale-95"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </>
              )}

              {/* Counter pill */}
              {selectedProject.images.length > 1 && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-zinc-900/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-mono border border-zinc-700 tracking-widest">
                  {currentImageIndex + 1} / {selectedProject.images.length}
                </div>
              )}
            </div>

            {/* Dot indicators */}
            {selectedProject.images.length > 1 && (
              <div className="flex justify-center gap-1.5 pt-3 pb-0 px-6">
                {selectedProject.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => changeImage(i)}
                    className={`rounded-full transition-all duration-200 ${
                      i === currentImageIndex
                        ? 'w-5 h-1.5 bg-amber-400'
                        : 'w-1.5 h-1.5 bg-zinc-600 hover:bg-zinc-400'
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Content */}
            <div className="px-6 pt-4 pb-6 overflow-y-auto">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <h3
                    className="text-lg font-bold text-white leading-tight"
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

              <div className="border-t border-zinc-800 mb-4" />

              <p className="text-sm text-zinc-400 leading-relaxed mb-4">{selectedProject.fullDesc || selectedProject.desc}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-mono text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={closeModal}
                  className="flex-1 bg-white hover:bg-zinc-100 text-zinc-900 text-sm font-bold px-4 py-2.5 rounded-xl transition-colors active:scale-95 tracking-wide"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Project