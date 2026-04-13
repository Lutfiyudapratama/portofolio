function Contact() {
  return (
    <>
      <style>{`
        .contact-link {
          transition: background 0.22s ease, border-color 0.22s ease, transform 0.15s ease, box-shadow 0.22s ease;
        }
        .contact-link:hover {
          background: #111827;
          border-color: #111827;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.15);
        }
        .contact-link:hover .contact-link-text {
          color: #fff;
        }
        .contact-link:hover .contact-link-icon {
          color: #d1d5db;
        }
        .contact-link:active {
          transform: translateY(0);
        }

        .contact-fade {
          animation: fadeUp 0.6s ease both;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section id="contact" className="w-full bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-24 contact-fade">

          <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">
            Contact
          </p>

          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight mb-6">
            Hubungi Saya
          </h2>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3">

            <a
              href="mailto:Lutfiyudapratama125@gmail.com"
              className="contact-link group inline-flex items-center gap-3 bg-gray-50 border border-gray-200 px-5 py-3 rounded-xl w-full sm:w-auto"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                className="contact-link-icon text-gray-400 flex-shrink-0 transition-colors duration-200">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <polyline points="2,4 12,13 22,4"/>
              </svg>
              <span className="contact-link-text text-sm font-medium text-gray-600 transition-colors duration-200 truncate">
                Lutfiyudapratama125@gmail.com
              </span>
            </a>

            <a
              href="https://github.com/Lutfiyudapratama"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link group inline-flex items-center gap-3 bg-gray-50 border border-gray-200 px-5 py-3 rounded-xl w-full sm:w-auto"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"
                className="contact-link-icon text-gray-400 flex-shrink-0 transition-colors duration-200">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              <span className="contact-link-text text-sm font-medium text-gray-600 transition-colors duration-200">
                GitHub
              </span>
            </a>

          </div>
        </div>
      </section>
    </>
  )
}

export default Contact