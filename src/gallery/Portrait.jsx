import ImageDisplay from "../UI/ImageDisplay";
import { shuffleImages } from "../helpers/helpers";
import { portraitImages } from "../photos/portraitImages";

function Portrait() {
  return (
    <div>
      <ImageDisplay images={shuffleImages(portraitImages)} path="Portraits" />
    </div>
  );
}

export default Portrait;
