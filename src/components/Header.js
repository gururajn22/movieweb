import "../../style.css";
import { Link } from "react-router-dom";
import useOnline from "../../utils/useOnline";
const Header = () => {
  const showOnline = useOnline();
  return (
    <>
      <nav>
        <div className="left">
          <Link to="/">Movie Web</Link>
        </div>
        <div className="mid">
          <Link to="/product">Product</Link>
          <Link to="/about">About Us</Link>
        </div>
        <div className="right">
          <p>online Status:{showOnline ? "✅" : "🔴"}</p>
        </div>
      </nav>
    </>
  );
};
export default Header;
