import { FC } from "react";
import Todo from "../models/Todo";

interface Props {
  items: Todo[];
}

const Todos: FC<Props> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default Todos;
