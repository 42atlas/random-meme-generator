import React from "react";
import { Meme } from "../Meme/Meme";
import { Routes, Route } from "react-router-dom";
import { MemeGenerated } from "../MemeGenerated/MemeGenerated";

export const App = () => {
  return (
    <div>
      <h1>Random Meme Generator</h1>
      <Routes>
        <Route exact path="/" element={<Meme />} />
        <Route path="/generated" element={<MemeGenerated />} />
      </Routes>
    </div>
  );
};
