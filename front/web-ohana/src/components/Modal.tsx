import React from "react";

type Props = {
  title: string;
  open: boolean;
  children: React.ReactNode;
  onClose: () => void;
};

function Modal({ title, open, children, onClose }: Props) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-[#ffffff00] bg-opacity-50"
      onClick={onClose} // clic fuera del modal
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl relative overflow-auto max-h-[90vh]" // Ajusté la altura máxima
        onClick={(e) => e.stopPropagation()} // evita que el clic dentro cierre el modal
      >
        <header className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 font-bold"
          >
            X
          </button>
        </header>
        <div className="mb-4 overflow-auto">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
