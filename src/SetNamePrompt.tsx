import React, { useState } from "react";
import { useUser } from "./UserContext";
import { useNavigate } from 'react-router-dom';  // Import navigation hook
import { Outlet } from 'react-router-dom';

const SetNamePrompt: React.FC = () => {
  const { setName } = useUser();
  const [inputName, setInputName] = useState<string>("");

  const handleSubmit = () => {
    if (inputName.trim()) {
      setName(inputName.trim());
    }
    navigate('/app');
  };

  const navigate = useNavigate();  // Hook to navigate between routes

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Welcome! Set Your Name</h2>
        <input
          type="text"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          placeholder="Enter your name"
          className="border w-full p-2 mb-4 text-black"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white py-2 px-4 rounded w-full"
        >
          Save Name
        </button>
      </div>
    </div>
  );
};

export default SetNamePrompt;
