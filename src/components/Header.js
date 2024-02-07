import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus()
  const items = useSelector((state) => state.cart.items)
    return (
      <div className="header flex justify-between items-center border">
        <div className="logo-container p-2">
          <img className="logo w-32 rounded-full" src={LOGO_URL}/>
        </div>
        <div className="nav-items px-3 text-xl">
          <ul className="flex gap-4 p-4 m-4">
            <li className="px-4">
              {onlineStatus === true ? '✅':'🔴'}
            </li>
            <li className="px-4">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="px-4">
              <Link to={"/about"}>About Us</Link>
            </li>
            <li className="px-4">
              <Link to={"/about"}>Contact Us</Link>
            </li>
            <li className="px-4">Cart({items.length})</li>
          </ul>
        </div>
      </div>
    )
}

export default Header;