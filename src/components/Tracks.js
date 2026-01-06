import { Cpu, Shield, Leaf, Gamepad2, Lightbulb, Accessibility } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { useIntersectionObserver } from "../hooks/useScrollAnimation"
import { useEffect, useRef } from "react"

const tracks = [
  {
    title: "Artificial Intelligence & ML",
    description:
      "Develop intelligent systems and machine learning models for real-world challenges, from predictive analytics to creative AI.",
    icon: Cpu,
    color: "text-cyan-400",
    glowColor: "hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]",
  },
  {
    title: "Cybersecurity & Blockchain",
    description:
      "Innovate secure solutions, decentralized applications, and explore the future of digital trust and privacy.",
    icon: Shield,
    color: "text-purple-400",
    glowColor: "hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]",
  },
  {
    title: "Sustainable Tech & IoT",
    description:
      "Build smart, eco-friendly devices and platforms that contribute to a sustainable future and connected living.",
    icon: Leaf,
    color: "text-green-400",
    glowColor: "hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]",
  },
  {
    title: "Gaming & Entertainment",
    description: "Create immersive gaming experiences, interactive entertainment, and innovative digital content.",
    icon: Gamepad2,
    color: "text-pink-400",
    glowColor: "hover:shadow-[0_0_30px_rgba(244,114,182,0.3)]",
  },
  {
    title: "Open Innovation",
    description: "Unleash your creativity on any problem you deem important. No limits, just groundbreaking ideas.",
    icon: Lightbulb,
    color: "text-yellow-400",
    glowColor: "hover:shadow-[0_0_30px_rgba(250,204,21,0.3)]",
  },
  {
    title: "UI/UX & Accessibility",
    description:
      "Design intuitive, inclusive, and visually stunning user interfaces ensuring technology is for everyone.",
    icon: Accessibility,
    color: "text-blue-400",
    glowColor: "hover:shadow-[0_0_30px_rgba(96,165,250,0.3)]",
  },
]

export function Tracks() {
  const [setHeaderRef, headerVisible] = useIntersectionObserver()
  const [setGridRef, gridVisible] = useIntersectionObserver()
  const cardRefs = useRef([])

  useEffect(() => {
    if (gridVisible) {
      cardRefs.current.forEach((card, index) => {
        if (card) {
          setTimeout(() => {
            card.classList.add('slide-in-up')
          }, index * 100)
        }
      })
    }
  }, [gridVisible])

  return (
    <section id="tracks" className="py-24 px-6 relative overflow-hidden" style={{backgroundColor: '#050505'}}>
      {/* Cyberpunk background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(0,242,255,0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(0,242,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <div 
          ref={setHeaderRef}
          className={`text-center space-y-6 animate-on-scroll ${headerVisible ? 'scale-in' : ''}`}
        >
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-wider" 
              style={{
                color: '#00f2ff',
                textShadow: '0 0 20px rgba(0,242,255,0.5), 0 0 40px rgba(0,242,255,0.3)',
                filter: 'drop-shadow(0 0 10px rgba(0,242,255,0.7))'
              }}>
            Hackathon Tracks
          </h2>
          <div className="w-32 h-1 mx-auto" 
               style={{
                 background: 'linear-gradient(90deg, transparent, #00f2ff, transparent)',
                 boxShadow: '0 0 20px rgba(0,242,255,0.8)'
               }} />
          <p className="text-white/70 text-lg max-w-2xl mx-auto font-medium">
            Choose your battlefield and showcase your skills across diverse technology domains
          </p>
        </div>

        <div 
          ref={setGridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {tracks.map((track, index) => (
            <Card
              key={track.title}
              ref={el => cardRefs.current[index] = el}
              className={`group hover:border-cyan-400/50 transition-all duration-500 hover:-translate-y-3 cursor-pointer ${track.glowColor} border-white/20 hover:border-2 animate-on-scroll`}
              style={{
                background: 'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,242,255,0.05) 100%)',
                backdropFilter: 'blur(20px)',
                opacity: 0,
                transform: 'translateY(50px)'
              }}
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-lg bg-black/30 border border-white/10 group-hover:border-cyan-400/50 transition-all duration-300`}>
                    <track.icon className={`${track.color} h-8 w-8 group-hover:scale-110 transition-transform duration-300`} 
                                style={{filter: 'drop-shadow(0 0 8px currentColor)'}} />
                  </div>
                </div>
                <CardTitle className="text-xl font-black tracking-tight uppercase text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {track.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  {track.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}