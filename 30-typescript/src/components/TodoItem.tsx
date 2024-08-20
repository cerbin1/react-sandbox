import { FC } from "react";
import classes from "./TodoItem.module.css";

interface Props {
  text: string;
  onRemoveTodo: () => void;
}

const TodoItem: FC<Props> = ({ text, onRemoveTodo }) => {
  return (
    <li onClick={onRemoveTodo} className={classes.item}>
      {text}
    </li>
  );
};

export default TodoItem;
