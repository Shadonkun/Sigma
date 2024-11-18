import React, { useState } from "react";
import { useUser } from "./UserContext";

const ChangeName: React.FC = () => {
  const { name, setName } = useUser();
  const [newName, setNewName] = useState<string>("");

  const handleChange = () => {
    if (newName.trim()) {
      setName(newName.trim());
      setNewName(""); // Clear the input field
    }
  };

  return (
    <div className="change-name">
      <p>Current Name: {name}</p>
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder="Enter new name"
        className="border rounded p-2"
      />
      <button onClick={handleChange} className="ml-2 p-2 bg-blue-500 text-white rounded">
        Update Name
      </button>
    </div>
  );
};

export default ChangeName;
