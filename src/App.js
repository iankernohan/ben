import LandingPage from "./LandingPage";
import HomePage from "./HomePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LeShoppeModern, {
  loader as leShoppeLoader,
} from "./gallery/LeShoppeModern";
import Automotive, { loader as autoLoader } from "./gallery/Automotive";
import Event, { loader as eventLoader } from "./gallery/Event";
import Landscape, { loader as landscapeLoader } from "./gallery/Landscape";
import Portrait, { loader as portraitLoader } from "./gallery/Portrait";
import AppLayout from "./AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/le_shoppe_modern",
        element: <LeShoppeModern />,
        loader: leShoppeLoader,
      },
      {
        path: "/automotive",
        element: <Automotive />,
        loader: autoLoader,
      },
      {
        path: "/event",
        element: <Event />,
        loader: eventLoader,
      },
      {
        path: "/landscape",
        element: <Landscape />,
        loader: landscapeLoader,
      },
      {
        path: "/portrait",
        element: <Portrait />,
        loader: portraitLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
