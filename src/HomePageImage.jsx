import StyledLink from "./UI/StyledLink";

export default function HomePageImage({ image }) {
  return (
    <StyledLink to={image.link} className="home-page-image">
      <img src={image.image} alt="" />
      <p>{image.title}</p>
    </StyledLink>
  );
}
