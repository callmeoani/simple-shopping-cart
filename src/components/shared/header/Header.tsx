import { Link } from "react-router-dom";
import "./Header.css";

import { MdSearch } from "react-icons/md";

interface Props {
  searchTerm: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Header = ({ searchTerm, handleChange }: Props) => {
  return (
    <div className="Navbar">
      <Link to="/" className="logo">
        Oani's Shop
      </Link>
      <div className="search-section">
        <MdSearch
          fontSize={24}
          strokeWidth={0}
          style={{ marginRight: "5px" }}
        />
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
          className="search-box"
        />
      </div>
      <Link to="/CartPage">Cart Page</Link>
    </div>
  );
};

export default Header;
