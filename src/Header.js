import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="amazon logo"
      />

      <div className="header__search">
        <input
          type="text"
          name="searchInput"
          id="searchInput"
          className="header__searchInput"
        />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <div className="header__optionLineOne">Hello Guest</div>
          <div className="header__optionLineTwo">Sign In</div>
        </div>
        <div className="header__option">
          <div className="header__optionLineOne">Returns</div>
          <div className="header__optionLineTwo">&amp; Orders</div>
        </div>
        <div className="header__option">
          <div className="header__optionLineOne">Your</div>
          <div className="header__optionLineTwo">Prime</div>
        </div>
      </div>

      <div className="header__optionBasket">
        <ShoppingBasketIcon />
        <div className="header__optionLineTwo header__basketCount">0</div>
      </div>
    </div>
  );
}

export default Header;