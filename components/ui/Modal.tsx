import React from 'react';
import './Modal.css'; // Importing CSS for styling

interface ModalProps {
  isOpen: boolean; // Determines if the modal is open
  onClose: () => void; // Function to close the modal
  title: string; // Title of the modal
  children: React.ReactNode; // Content inside the modal
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null; // Return nothing if modal is not open

  return (
    <div className="modal-overlay" onClick={onClose}> {/* Overlay to close modal */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}> {/* Prevent closing when clicking inside */}
        <h2 className="modal-title">{title}</h2>
        <button className="modal-close" onClick={onClose}>X</button> {/* Close button */}
        <div className="modal-body">{children}</div> {/* Modal content */}
      </div>
    </div>
  );
};

export default Modal;