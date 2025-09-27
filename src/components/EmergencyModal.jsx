import React, { useState } from "react";

const EmergencyModal = ({ onConfirm, onCancel }) => {
  const [allergies, setAllergies] = useState("");
  const [medications, setMedications] = useState("");
  const [notes, setNotes] = useState("");

  const handleConfirm = () => {
    onConfirm({ allergies, medications, notes });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <h2>🚨 Emergency Assistance</h2>
        <p>You’re about to contact emergency services. Use only for genuine emergencies.</p>

        <input
          type="text"
          placeholder="Allergies"
          value={allergies}
          onChange={(e) => setAllergies(e.target.value)}
        />
        <input
          type="text"
          placeholder="Medications"
          value={medications}
          onChange={(e) => setMedications(e.target.value)}
        />
        <textarea
          placeholder="Additional Notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        ></textarea>

        <div className="modal-actions">
          <button onClick={handleConfirm} className="confirm-btn">
            📞 Confirm Emergency
          </button>
          <button onClick={onCancel} className="cancel-btn">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmergencyModal;
