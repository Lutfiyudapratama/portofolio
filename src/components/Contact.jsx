function Contact() {
  return (
    <section id="contact" className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-8 py-24">

        <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">
          Contact
        </p>

        <h2 className="text-4xl font-semibold text-gray-900 tracking-tight mb-6">
          Hubungi Saya
        </h2>

        <div className="bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 inline-flex items-center gap-3">
          <svg
            className="w-4 h-4 text-gray-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          <span className="text-sm text-gray-600">
            Lutfiyudapratama125@email.com
          </span>
        </div>

      </div>
    </section>
  )
}

export default Contact