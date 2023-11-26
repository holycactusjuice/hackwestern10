import Camera from "./components/Camera"
import React, {useRef, useState, useEffect} from "react";
import InterpretedText from "./components/InterpretedText";

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-black text-center">
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">tranSLate</h1>
        <p className="text-lg">A way to communicate internationally through sign language.</p>
        
        <div className="m-8 grid grid-cols-2">
          <div>
            <Camera/>
          </div>
          <div>
            <InterpretedText
              text="Puppies are adorable and playful animals that bring immense joy and companionship to people's lives. With their wagging tails, curious nature, and innocent eyes, they have the ability to melt hearts and bring smiles to faces. Whether they are running around, chasing their tails, or cuddling up for a nap, puppies have a special way of brightening up any day. Puppies are adorable and playful animals that bring immense joy and companionship to people's lives. With their wagging tails, curious nature, and innocent eyes, they have the ability to melt hearts and bring smiles to faces. Whether they are running around, chasing their tails, or cuddling up for a nap, puppies have a special way of brightening up any day.              "
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
