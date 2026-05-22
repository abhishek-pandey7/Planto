import { FacebookLogo, TwitterLogo, LinkedinLogo } from '@phosphor-icons/react/dist/ssr';

export default function Footer() {
  return (
    <footer className="bg-[#1B2316] py-20 border-t border-white/10" id="contact">
      <div className="section-container flex flex-col md:flex-row justify-between gap-16">
        {/* Brand */}
        <div className="flex-1 max-w-sm">
          <a href="#home" className="text-3xl font-bold text-white tracking-wide block mb-6">
            Planto.
          </a>
          <p className="text-[17px] text-white/60 mb-8 leading-relaxed">
            Transform your space with our premium indoor plants. We provide everything you need to create a healthy, vibrant, and beautiful environment.
          </p>
          <h4 className="text-[20px] font-semibold text-white mb-4">Planto © All rights reserved</h4>
        </div>

        {/* Quick Links */}
        <div className="flex-1">
          <h4 className="text-[24px] font-semibold text-white mb-8">Quick Links</h4>
          <ul className="flex flex-col gap-4">
            <li><a href="#home" className="text-[17px] text-white/60 hover:text-white transition-colors">Home</a></li>
            <li><a href="#plants-type" className="text-[17px] text-white/60 hover:text-white transition-colors">Types of Plants</a></li>
            <li><a href="#contact" className="text-[17px] text-white/60 hover:text-white transition-colors">Contact</a></li>
            <li><a href="#privacy" className="text-[17px] text-white/60 hover:text-white transition-colors">Privacy</a></li>
          </ul>
        </div>

        {/* Social */}
        <div className="flex-1">
          <h4 className="text-[24px] font-semibold text-white mb-8">For Every Update.</h4>
          <div className="flex gap-4">
            <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-[#1B2316] hover:bg-[#FFF84E] transition-colors" aria-label="Facebook">
              <FacebookLogo size={24} weight="fill" />
            </a>
            <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-[#1B2316] hover:bg-[#FFF84E] transition-colors" aria-label="Twitter">
              <TwitterLogo size={24} weight="fill" />
            </a>
            <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-[#1B2316] hover:bg-[#FFF84E] transition-colors" aria-label="LinkedIn">
              <LinkedinLogo size={24} weight="fill" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
