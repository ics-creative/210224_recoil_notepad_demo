import React from "react";
import { RecoilRoot } from "recoil";
import { NoteApp } from "./components/NoteApp";

export const App = () => {
  return (
    <div className="App">
      <h1>NotePad App</h1>
      {/* Recoilのコンポーネントで囲う */}
      <RecoilRoot>
        <NoteApp />
      </RecoilRoot>
    </div>
  );
};
