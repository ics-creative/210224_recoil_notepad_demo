/** ノートの型定義 */
export type NoteType = {
  /** ID値 */
  id: string;
  /** ノートの内容 */
  value: string;
  /** 完了済みかどうか */
  isComplete: boolean;
};
