'use client';
import {playfair} from '../fonts'
import ConvertDropdown from './ConvertDropdown';



const InterpretedText = () => {
  return <div> 
      <div className="outline outline-2 ml-4 pl-8 pr-8 pt-4 rounded-lg ring-blue-500 shadow-md outline-transparent overflow-y-auto h-64"> 
      <h1 className={`pb-4 text-xl ${playfair.className}`}>Translated Text</h1>
      <p className="text-m">{}</p>
      </div>
    </div>
}

export default InterpretedText;