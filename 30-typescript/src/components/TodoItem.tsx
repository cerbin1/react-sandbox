import { FC } from "react";
import classes from "./TodoItem.module.css";

interface Props {
  text: string;
}

const TodoItem: FC<Props> = ({ text }) => {
  return <li className={classes.item}>{text}</li>;
};

export default TodoItem;
