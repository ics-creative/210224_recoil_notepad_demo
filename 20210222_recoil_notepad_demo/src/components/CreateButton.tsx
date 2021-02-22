import React from "react";

type Props = {
  clickHandler: () => void;
};

export const CreateButton: React.FC<Props> = ({ clickHandler }) => {
  return <button onClick={clickHandler}>新規作成</button>;
};
