"use client";

import { useEffect, useRef, useState } from "react";

export default function CopyEmailButton({ email }: { email: string }) {
  const [label, setLabel] = useState("Copy email");
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setLabel("Copied!");
    } catch {
      const link = document.getElementById("contact-email");
      if (link) getSelection()?.selectAllChildren(link);
      setLabel("Press ⌘C to copy");
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setLabel("Copy email"), 2000);
  };

  return (
    <button type="button" className="btn btn--outline btn--sm" aria-live="polite" onClick={copy}>
      {label}
    </button>
  );
}
