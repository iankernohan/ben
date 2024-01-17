import StyledLink from "./StyledLink";
import { FaInstagram } from "react-icons/fa";

export default function Menu({ setShowMenu }) {
  return (
    <div className="menu">
      <span className="close" onClick={() => setShowMenu(false)}>
        &times;
      </span>
      <ul>
        <li>
          <StyledLink to="/le_shoppe_modern">LE SHOPPE MODERN</StyledLink>
        </li>
        <li>
          <StyledLink to="/automotive">AUTOMOTIVE</StyledLink>
        </li>
        <li>
          <StyledLink to="/event">EVENT</StyledLink>
        </li>
        <li>
          <StyledLink to="/landscape">LANDSCAPES</StyledLink>
        </li>
        <li>
          <StyledLink to="/portrait">PORTRAITURE</StyledLink>
        </li>
        <li>
          <a
            href="https://www.instagram.com/marinowithacamera/"
            rel="noreferrer"
            target="_blank"
          >
            <span>
              <FaInstagram />
            </span>
            <div>@marinowithacamera</div>
          </a>
        </li>
      </ul>
    </div>
  );
}
