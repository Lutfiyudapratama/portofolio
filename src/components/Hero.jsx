import picture from '../assets/lutfi.jpg'
import { useState, useEffect } from 'react'

function Hero() {

const [show, setShow] = useState(false)

useEffect(() => {
  setShow(true)
}, [])

  return (
    <>
<section className={`transition-opacity duration-1000 ${show ? "opacity-100" : "opacity-0"}`}>

<div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-24 ">

<p className="text-xs uppercase tracking-[0.3em] text-[#4a6741] mb-8">
Frontend · UI/UX Designer
</p>

<h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-[#5c3d1e] leading-tight mb-12">
Halo, Saya <br/>
<span className="italic text-[#8b5e3c]">Lutfi Yuda Pratama</span>
</h1>

<div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">

<div className="text-center">
<img
  src={picture}
  className="rounded max-w-[120px] sm:max-w-[150px] lg:max-w-[180px] w-full h-auto"
  alt="Lutfi"
/>

<p className="text-xs mt-6 tracking-[0.15em] italic text-[#a07040]">
</p>
</div>

<div className="max-w-lg text-center lg:text-left">

<p className="text-lg leading-relaxed text-[#6b4c2a]">
Saya adalah seorang siswa tingkat akhir yang memiliki minat besar dalam pengembangan web,
terutama dalam pengembangan <span className="font-semibold italic text-[#5c3d1e]">frontend dan UI/UX</span>.
</p>

<p className="text-lg leading-relaxed text-[#6b4c2a] mt-4">
Saya memiliki pengalaman dalam menggunakan berbagai teknologi frontend seperti
<span className="font-semibold italic text-[#5c3d1e]"> HTML, CSS, JavaScript, React</span>,
dan <span className="font-semibold italic text-[#5c3d1e]">Tailwind CSS</span>.
</p>

</div>

</div>

<div className="flex gap-4 mt-12 flex-wrap justify-center lg:justify-start">

<a href="#projects"
className="px-6 py-3 bg-[#5c3d1e] text-[#e8d5a3] uppercase tracking-widest text-sm">
Lihat Projects →
</a>

<a href="#contact"
className="px-6 py-3 border border-[#c8a96e] text-[#5c3d1e] uppercase tracking-widest text-sm">
Hubungi Saya
</a>

</div>

</div>

</section>
    </>
  )
}

export default Hero