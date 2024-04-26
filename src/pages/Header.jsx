import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-green-700 w-full p-3 ">
    <ul className="flex gap-4 font-semibold text-xl text-slate-50 :text-orange-500">
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
  </nav>
  )
}

export default Header