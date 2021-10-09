import React from "react";
import ReactDOM from "react-dom";

import "./SideDrawer.css";

const SideDrawer = (props) => {
  const content = <aside className="side-drawer">{props.children}</aside>;
  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};
//if use ReactDom.render, it will always rendor the background of the portal

export default SideDrawer;

// const SideDrawer = (props) => {
//   return <aside className="side-drawer">{props.children}</aside>;
// };

// export default SideDrawer;
// ReactDOM.render(<SideDrawer />, document.getElementById("drawer-hook"));
