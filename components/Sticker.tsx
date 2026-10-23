"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type Placement = { x: string; y: string; r: string };

type Props = {
  /** Position on screens 1280px and wider. */
  wide: Placement;
  /** Position on narrower screens. Defaults to `wide`. */
  narrow?: Placement;
  href?: string;
  label?: string;
  className?: string;
  children: ReactNode;
};

// Shared across stickers so the one you grab always lands on top.
let topZ = 10;

export default function Sticker({ wide, narrow = wide, href, label, className = "", children }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const drag = useRef<{ id: number; x: number; y: number; left: number; top: number; bw: number; bh: number } | null>(null);
  const moved = useRef(false);

  // Wide and narrow layouts differ, so drop dragged positions when crossing the breakpoint.
  useEffect(() => {
    const mq = matchMedia("(min-width: 1280px)");
    const reset = () => {
      if (!ref.current) return;
      ref.current.style.left = "";
      ref.current.style.top = "";
    };
    mq.addEventListener("change", reset);
    return () => mq.removeEventListener("change", reset);
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLElement>) => {
    if (e.button !== 0) return;
    const node = e.currentTarget;
    const board = node.offsetParent as HTMLElement | null;
    if (!board) return;
    drag.current = {
      id: e.pointerId,
      x: e.clientX,
      y: e.clientY,
      left: node.offsetLeft,
      top: node.offsetTop,
      bw: board.clientWidth,
      bh: board.clientHeight,
    };
    moved.current = false;
    node.setPointerCapture(e.pointerId);
    node.style.zIndex = String(++topZ);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLElement>) => {
    const d = drag.current;
    if (!d || e.pointerId !== d.id) return;
    const node = e.currentTarget;
    const dx = e.clientX - d.x;
    const dy = e.clientY - d.y;
    if (!moved.current && Math.hypot(dx, dy) < 4) return;
    if (!moved.current) {
      moved.current = true;
      node.classList.add("is-dragging");
    }
    // Keep at least 40px of the sticker on the board.
    const x = Math.min(Math.max(d.left + dx, 40 - node.offsetWidth), d.bw - 40);
    const y = Math.min(Math.max(d.top + dy, 40 - node.offsetHeight), d.bh - 40);
    // Percentages so the position scales when the window resizes.
    node.style.left = `${(x / d.bw) * 100}%`;
    node.style.top = `${(y / d.bh) * 100}%`;
  };

  const onPointerEnd = (e: React.PointerEvent<HTMLElement>) => {
    if (!drag.current || e.pointerId !== drag.current.id) return;
    drag.current = null;
    e.currentTarget.classList.remove("is-dragging");
  };

  // A drag should not count as a click on linked stickers.
  const onClick = (e: React.MouseEvent) => {
    if (moved.current) {
      e.preventDefault();
      moved.current = false;
    }
  };

  const props = {
    className: `sticker ${className}`.trim(),
    style: {
      "--wx": wide.x, "--wy": wide.y, "--wr": wide.r,
      "--nx": narrow.x, "--ny": narrow.y, "--nr": narrow.r,
    } as CSSProperties,
    draggable: false,
    onPointerDown,
    onPointerMove,
    onPointerUp: onPointerEnd,
    onPointerCancel: onPointerEnd,
    onClick,
  };

  if (href) {
    return (
      <a ref={(n) => { ref.current = n; }} href={href} aria-label={label} {...props}>
        {children}
      </a>
    );
  }
  return (
    <div ref={(n) => { ref.current = n; }} aria-label={label} {...props}>
      {children}
    </div>
  );
}
