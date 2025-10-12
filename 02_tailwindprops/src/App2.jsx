import './index.css';
import { useState } from "react";

export default function App2() {
  const [color, setColor] = useState("#00ffff"); // aqua in hex

  return (
    <div className="w-screen h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white text-black px-3 py-2 rounded-3xl">
          
          <button
            className="outline-none px-3 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            RED
          </button>
          <button
            className="outline-none px-3 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}
            onClick={() => setColor("black")}
          >
            BLACK
          </button>
          <button
            className="outline-none px-3 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            BLUE
          </button>
          <button
            className="outline-none px-3 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            GREEN
          </button>
          <button
            className="outline-none px-3 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "olive" }}
            onClick={() => setColor("olive")}
          >
            OLIVE
          </button>
        </div>
      </div>
      hgfuyedtrhdsx   
      {/* working only if I give some text here */}
    </div>
  );
}
