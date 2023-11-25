'use client';
import React, {useRef, useState, useEffect} from "react";
import Webcam from "react-webcam";


const Home = () => {
  return (
    <div className="min-h-screen bg-white text-black text-center">
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">tranSLate</h1>
        <p className="text-lg">A way to communicate internationally through sign language.</p>
        <div className="grid grid-cols-2">
          <div>
            <Webcam></Webcam>
          </div>
          <div>
            Translated text
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
