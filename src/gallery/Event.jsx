import ImageDisplay from "../UI/ImageDisplay";
import { shuffleImages } from "../helpers/helpers";
import { eventImages } from "../photos/eventImages";

function Event() {
  return (
    <div>
      <ImageDisplay images={shuffleImages(eventImages)} path="Events" />
    </div>
  );
}

export default Event;
