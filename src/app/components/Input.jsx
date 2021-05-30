import React from "react";

const Input = ({ label, value, setValue }) => {
  return (
    <div className="flex flex-row mb-3">
      <p className="font-bold mr-2">{label}:</p>
      <input
        className="focus:outline-none w-max"
        onChange={(e) => setValue(e.target.value)}
        value={(value = "-" ? "Nema podatka." : { value })}
      />
    </div>
  );
};

export default Input;
