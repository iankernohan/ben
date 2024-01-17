import ImageDisplay from "../UI/ImageDisplay";
import { shuffleImages } from "../helpers/helpers";
import { landscapeImages } from "../photos/landscapeImages";

function Landscape() {
  return (
    <div>
      <ImageDisplay images={shuffleImages(landscapeImages)} path="Landscapes" />
    </div>
  );
}

export default Landscape;
