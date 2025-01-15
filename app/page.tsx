"use client";

import React, { useRef } from "react";
import { SparklesCore } from "../components/ui/sparkles";
import Image from "next/image";
import kashifPic from "../public/kashif.jpg";
import About from "../components/About";
import Services from "../components/Services";
import { Navbar } from "@/components/Navbar";
import Skills from "../components/Skills";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";
import ContactUs from "../components/ContactUs";
import Footer from "../components/ui/Footer";

export default function Home() {

  const aboutRef = useRef<HTMLDivElement  | null>(null);
  const servicesRef = useRef<HTMLDivElement  | null>(null);
  const skillsRef = useRef<HTMLDivElement  | null>(null);
  const resumeRef = useRef<HTMLDivElement  | null>(null);
  const portfolioRef = useRef<HTMLDivElement  | null>(null);
  const contactRef = useRef<HTMLDivElement  | null>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full">

      <Navbar 
        scrollToSection={scrollToSection} 
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        skillsRef={skillsRef}
        resumeRef={resumeRef}
        portfolioRef={portfolioRef}
        contactRef={contactRef}
      />
     
      <div className="absolute inset-0 w-full h-screen bg-black">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      {/* Content section */}
      <div className="container mx-auto sm-px-[4rem]">
        <div className="h-screen relative w-full flex flex-col items-center justify-center overflow-hidden">
          <Image 
            src={kashifPic} 
            width={180} 
            height={180} 
            className="rounded-full my-7 border-8 border-slate-900"  
            alt="image" />
          
          <div className="flex flex-col gap-5">
            <h2 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
              Hi, I am&nbsp;
              <span className="text-primary">  
                M. Kashif
              </span>
            </h2>
            <p>
            I am a Full Stack Developer with a strong focus on building scalable and efficient web applications.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-[8rem]">
          {/* Sections */}
          <div id="about" ref={aboutRef}><About /></div>
          <div id="services" ref={servicesRef}><Services /></div>
          <div ref={skillsRef}><Skills /></div>
          <div ref={resumeRef}><Resume /></div>
          <div ref={portfolioRef}><Portfolio /></div>
          <div id="contact" ref={contactRef}><ContactUs /></div>
        </div>
       
      </div>
      <Footer />
    </div>
  );
}
