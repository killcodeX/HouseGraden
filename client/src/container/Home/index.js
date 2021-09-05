import React from "react";
import SideMenus from "../../components/SideBar";

export default function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-2"><SideMenus/></div>
        <div className="col-sm-10"></div>
      </div>
    </div>
  );
}
