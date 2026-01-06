export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="flex items-center gap-3">
        <img 
          src="/images/logo.webp" 
          alt="Hackspiration Logo" 
          className="w-10 h-10 object-contain"
        />
        <span className="text-2xl font-black tracking-tighter uppercase" style={{color: '#00f2ff'}}>Hackspiration</span>
      </div>

      <div className="hidden xl:flex items-center gap-10 text-[13px] font-bold uppercase tracking-wider text-white">
        <button className="pb-0.5 bg-transparent border-0 border-b-2" style={{color: '#00f2ff', borderColor: '#00f2ff'}}>
          Home
        </button>
        <button className="hover:transition-colors bg-transparent border-0 text-white" style={{'&:hover': {color: '#00f2ff'}}}>
          Tracks & Prizes
        </button>
        <button className="hover:transition-colors bg-transparent border-0 text-white" style={{'&:hover': {color: '#00f2ff'}}}>
          Schedule
        </button>
        <button className="hover:transition-colors bg-transparent border-0 text-white" style={{'&:hover': {color: '#00f2ff'}}}>
          Teams & Past Events
        </button>
        <button className="hover:transition-colors leading-tight bg-transparent border-0 text-white" style={{'&:hover': {color: '#00f2ff'}}}>
          Submission & Gallery
        </button>
        <button className="hover:transition-colors leading-tight bg-transparent border-0 text-white" style={{'&:hover': {color: '#00f2ff'}}}>
          Sponsors & FAQ
        </button>
      </div>

      <div className="flex items-center gap-4">
        <button className="hidden md:flex border-2 px-6 py-2 rounded-md bg-transparent font-bold text-sm transition-colors" style={{borderColor: '#00f2ff', color: '#00f2ff'}}>
          Join Community
        </button>
        <button className="font-bold rounded-md shadow-neon-cyan px-7 py-2 text-sm transition-colors" style={{backgroundColor: '#00f2ff', color: '#000000'}}>
          Register Now
        </button>
      </div>
    </nav>
  )
}