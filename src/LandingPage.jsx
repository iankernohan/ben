import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="landing-container">
      <h1>Ben Marino</h1>
      <div className="landing-img-container">
        <Link to={"/home"}>
          <img src="Contained.jpg" alt="" />
          <div></div>
        </Link>
      </div>
    </div>
  );
}
