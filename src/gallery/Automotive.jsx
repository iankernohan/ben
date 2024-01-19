import ImageDisplay from "../UI/ImageDisplay";
import { getImages, shuffleImages } from "../helpers/helpers";
import { useLoaderData } from "react-router-dom";

function Automotive() {
  const images = useLoaderData();
  return (
    <div>
      <ImageDisplay images={shuffleImages(images)} path={"Automotive"} />
    </div>
  );
}

export async function loader() {
  const images = await getImages("auto");
  return images;
}

export default Automotive;
