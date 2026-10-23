"use client";

import { useEffect, useRef, useState } from "react";
import { nav, site } from "@/lib/content";
import { CloseIcon, MenuIcon } from "./icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const openBtn = useRef<HTMLButtonElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) closeBtn.current?.focus();
    else if (wasOpen.current) openBtn.current?.focus();
    wasOpen.current = open;

    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="site-header">
        <a href="#top" className="brand display">{site.name}</a>
        <nav className="nav" aria-label="Primary">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
          <a href="#contact" className="pill pill--ink">Say hello</a>
        </nav>
        <button
          ref={openBtn}
          type="button"
          className="menu-btn"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </button>
      </header>

      <div id="mobile-menu" className="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu" hidden={!open}>
        <div className="mobile-menu__top">
          <span className="brand display">{site.name}</span>
          <button ref={closeBtn} type="button" className="menu-btn" aria-label="Close menu" onClick={() => setOpen(false)}>
            <CloseIcon />
          </button>
        </div>
        <nav className="mobile-menu__links display" aria-label="Mobile">
          {[...nav, { label: "Say hello", href: "#contact" }].map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
          ))}
        </nav>
      </div>
    </>
  );
}
