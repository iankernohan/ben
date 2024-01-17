import { useState } from "react";
import Menu from "./UI//Menu";
import HomePageImage from "./HomePageImage";

const images = [
  {
    image: "LeShoppe.jpg",
    title: "Le Shoppe Modern",
    link: "/le_shoppe_modern",
  },
  {
    image: "auto.jpg",
    title: "Automotive",
    link: "/automotive",
  },
  {
    image: "event.jpg",
    title: "Event",
    link: "/event",
  },
  {
    image: "landscape.jpg",
    title: "Landscapes",
    link: "/landscape",
  },
  {
    image: "portrait.jpg",
    title: "Portraiture",
    link: "/portrait",
  },
];

export default function HomePage() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="home-container">
      {showMenu && <Menu setShowMenu={setShowMenu} />}

      <h1 onClick={() => setShowMenu(true)}>Ben Marino</h1>

      {images.map((image, index) => (
        <HomePageImage key={index} image={image} />
      ))}
    </div>
  );
}
