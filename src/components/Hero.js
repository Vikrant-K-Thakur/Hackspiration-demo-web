import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"
import { useScrollAnimation } from "../hooks/useScrollAnimation"

export function Hero() {
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 })
  const scrollY = useScrollAnimation()

  useEffect(() => {
    const target = new Date("2024-10-26T09:00:00").getTime()
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = target - now

      if (distance < 0) {
        setTimeLeft({ d: 0, h: 0, m: 0, s: 0 })
        clearInterval(interval)
        return
      }

      setTimeLeft({
        d: Math.floor(distance / (1000 * 60 * 60 * 24)),
        h: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        m: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        s: Math.floor((distance % (1000 * 60)) / 1000),
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const scrollToTracks = () => {
    document.getElementById('tracks')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 parallax"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      >
        <img 
          src="/images/selection.png" 
          alt="Cyberpunk city background" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto flex flex-col items-center gap-4">
        <h1 
          className="text-4xl md:text-7xl lg:text-9xl font-black tracking-[0.15em] text-neon-cyan uppercase slide-in-up" 
          style={{
            color: '#00f2ff',
            animationDelay: '0.2s'
          }}
        >
          HACKSPIRATION
        </h1>

        <p 
          className="text-lg md:text-2xl font-medium tracking-[0.2em] text-white/90 mt-2 slide-in-up"
          style={{
            animationDelay: '0.4s'
          }}
        >
          Hack. Hustle. Win.
        </p>

        <div 
          className="flex gap-4 md:gap-10 text-4xl md:text-7xl font-bold my-6 font-mono tracking-tighter text-neon-cyan scale-in" 
          style={{
            color: '#00f2ff',
            animationDelay: '0.6s'
          }}
        >
          <div className="flex flex-col items-center">
            <span>{String(timeLeft.d).padStart(1, "0")}d</span>
          </div>
          <div className="flex flex-col items-center">
            <span>{String(timeLeft.h).padStart(1, "0")}h</span>
          </div>
          <div className="flex flex-col items-center">
            <span>{String(timeLeft.m).padStart(1, "0")}m</span>
          </div>
          <div className="flex flex-col items-center">
            <span>{String(timeLeft.s).padStart(1, "0")}s</span>
          </div>
        </div>

        <div 
          className="space-y-1 text-white/80 font-medium tracking-wide text-sm md:text-base slide-in-up"
          style={{
            animationDelay: '0.8s'
          }}
        >
          <p>Virtual & In-Person @ Tech Nexus Hub</p>
          <p>October 26-28, 2024</p>
          <p>Starts 9:00 AM EDT</p>
        </div>

        <div 
          className="flex flex-col sm:flex-row gap-5 mt-10 slide-in-up"
          style={{
            animationDelay: '1s'
          }}
        >
          <button className="h-12 px-10 text-base font-bold shadow-neon-cyan rounded-full transition-all hover:scale-105" style={{backgroundColor: '#00f2ff', color: '#000000'}}>
            Register Now
          </button>
          <button className="h-12 px-10 text-base font-bold bg-transparent text-white border-2 rounded-full transition-all hover:scale-105" style={{borderColor: '#ff0055', color: '#ff0055'}}>
            Join Community
          </button>
        </div>
      </div>

      <div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer hover:scale-110 transition-transform"
        onClick={scrollToTracks}
      >
        <ChevronDown className="w-8 h-8" style={{color: '#00f2ff'}} />
      </div>
    </section>
  )
}