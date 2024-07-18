// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import EventsPage from "./pages/Events";
import EventDetailsPage from "./pages/EventDetails";
import NewEventPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import RootLayout from "./pages/RootLayout";
import EventsLayout from "./pages/EventsLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/events",
        element: <EventsLayout />,
        children: [
          { index: true, element: <EventsPage /> },
          { path: ":eventId", element: <EventDetailsPage /> },
          { path: "new", element: <NewEventPage /> },
          { path: ":eventId/edit", element: <EditEventPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
