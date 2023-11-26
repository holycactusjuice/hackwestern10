'use client';

import React, { useState } from 'react';
import { playfair } from '../fonts';
import ConvertDropdown from './ConvertDropdown';
import Translator from "../../API/Translator";

interface InterpretedTextProps {
  text: string;
}

const InterpretedText: React.FC<InterpretedTextProps> = ({ text }) => {
  const [showTranslator, setShowTranslator] = useState<boolean>(false); // Specify type for useState

  const handleClick = () => { // Use arrow function for consistency
    setShowTranslator(true);
  }

  return (
    <div> 
      <div className="outline outline-2 ml-4 pl-8 pr-8 pt-4 rounded-lg ring-blue-500 shadow-md outline-transparent overflow-y-auto h-64"> 
        <h1 className={`pb-4 text-xl ${playfair.className}`}>Translated Text</h1>
        <p className="text-m">{text}</p>
      </div>
      <ConvertDropdown />

      <button onClick={handleClick}>Translate</button>

      {showTranslator && <Translator text={text} />} {/* Conditionally render Translator */}
    </div>
  );
}

export default InterpretedText;
