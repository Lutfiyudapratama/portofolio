function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">

        <h1 className="text-base font-semibold tracking-tight text-gray-900">
          MyPortfolio
        </h1>

        <ul className="flex gap-1 list-none">
          <li>
            <a href="#about" className="text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors">
              Contact
            </a>
          </li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar