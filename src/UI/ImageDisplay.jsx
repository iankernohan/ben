import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import { useNavigate } from "react-router-dom";
import { randNum50, randNum3, shiftAmount } from "../helpers/helpers";

const align = ["end", "center", "start"];
const justify = ["left", "center", "right"];
const size = ["80%", "100%", "120%"];

function ImageDisplay({ images, path }) {
  const navigate = useNavigate();

  return (
    <div className="gallery-page">
      <header>
        <button onClick={() => navigate(-1)}>Back</button>
        <h1>{path}</h1>
      </header>

      <Gallery>
        <section className="gallery">
          {images.map((image, index) => {
            // const url = `../ben-photos/${path}/${image.name}`;
            return (
              <Item
                key={index}
                original={image.name}
                thumbnail={image.name}
                width={image.width}
                height={image.height}
              >
                {({ ref, open }) => (
                  <div
                    className="gallery-image"
                    style={{
                      alignSelf: align[randNum3()],
                      zIndex: `${randNum50()}`,
                      ...shiftAmount(),
                    }}
                  >
                    <img
                      ref={ref}
                      onClick={open}
                      src={image.name}
                      alt=""
                      style={{
                        justifySelf: justify[randNum3()],
                        width: size[randNum3()],
                      }}
                    />
                  </div>
                )}
              </Item>
            );
          })}
        </section>
      </Gallery>
    </div>
  );
}

export default ImageDisplay;
