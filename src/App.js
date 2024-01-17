import LandingPage from "./LandingPage";
import HomePage from "./HomePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LeShoppeModern from "./gallery/LeShoppeModern";
import Automotive from "./gallery/Automotive";
import Event from "./gallery/Event";
import Landscape from "./gallery/Landscape";
import Portrait from "./gallery/Portrait";

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: '/home',
    element: <HomePage />
  },
  {
    path: '/le_shoppe_modern',
    element: <LeShoppeModern />
  },
  {
    path: '/automotive',
    element: <Automotive />
  },
  {
    path: '/event',
    element: <Event />
  },
  {
    path: '/landscape',
    element: <Landscape />
  },
  {
    path: '/portrait',
    element: <Portrait />
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}



export default App;
