import React, { useCallback } from "react";
import type { NoteType } from "../types/NoteType";
import { notesAtom } from "../atoms/notesAtom";
import { useRecoilState } from "recoil";
import { replaceItemAtIndex } from "../utils/replaceItemAtIndex";

type Props = {
  item: NoteType;
};

/**
 * ノートのアイテムを表示するコンポーネントです。
 */
export const NoteItem: React.FC<Props> = ({ item }) => {
  const [notes, setNotes] = useRecoilState(notesAtom);

  const index = notes.findIndex((listItem) => listItem === item);

  /**
   * 入力欄を更新したときの処理です。
   */
  const handleChangeText = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const value = event.target.value;

      const newList = replaceItemAtIndex(notes, index, {
        ...item,
        value,
      });

      // 更新
      setNotes(newList);
    },

    [notes, setNotes]
  );

  /**
   * チェックボックスを押下したときの処理です。
   */
  const handleCompleteChange = () => {
    const newList = replaceItemAtIndex(notes, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    // 更新
    setNotes(newList);
  };

  return (
    <div className="noteItem">
      <div>ノート #{item.id}</div>
      <textarea
        value={item.value}
        onChange={handleChangeText}
        placeholder="メモを入力しましょう！"
      />
      <label>
        <input
          type="checkbox"
          checked={item.isComplete}
          onChange={handleCompleteChange}
        />
        完了
      </label>
    </div>
  );
};
