import { NavLink } from "react-router-dom";
import SearchBar from "../UI/SearchBar/SearchBar";

const Header = () => {
  return (
    <nav className="bg-green-700 w-full px-3 flex justify-between items-center">
      <ul className="flex gap-4 font-semibold text-xl text-slate-50">
        <li>
          <NavLink to="/" end style={({ isActive }) => ({ color: isActive ? 'white' : 'rgb(20 83 45)' })}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/product" style={({ isActive }) => ({ color: isActive ? 'white' : 'rgb(20 83 45)' })}>
            Product
          </NavLink>
        </li>
      </ul>
      <SearchBar />
    </nav>
  );
}

export default Header;
