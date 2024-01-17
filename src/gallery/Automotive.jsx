import ImageDisplay from "../UI/ImageDisplay";
import { autoImages } from "../photos/autoImages";
import { shuffleImages } from "../helpers/helpers";

function Automotive() {
  return (
    <div>
      <ImageDisplay images={shuffleImages(autoImages)} path={"Automotive"} />
    </div>
  );
}

export default Automotive;
