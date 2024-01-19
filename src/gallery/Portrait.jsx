import ImageDisplay from "../UI/ImageDisplay";
import { getImages, shuffleImages } from "../helpers/helpers";
import { useLoaderData } from "react-router-dom";

function Portrait() {
  const images = useLoaderData();
  return (
    <div>
      <ImageDisplay images={shuffleImages(images)} path="Portraits" />
    </div>
  );
}

export async function loader() {
  const images = await getImages("portraits");
  return images;
}

export default Portrait;
