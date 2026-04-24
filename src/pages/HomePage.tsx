import { Link } from 'react-router-dom';

const HERO_IMAGE = '/anhbia.jpg';

function DefLogoMark() {
  return (
    <svg viewBox="0 0 100 100" className="w-24 h-24 mx-auto" fill="none">
      {/* Outer D curve — visually doubles as the ring */}
      <path
        d="M32 10 C32 10 90 10 90 50 C90 90 32 90 32 90 L32 10 Z"
        stroke="white"
        strokeWidth="4.5"
        fill="none"
        strokeLinejoin="round"
      />
      {/* Inner D echo */}
      <path
        d="M32 26 C32 26 70 26 70 50 C70 74 32 74 32 74"
        stroke="white"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      {/* Left spine */}
      <line x1="32" y1="10" x2="32" y2="90" stroke="white" strokeWidth="4.5" strokeLinecap="round" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <section className="relative h-screen min-h-[500px] overflow-hidden flex flex-col items-center justify-center">
      {/* Background image */}
      <img
        src={HERO_IMAGE}
        alt="DEF Design Studio"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
       <div className="flex items-center justify-center gap-6">
 
 <img
  src="/LOGO trang.png"
  alt="Orange Moon Logo"
   className="w-75 h-75 object-contain bg-transparent"
/>
</div>

        <div className="mt-0">
          <p className="text-[2.5rem] md:text-[3.5rem] text-white font-light tracking-wide">
            <span className="font-bold">ORANGE MOON </span>
          </p>
          <p className="text-sm tracking-[0.2em] text-stone-300 mt-2">
            Architecture | Interior | Furniture
          </p>
        </div>
        <div className="mt-2 flex gap-1 w-full max-w-md">

</div>
      </div>

      {/* Down arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 animate-bounce">
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
