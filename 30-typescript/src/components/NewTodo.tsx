import { FC, useRef } from "react";
import classes from "./NewTodo.module.css";

interface Type {
  onAddTodo: (text: string) => void;
}

const NewTodo: FC<Type> = ({ onAddTodo }) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      return;
    }
    onAddTodo(enteredText);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="new-todo">Todo text</label>
      <input type="text" id="new-todo" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
