"use client";
import {
  animationParagraph,
  charAnimation,
  fadeAnimation,
  PPAboutAnimation,
  setupTextHoverEffect,
} from "@/hooks/useGsapAnimation";
import CryptoCurrencyFooter from "@/layouts/footers/CryptoCurrencyFooter";
import CryptoCurrencyHeader from "@/layouts/headers/CryptoCurrencyHeader";
import { useCursorAndBackground } from "@/hooks/useCursorAndBackground";
import BackToTop from "@/components/shared/BackToTop/BackToTop";
import AboutMeHero from "@/components/hero-banner/AboutMeHero";
import AboutService from "@/components/service/AboutService";
import AboutMeBrand from "@/components/brand/AboutMeBrand";
import useScrollSmooth from "@/hooks/useScrollSmooth";
import AboutMain from "@/components/about/AboutMain";
import { useGSAP } from "@gsap/react";
import React from "react";
// import "@/styles/menu-active.scss";

const AboutMeMain = () => {
  console.log("AboutMeMain component mounted");
  // Initialize custom cursor and optional background styles
  useCursorAndBackground();

  // Enable smooth scroll animations
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      setupTextHoverEffect();
      animationParagraph();
      PPAboutAnimation();
      fadeAnimation();
      charAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <>
      <div id="magic-cursor" className="cursor-bg-yellow">
        <div id="ball"></div>
      </div>
      {/* Global Components */}
      <BackToTop />
      <CryptoCurrencyHeader />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <div className="pp-top-wrap">
              <AboutMeHero />
              <AboutMeBrand />
            </div>
            <AboutMain />
            <AboutService />
          </main>
          <CryptoCurrencyFooter />
        </div>
      </div>
    </>
  );
};

export default AboutMeMain;
