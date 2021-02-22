import { atom } from "recoil";

export const notePadAtom = atom({
  key: "create_notepad",
  default: [
    {
      id: "1",
      value: "Please Type this.",
    },
  ],
});
