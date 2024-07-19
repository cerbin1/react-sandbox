import { json, redirect, useRouteLoaderData } from "react-router-dom";

import EventItem from "../components/EventItem";

export default function EventDetailsPage() {
  const data = useRouteLoaderData("event-details");

  return <EventItem event={data.event} />;
}

export async function loader({ params }) {
  const response = await fetch(
    "http://localhost:8080/events/" + params.eventId
  );

  if (!response.ok) {
    json(
      { message: "Could not fetch details for selected event." },
      { status: 500 }
    );
  } else {
    return response;
  }
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
