'use client';

const InterpretedText = (props) => {
  return <div className="outline outline-2 ml-4 rounded-lg ring-blue-500 shadow-md outline-transparent overflow-y-auto h-64"> 
      <h1>Translated Text</h1>
      <p>{props.text}</p>
    </div>
}

export default InterpretedText;