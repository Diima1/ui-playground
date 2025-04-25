import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const initScrollAnimations = () => {
  gsap.timeline({
    scrollTrigger: {
      trigger: "#hero-section",
      scrub: 1,
      start: "top top",
      end: "+=100%", // This will make it end after scrolling 100% of the viewport height
      pin: true,
      markers: true, // This will help you see the trigger points
      id: "hero-pin",
    },
  });
}; 