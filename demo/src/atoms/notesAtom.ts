import { atom } from "recoil";

/**
 * ノートのデータ管理場所です。
 */
export const notesAtom = atom({
  key: "Notepad", // 任意のユニークな名前
  // 初期値
  default: [
    {
      id: "1",
      value: "",
      isComplete: false,
    },
    {
      id: "2",
      value: "",
      isComplete: false,
    },
  ],
});
