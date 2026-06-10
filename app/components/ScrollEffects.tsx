"use client";

import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    // reveal on scroll
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    document.querySelectorAll<HTMLElement>(".rv:not(.in)").forEach((el) => io.observe(el));

    const revealVisible = () => {
      document.querySelectorAll<HTMLElement>(".rv:not(.in)").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.92 && r.bottom > 0) {
          el.classList.add("in");
          io.unobserve(el);
        }
      });
    };
    requestAnimationFrame(revealVisible);
    window.addEventListener("hashchange", () => requestAnimationFrame(revealVisible));

    // active nav link via section observer
    const navLinks = [...document.querySelectorAll<HTMLAnchorElement>('#navlinks a[href^="#"]')];
    const map: Record<string, HTMLAnchorElement> = {};
    navLinks.forEach((a) => {
      const id = a.getAttribute("href")!.slice(1);
      if (id) map[id] = a;
    });
    const secObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            navLinks.forEach((a) => a.classList.remove("active"));
            const id = (e.target as HTMLElement).id;
            if (map[id]) map[id].classList.add("active");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    ["proyectos", "sobre-mi", "ia", "skills", "contacto"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) secObs.observe(el);
    });

    // scroll cue fade
    const cue = document.getElementById("scrollCue");
    if (cue) {
      const onCue = () => { cue.style.opacity = window.scrollY > 40 ? "0" : "1"; };
      onCue();
      window.addEventListener("scroll", onCue, { passive: true });
    }

    // hero video autoplay
    const v = document.querySelector<HTMLVideoElement>(".hero-video");
    if (v) {
      const go = () => { const p = v.play(); if (p) p.catch(() => {}); };
      go();
      v.addEventListener("canplay", go, { once: true });
      document.addEventListener("visibilitychange", () => { if (!document.hidden) go(); });
      (["pointerdown", "touchstart", "keydown"] as const).forEach((ev) =>
        window.addEventListener(ev, go, { once: true, passive: true })
      );
    }

    return () => {
      io.disconnect();
      secObs.disconnect();
    };
  }, []);

  return null;
}
