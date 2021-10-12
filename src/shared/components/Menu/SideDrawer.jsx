import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import "./SideDrawer.css";

const SideDrawer = (props) => {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className="side-drawer" onClick={props.onClick}>
        {props.children}
      </aside>
    </CSSTransition>
  );
  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};
//if use ReactDom.render, it will always rendor the background of the portal

export default SideDrawer;

// const SideDrawer = (props) => {
//   return <aside className="side-drawer">{props.children}</aside>;
// };

// export default SideDrawer;
// ReactDOM.render(<SideDrawer />, document.getElementById("drawer-hook"));
