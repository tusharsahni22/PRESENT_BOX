import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  position: fixed;
  top: 100px; /* Adjust this value based on the height of your header */
  left: 0;
  width: 30%;
  height: 100%;
  background-color: white;
  z-index: 999;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

const SidebarOption = styled.div`
  padding: 15px 30px;
  cursor: pointer;
  &:hover {
    background-color: grey;
  }
`;

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarOption>Home</SidebarOption>
      <SidebarOption>Login</SidebarOption>
      <SidebarOption>Track Your Order</SidebarOption>
      <SidebarOption>Contact Us</SidebarOption>
      <SidebarOption>FAQ</SidebarOption>
    </SidebarContainer>
  );
}

export default Sidebar;