import {
  Await,
  defer,
  json,
  redirect,
  useRouteLoaderData,
} from "react-router-dom";

import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

export default function EventDetailsPage() {
  const { event, events } = useRouteLoaderData("event-details");

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={events}>
          {(loadedEvens) => <EventsList events={loadedEvens} />}
        </Await>
      </Suspense>
    </>
  );
}

async function loadEvent(id) {
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    json(
      { message: "Could not fetch details for selected event." },
      { status: 500 }
    );
  } else {
    const responseData = await response.json();
    return responseData.event;
  }
}

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    json({ message: "Could not fetch events" }, { status: 500 });
  } else {
    const responseData = await response.json();
    return responseData.events;
  }
}

export async function loader({ params }) {
  const id = params.eventId;
  return defer({ event: await loadEvent(id), events: loadEvents() });
}

export async function action({ params, request }) {
  const response = await fetch(
    "http://localhost:8080/events/" + params.eventId,
    { method: request.method }
  );
  if (!response.ok) {
    json({ message: "Could not delete event." }, { status: 500 });
  } else {
    return redirect("/events");
  }
}
