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
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Modal */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        <header className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold">{title}</h1>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 font-bold"
          >
            X
          </button>
        </header>
        <div className="mb-4">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
