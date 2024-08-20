import { FC } from "react";
import Todo from "../models/Todo";
import TodoItem from "./TodoItem";

interface Props {
  items: Todo[];
}

const Todos: FC<Props> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
