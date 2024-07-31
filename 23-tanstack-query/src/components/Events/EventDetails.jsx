import { Link, Outlet, useParams } from "react-router-dom";

import Header from "../Header.jsx";
import { useQuery } from "@tanstack/react-query";
import { fetchEvent } from "../../util/http.js";

export default function EventDetails() {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["event-details"],
    queryFn: ({ signal }) => fetchEvent({ id, signal }),
  });
  console.log(data);

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  }
  if (isError) {
    content = <p>Error ocurred while fetchin event details...</p>;
  }
  if (data) {
    content = (
      <div id="event-details-content">
        <img
          src={`http://localhost:3000/${data.image}`}
          alt="Event details image"
          data
        />
        <div id="event-details-info">
          <div>
            <p id="event-details-location">{data.location}</p>
            <time dateTime={`Todo-DateT$Todo-Time`}>{data.date}</time>
          </div>
          <p id="event-details-description">{data.description}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <article id="event-details">
        <header>
          <h1>{data.title}</h1>
          <nav>
            <button>Delete</button>
            <Link to="edit">Edit</Link>
          </nav>
        </header>
        {content}
      </article>
    </>
  );
}
