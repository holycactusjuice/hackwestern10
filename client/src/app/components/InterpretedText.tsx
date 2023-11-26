'use client';
import {playfair} from '../fonts'
import ConvertDropdown from './ConvertDropdown';

interface InterpretedTextProps {
  text: string;
}

const InterpretedText: React.FC<InterpretedTextProps> = ({ text }) => {
  return <div> 
      <div className="outline outline-2 ml-4 pl-8 pr-8 pt-4 rounded-lg ring-blue-500 shadow-md outline-transparent overflow-y-auto h-64"> 
      <p className="text-m text-black">{text}</p>
      </div>
      <ConvertDropdown></ConvertDropdown>
    </div>
}

export default InterpretedText;