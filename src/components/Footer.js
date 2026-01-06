import { Instagram, Twitter, Linkedin, Github, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="pt-24 pb-10 border-t border-white/10" style={{backgroundColor: '#050505'}}>
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9" style={{color: '#00f2ff'}}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2a10 10 0 1 0 10 10H12V2Z" />
                <path d="M12 12L2.1 12c.5-4.4 3.9-7.8 8.3-8.3V12Z" />
                <path d="M12 12l9.9 0c-.5 4.4-3.9 7.8-8.3 8.3V12Z" />
              </svg>
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase" style={{color: '#00f2ff'}}>Hackspiration '25</span>
          </div>
          <p className="text-white/60 text-[15px] max-w-sm leading-relaxed font-medium">
            25-hours of hack, hustle, and win.
          </p>
        </div>

        <div className="space-y-8">
          <h3 className="font-black text-xl uppercase tracking-wider" style={{color: '#00f2ff'}}>Quick Links</h3>
          <ul className="space-y-4 text-white/60 text-base font-medium">
            <li>
              <button className="hover:transition-colors bg-transparent border-0 text-white/60 hover:text-cyan-400">
                About
              </button>
            </li>
            <li>
              <button className="hover:transition-colors bg-transparent border-0 text-white/60 hover:text-cyan-400">
                Sponsors
              </button>
            </li>
            <li>
              <button className="hover:transition-colors bg-transparent border-0 text-white/60 hover:text-cyan-400">
                Timeline
              </button>
            </li>
            <li>
              <button className="hover:transition-colors bg-transparent border-0 text-white/60 hover:text-cyan-400">
                FAQ
              </button>
            </li>
          </ul>
        </div>

        <div className="space-y-8">
          <h3 className="font-black text-xl uppercase tracking-wider" style={{color: '#00f2ff'}}>Follow Us</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-5" style={{color: '#00f2ff'}}>
              <a href="#" className="hover:text-white transition-all hover:scale-110 flex items-center gap-2">
                <Twitter size={20} />
                <span className="text-white/60 text-sm font-medium hover:text-cyan-400">Twitter</span>
              </a>
            </div>
            <div className="flex items-center gap-5" style={{color: '#00f2ff'}}>
              <a href="#" className="hover:text-white transition-all hover:scale-110 flex items-center gap-2">
                <Instagram size={20} />
                <span className="text-white/60 text-sm font-medium hover:text-cyan-400">Instagram</span>
              </a>
            </div>
            <div className="flex items-center gap-5" style={{color: '#00f2ff'}}>
              <a href="#" className="hover:text-white transition-all hover:scale-110 flex items-center gap-2">
                <Linkedin size={20} />
                <span className="text-white/60 text-sm font-medium hover:text-cyan-400">LinkedIn</span>
              </a>
            </div>
            <div className="flex items-center gap-5" style={{color: '#00f2ff'}}>
              <a href="#" className="hover:text-white transition-all hover:scale-110 flex items-center gap-2">
                <Github size={20} />
                <span className="text-white/60 text-sm font-medium hover:text-cyan-400">Discord</span>
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="font-black text-xl uppercase tracking-wider" style={{color: '#00f2ff'}}>Contact</h3>
          <div className="space-y-4 text-white/60 text-sm font-medium">
            <div className="flex items-start gap-3">
              <Mail size={16} className="mt-1" style={{color: '#00f2ff'}} />
              <div>
                <p className="text-white/80">Email:</p>
                <a href="mailto:mlsc@vit.edu" className="hover:text-cyan-400 transition-colors">
                  mlsc@vit.edu
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={16} className="mt-1" style={{color: '#00f2ff'}} />
              <div className="space-y-1">
                <div>
                  <p className="text-white/80">Samiksha Solanke:</p>
                  <a href="tel:+917058654634" className="hover:text-cyan-400 transition-colors">
                    +91 70586 54634
                  </a>
                </div>
                <div>
                  <p className="text-white/80">Ishaan Chepurwar:</p>
                  <a href="tel:+917796696851" className="hover:text-cyan-400 transition-colors">
                    +91 77966 96851
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={16} className="mt-1" style={{color: '#00f2ff'}} />
              <div>
                <p className="text-white/80">Address:</p>
                <p className="hover:text-cyan-400 transition-colors">
                  VIT Pune Campus, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-10 text-center text-white/40 text-[11px] font-bold tracking-[0.3em] uppercase">
        © 2025 Hackspiration. All rights reserved.
      </div>
    </footer>
  )
}