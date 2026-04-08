import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Projects from "../components/Project"
import Contact from "../components/Contact"
 
function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home