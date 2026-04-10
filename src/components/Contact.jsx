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

        <div className="flex flex-wrap gap-3">

          <a href="mailto:Lutfiyudapratama125@gmail.com" className="group inline-flex items-center gap-3 bg-gray-50 hover:bg-gray-900 border border-gray-200 hover:border-gray-900 px-5 py-3 rounded-xl transition-all duration-200">
            <span className="text-sm font-medium text-gray-600 group-hover:text-white transition-colors">
              Lutfiyudapratama125@gmail.com
            </span>
          </a>

          <a href="https://github.com/Lutfiyudapratama" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 bg-gray-50 hover:bg-gray-900 border border-gray-200 hover:border-gray-900 px-5 py-3 rounded-xl transition-all duration-200">
            <span className="text-sm font-medium text-gray-600 group-hover:text-white transition-colors">
              GitHub
            </span>
          </a>

        </div>
      </div>
    </section>
  )
}

export default Contact