import { Link } from "react-router-dom";

const events = [
  {
    id: "1",
    title: "The amazing event 1",
  },
  {
    id: "2",
    title: "The amazing event 2",
  },
  {
    id: "3",
    title: "The amazing event 3",
  },
];

export default function EventsPage() {
  return (
    <>
      <h1>Events Page</h1>
      <ul>
        {events.map((event) => (
          <li>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
