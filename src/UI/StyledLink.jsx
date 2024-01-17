import { Link } from "react-router-dom";

function StyledLink({ children, to, className }) {
  return (
    <Link
      to={to}
      className={className}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      {children}
    </Link>
  );
}

export default StyledLink;
