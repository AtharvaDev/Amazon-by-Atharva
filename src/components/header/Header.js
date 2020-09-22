import React from "react";
import "./Header.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";
// try
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
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
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              {/* {console.log(user.email)} */}
              {user ? user.email : "Hello Guest"}
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
              <ShoppingCartOutlinedIcon  />
            </StyledBadge>
          </div>
          {/* try ends */}
        </Link>
      </div>
    </div>
  );
}

export default Header;
