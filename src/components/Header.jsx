import { CgProfile } from "react-icons/cg";
import { CiShoppingCart } from "react-icons/ci";
import { FaStore } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import "../styles/components/header.css";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="brandArea">
          <div className="logo">Logo</div>
          {/* <div className="logo">Umer Burger and resturant</div> */}
          <div className="orderType">
            <button>
              <FaTruckFast size={20} />
              <span className="ottag">Delivery</span>
            </button>
            <button>
              <FaStore size={20} />
              <span className="ottag">Pick-up </span>
            </button>
          </div>
        </div>
        <div className="userArea">
          <div className="cart">
            <CiShoppingCart  className="profileIcon"/>
          </div>
          <div className="profile">
            <CgProfile  className="profileIcon"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
``;
