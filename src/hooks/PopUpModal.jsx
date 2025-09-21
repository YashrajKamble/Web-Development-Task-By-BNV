import React, { useEffect, useRef } from "react";

export function Modal({ open, title, children, onClose }) {
  const panelRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKey);
    setTimeout(() => panelRef.current?.focus(), 0);

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <div
        ref={panelRef}
        tabIndex={-1}
        className="relative w-full max-w-md bg-[#0f1720] border border-gray-800 rounded-lg p-6 shadow-2xl"
      >
        <div className="flex items-start justify-between gap-4">
          <h3 id="modal-title" className="text-lg font-semibold text-white">
            {title}
          </h3>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="text-gray-400 hover:text-gray-200"
          >
            ✕
          </button>
        </div>

        <div className="mt-4 text-sm text-gray-300">{children}</div>
      </div>
    </div>
  );
}
