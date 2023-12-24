import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import ClickOutside from "./ClickOutside";
import "../App.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function MySideNav() {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  return (
    <ClickOutside
      onClickOutside={() => {
        setExpanded(false);
      }}
    >
      <SideNav
        expanded={expanded}
        onToggle={(expanded) => {
          setExpanded(expanded);
        }}
        style={{ backgroundColor: "#567665" }}
        onSelect={(selected) => {
          navigate("/" + selected);
          console.log(selected);
        }}
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="one">
          <NavItem eventKey="one">
            <NavIcon>
              <i className="fa-solid fa-1" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>reverseString</NavText>
          </NavItem>
          <NavItem eventKey="two">
            <NavIcon>
              <i className="fa-solid fa-2" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>filterArray</NavText>
          </NavItem>
          <NavItem eventKey="three">
            <NavIcon>
              <i className="fa-solid fa-3" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>formatName</NavText>
          </NavItem>
          <NavItem eventKey="four">
            <NavIcon>
              <i className="fa-solid fa-4" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>ConditionalRendering</NavText>
          </NavItem>
          <NavItem eventKey="five">
            <NavIcon>
              <i className="fa-solid fa-5" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Counter</NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </ClickOutside>
  );
}

export default MySideNav;
