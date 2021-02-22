import React from "react";
import "./App.css";
import { RecoilRoot } from "recoil";
import { MemoApp } from "./components/MemoApp";

export const App = () => {
  console.log("ComponentWithRecoil is updated");
  return (
    <div className="App">
      <h1>NotePad App</h1>
      {/* Recoilのコンポーネントで囲う */}
      <RecoilRoot>
        <MemoApp />
      </RecoilRoot>
    </div>
  );
};

export default App;
