import picture from '../assets/lutfi.jpg'
function Hero() {
  return (
    <section className="flex items-center bg-white">
      <div className="max-w-6xl mx-auto px-8 py-24 w-full">

        <p className="text-sm text-gray-400 mb-4 tracking-wide">
          Web Developer · Game Developer
        </p>

        <h1 className="text-6xl font-semibold text-gray-900 tracking-tight leading-tight mb-6">
          Halo, Saya Ufiii
        </h1>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mb-8">
          <img
            src={picture}
            className="w-15 h-15 lg:w-60 lg:h-60 box-border border-4 rounded-full"
            alt="picture"
          />
          <div className="max-w-xl">
            <p className="text-gray-500 text-lg leading-relaxed">
              Seorang developer yang senang membangun web dan game multiplayer
              yang fungsional dan menyenangkan untuk digunakan.
            </p>
          </div>

        </div>

        <div className="flex gap-3">
          <a
            href="#projects"
            className="bg-gray-900 text-white text-sm px-5 py-2.5 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Lihat Projects
          </a>
          <a
            href="#contact"
            className="bg-white text-gray-700 text-sm px-5 py-2.5 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Hubungi Saya
          </a>
        </div>

      </div>
    </section>
  )
}

export default Hero