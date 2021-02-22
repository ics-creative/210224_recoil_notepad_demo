import React, { useCallback } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { MemoItem } from "./MemoItem";
import { CreateButton } from "./CreateButton";
import { notePadAtom } from "../atoms/notepad";

export const MemoApp: React.FC = () => {
  // Recoilの Atoms を呼び出して定義
  const setNotepad = useSetRecoilState(notePadAtom);
  // ステートとして利用する
  const [memos] = useRecoilState(notePadAtom);

  /**
   * メモ帳を新しく作成するコールバックです。
   */
  const handleCreate = useCallback(() => {
    setNotepad((state) =>
      [...state, { id: String(state.length + 1), value: "" }].sort((a, b) =>
        a.id.localeCompare(b.id)
      )
    );
  }, [setNotepad]);

  /**
   * メモ帳のインプットを更新するコールバックです。
   */
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const filteredMemos = memos.filter(
        (memo) => memo.id !== event.currentTarget.id
      );
      const newMemos = [
        ...filteredMemos,
        {
          id: String(event.currentTarget.id),
          value: event.target.value,
        },
      ].sort((a, b) => a.id.localeCompare(b.id));
      setNotepad(() => newMemos);
    },
    [memos, setNotepad]
  );
  return (
    <>
      {memos.map((memo) => (
        <MemoItem
          key={memo.id}
          id={memo.id}
          value={memo.value}
          changeHandler={handleChange}
        />
      ))}
      <div className="button_area">
        <CreateButton clickHandler={handleCreate} />
      </div>
    </>
  );
};
