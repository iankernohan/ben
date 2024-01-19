import ImageDisplay from "../UI/ImageDisplay";
import { getImages, shuffleImages } from "../helpers/helpers";
import { useLoaderData } from "react-router-dom";

function Event() {
  const images = useLoaderData();
  return (
    <div>
      <ImageDisplay images={shuffleImages(images)} path="Events" />
    </div>
  );
}

export async function loader() {
  const images = await getImages("events");
  return images;
}

export default Event;
