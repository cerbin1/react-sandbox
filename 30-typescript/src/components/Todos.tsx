import { FC } from "react";

interface Props {
  items: string[];
}

const Todos: FC<Props> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default Todos;
