import Camera from "./components/Camera";
import React from "react";
import InterpretedText from "./components/InterpretedText";
import { exec } from "child_process";
import Translator from "../API/Translator";

exec("echo hello", (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-300 to-blue-500 text-white text-center">
      <main className="container mx-auto p-8">
        <h1 className="text-5xl font-extrabold mb-4">tranSLate</h1>
        <p className="text-lg mb-8">
          Break down language barriers with the power of sign language.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-3xl text-black font-semibold mb-4">Capture Sign Language</h2>
            <Camera />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-3xl text-black font-semibold mb-4">Interpreted text</h2>
            <InterpretedText text="Dogs, often referred to as man's best friend" />
          </div>
        </div>

        <div className="mt-12">
          {/* Additional creative content goes here */}
        </div>
      </main>
    </div>
  );
};

export default Home;
