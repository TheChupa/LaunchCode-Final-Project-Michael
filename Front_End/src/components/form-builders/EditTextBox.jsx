
import { useState } from "react";

const EditTextBox = ({ label, value, onSave }) => {
  const [editing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value || "");

  const handleSave = () => {
    onSave(inputValue);
    setEditing(false);
  };

  return (
    <div className="editable-field">
      <strong>{label}: </strong>
      {editing ? (
        <>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <span>{value || "—"}</span>
          <button onClick={() => setEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
};

export default EditTextBox;
