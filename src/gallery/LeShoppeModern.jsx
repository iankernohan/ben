import ImageDisplay from "../UI/ImageDisplay";
import { getImages, shuffleImages } from "../helpers/helpers";
import { useLoaderData } from "react-router-dom";

function LeShoppeModern() {
  const images = useLoaderData();
  return (
    <div>
      <ImageDisplay images={shuffleImages(images)} path="Le-Shoppe-Modern" />
    </div>
  );
}

export async function loader() {
  const images = await getImages("leShoppeModern");
  return images;
}

export default LeShoppeModern;
