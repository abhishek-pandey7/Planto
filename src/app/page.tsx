import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import TrendyPlants from '@/components/sections/TrendyPlants';
import TopSelling from '@/components/sections/TopSelling';
import BestO2 from '@/components/sections/BestO2';
import Reviews from '@/components/sections/Reviews';
import Newsletter from '@/components/sections/Newsletter';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative bg-[#111612]">
      <Navbar />
      
      {/* Fixed Background Image for top sections */}
      <div className="fixed top-0 left-0 w-full h-screen z-0 opacity-70">
        <Image 
          src="/hero-laptop.png" 
          alt="Background Plant" 
          fill 
          className="object-cover object-center"
          priority
        />
        {/* Subtle gradient to enhance text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#111612]/20 via-transparent to-[#111612]/60" />
      </div>

      {/* Content wrapper with transparent background for Hero & TrendyPlants */}
      <div className="relative z-10 w-full">
        <Hero />
        <TrendyPlants />
      </div>

      {/* Lower sections wrapper with smooth gradient transition */}
      <div className="relative z-20 w-full flex flex-col">
        {/* The transition gradient zone that scrolls up over the fixed background */}
        <div className="h-16 md:h-24 bg-gradient-to-b from-transparent to-[#111612]" />
        
        {/* The solid content block holding the rest of the site */}
        <div className="bg-[#111612] w-full">
          <TopSelling />
          <Reviews />
          <BestO2 />
          <Newsletter />
          <Footer />
        </div>
      </div>
    </main>
  );
}
