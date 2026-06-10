"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const setSheet = (open: boolean) => {
    const sheet = sheetRef.current;
    const btn = menuBtnRef.current;
    if (!sheet || !btn) return;
    sheet.classList.toggle("open", open);
    sheet.setAttribute("aria-hidden", String(!open));
    btn.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) btn.focus();
  };

  useEffect(() => {
    const sheet = sheetRef.current;
    if (!sheet) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && sheet.classList.contains("open")) setSheet(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="nav" id="nav" ref={navRef}>
        <div className="nav-inner">
          <a href="#top" className="brand" aria-label="Tiagogoco — inicio">
            <span className="mono-mark">
              <Image src="/logo.webp" alt="Tiago Goco" width={256} height={256} />
            </span>
            <span>
              <b>Tiagogoco</b> · <span>Product&nbsp;Engineer</span>
            </span>
          </a>
          <nav className="links" id="navlinks">
            <a href="#proyectos"><span className="idx">01</span>Proyectos</a>
            <a href="#sobre-mi"><span className="idx">02</span>Sobre mí</a>
            <a href="#ia"><span className="idx">03</span>IA</a>
            <a href="#skills"><span className="idx">04</span>Skills</a>
          </nav>
          <div className="nav-right">
            <a href="#contacto" className="nav-cta">Contacto</a>
            <button
              className="menu-btn"
              id="menuBtn"
              ref={menuBtnRef}
              aria-label="Menú"
              aria-expanded="false"
              aria-controls="sheet"
              onClick={() => setSheet(true)}
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>

      <div
        className="sheet"
        id="sheet"
        ref={sheetRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menú principal"
        aria-hidden="true"
      >
        <button className="sclose" aria-label="Cerrar" onClick={() => setSheet(false)}>✕</button>
        <a href="#proyectos" onClick={() => setSheet(false)}>Proyectos</a>
        <a href="#sobre-mi" onClick={() => setSheet(false)}>Sobre mí</a>
        <a href="#ia" onClick={() => setSheet(false)}>IA aplicada</a>
        <a href="#skills" onClick={() => setSheet(false)}>Skills & Educación</a>
        <a href="#contacto" onClick={() => setSheet(false)}>Contacto</a>
      </div>
    </>
  );
}
