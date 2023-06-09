import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/">Home</SidebarLink>
        <SidebarLink to="/">About</SidebarLink>
        <SidebarLink to="/">menu</SidebarLink>
        <SidebarLink to="/">Pizza</SidebarLink>
        <SidebarLink to="/">contact us</SidebarLink>
        <SidebarLink to="/">Desserts</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
        <SidebarRoute to="/">Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
