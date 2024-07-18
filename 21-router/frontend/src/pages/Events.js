import { Link } from "react-router-dom";

const events = [
  {
    id: "1",
    title: "The amazing event",
    description: "Some awesome event",
    date: "2022-10-01",
  },
  {
    id: "2",
    title: "The amazing event",
    description: "Some awesome event",
    date: "2022-10-01",
  },
  {
    id: "3",
    title: "The amazing event",
    description: "Some awesome event",
    date: "2022-10-01",
  },
];

export default function EventsPage() {
  return (
    <>
      <h1>Events Page</h1>
      {events.map((event) => (
        <p key={event.id}>
          <Link to={`/events/${event.id}`}>{event.title}</Link>
        </p>
      ))}
    </>
  );
}
