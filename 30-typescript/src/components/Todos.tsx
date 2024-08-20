import { FC } from "react";
import Todo from "../models/Todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

interface Props {
  items: Todo[];
  onRemoveTodo: (id: string) => void;
}

const Todos: FC<Props> = ({ items, onRemoveTodo }) => {
  return (
    <ul className={classes.todos}>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
