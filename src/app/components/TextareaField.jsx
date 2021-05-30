import React, { useState } from "react";

const TextareaField = ({ label, value, setValue }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="flex flex-row mb-3">
      <p className="font-bold mr-2">{label}:</p>
      {isEditing ? (
        <>
          <textarea
            className="focus:outline-none w-full h-full"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsEditing(false);
            }}
          >
            ✔️
          </button>
        </>
      ) : (
        <div>
          <p
            onClick={() => {
              setIsEditing(true);
            }}
          >
            <p>{value !== "-" ? <p>{value}</p> : "Nema podatka."}</p>
          </p>
        </div>
      )}
    </div>
  );
};

export default TextareaField;
