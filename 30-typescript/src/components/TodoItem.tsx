import { FC } from "react";

interface Props {
  text: string;
}

const TodoItem: FC<Props> = ({ text }) => {
  return <li>{text}</li>;
};

export default TodoItem;
