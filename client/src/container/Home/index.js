import React from "react";
import useWindowSize from "../../helpers/windowSize";
import { SideMenuWrapper } from "./style";
import SideMenus from "../../components/SideBar";

export default function Home() {
  const { width } = useWindowSize();
  return (
    <div className="container-fluid">
      {width > 1000 ? (
        <SideMenuWrapper>
          <SideMenus />
        </SideMenuWrapper>
      ) : null}
      <div className="row">
        <div className="col-sm-12">hi</div>
      </div>
    </div>
  );
}
