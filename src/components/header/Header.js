import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";
// try
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
// ends

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 2,
    // border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <MenuIcon className="hamburger__menu" />

      <Link to="/">
        <img
          className="header__logo"
          alt="amazon"
          src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
        />
      </Link>

      <div className="header__search">
        <input
          className="header__searchInput"
          placeholder="Search coming soon.."
          type="text"
        />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <img
          className="header__flag"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1350px-Flag_of_India.svg.png"
          alt="India_flag"
        />

        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              {/* {console.log(user.email)} */}
              {user ? `Hello, ${user.email}` : "Hello, Guest"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          {/* <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className=" header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div> */}

          {/* try */}
          <div className="header__optionBasket">
            <StyledBadge badgeContent={basket?.length} color="secondary">
              <ShoppingCartOutlinedIcon />
            </StyledBadge>
          </div>
          {/* try ends */}
        </Link>
      </div>
    </div>
  );
}

export default Header;
