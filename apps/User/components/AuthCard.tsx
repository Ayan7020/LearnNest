"use client";

import React from 'react';

interface AuthcardProps {
  title: string;
  Subtitle: string;
  Content: string[];
  index: number;
  selectedValue: number;
  onChange: (index: number) => void;
}

const Authcard: React.FC<AuthcardProps> = ({ title, Subtitle, Content, index, selectedValue, onChange }) => {
  const handleClick = () => {
    onChange(index);
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    onChange(index);
  };

  return (
    <div
      className={`border-4 p-4 cursor-pointer rounded-xl transition-all duration-300 dark:bg-richblack-900 ${
        selectedValue === index ? 'border-blue-100 ' : 'border-gray-300  '
      }`}
      onClick={handleClick}
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-2">
        <input
          type="radio"
          name="authcard"
          value={index}
          checked={selectedValue === index}
          onChange={handleRadioChange}
          className="mr-2"
        />
        <div className="flex flex-col items-center md:items-start gap-2 flex-1">
          <div className="text-xl md:text-2xl font-semibold text-gray-800">
            {title}
          </div>
          <p className="text-gray-600 text-center md:text-left">{Subtitle}</p>
          <ul className="pl-6 text-gray-700">
            {Content.map((element, idx) => (
              <li key={idx} className="list-disc">
                {element}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Authcard;
