import ImageDisplay from "../UI/ImageDisplay";
import { getImages, shuffleImages } from "../helpers/helpers";
import { useLoaderData } from "react-router-dom";

function Landscape() {
  const images = useLoaderData();
  return (
    <div>
      <ImageDisplay images={shuffleImages(images)} path="Landscapes" />
    </div>
  );
}

export async function loader() {
  const images = await getImages("landscapes");
  return images;
}

export default Landscape;
