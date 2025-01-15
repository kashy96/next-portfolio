"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "../components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function Navbar({
  scrollToSection,
  aboutRef,
  servicesRef,
  skillsRef,
  resumeRef,
  portfolioRef,
  contactRef,
}: {
  scrollToSection: (ref: React.RefObject<HTMLElement | null>) => void;
  aboutRef: React.RefObject<HTMLElement | null>;
  servicesRef: React.RefObject<HTMLElement | null>;
  skillsRef: React.RefObject<HTMLElement | null>;
  resumeRef: React.RefObject<HTMLElement | null>;
  portfolioRef: React.RefObject<HTMLElement | null>;
  contactRef: React.RefObject<HTMLElement | null>;
}) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed inset-x-0 mx-auto z-50")}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="About" onClick={() => scrollToSection(aboutRef)} />
        <MenuItem setActive={setActive} active={active} item="Services" onClick={() => scrollToSection(servicesRef)} />
        <MenuItem setActive={setActive} active={active} item="Skills" onClick={() => scrollToSection(skillsRef)} />
        <MenuItem setActive={setActive} active={active} item="Resume" onClick={() => scrollToSection(resumeRef)} />
        <MenuItem setActive={setActive} active={active} item="Portfolio" onClick={() => scrollToSection(portfolioRef)} />
        <MenuItem setActive={setActive} active={active} item="Contact" onClick={() => scrollToSection(contactRef)} />
      </Menu>
    </div>
  );
}
