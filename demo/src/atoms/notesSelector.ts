import { selector } from "recoil";
import { notesAtom } from "./notesAtom";

/**
 * このセレクターは、メモ帳リストの統計を計算するために使用されます。
 */
export const notesSelector = selector({
  key: "notepadStats",
  get: ({ get }) => {
    const notepadList = get(notesAtom);
    const totalNum = notepadList.length;
    const totalCompletedNum = notepadList.filter(
      (item) => item.isComplete,
    ).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted =
      totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});
