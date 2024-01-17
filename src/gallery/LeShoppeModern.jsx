import ImageDisplay from "../UI/ImageDisplay";
import { shuffleImages } from "../helpers/helpers";
import { leShoppeModernImages } from "../photos/leShoppeModernImages";

// const images = require.context("../ben-photos/Le-Shoppe-Modern", true);
// const imageList = images.keys().map((image) => image);

function LeShoppeModern() {
  return (
    <div>
      <ImageDisplay
        images={shuffleImages(leShoppeModernImages)}
        path="Le-Shoppe-Modern"
      />
    </div>
  );
}

export default LeShoppeModern;
