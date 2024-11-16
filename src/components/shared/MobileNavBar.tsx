import { Link } from "@tanstack/react-router";
import React from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
function MobileNavBar() {
  return (
    <div>
      <div className="lg:hidden flex px-5 absolute sm:top-4 top-[0.625rem] left-0">
        <MenuRoundedIcon />
      </div>
      <div className="flex flex-row justify-center items-center sm:py-3 py-2 lg:hidden m-auto w-full font-serif">
        <div className="">
          <Link to="/">
            <h1 className="sm:text-2xl text-lg font-serif uppercase">GBR Company Co.</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MobileNavBar;
