import React from 'react';

const Button = ({ label, onClick, type = 'button', className = '', disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-300 
                  ${disabled ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}
                  ${className}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
