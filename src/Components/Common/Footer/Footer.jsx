import React from "react";
import styled from "styled-components";
import { APP_NAME } from "../../../Utils/ApplicationConstant";

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px;
  background-color: #f8f8f8;
  border-top: 1px solid #e7e7e7;
  font-size: 12px;
`;

const SocialMediaSection = styled.div`
  display: flex;
  gap: 25px;
  padding: 40px 0;
`;

const MenuSection = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: 25px;
  padding: 40px 0;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.2);
  }
`;
const MenuItem = styled.div`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialMediaSection>
        <Icon src="./facebook.svg" alt="Facebook" />
        <Icon src="./instagram.svg" alt="Instagram" />
        <Icon src="./youtube.svg" alt="YouTube" />
        <Icon src="./x.svg" alt="X" />
      </SocialMediaSection>
      <MenuSection>
        <MenuItem>© 2024, {APP_NAME}</MenuItem>
        <MenuItem>Refund policy</MenuItem>
        <MenuItem>Contact information</MenuItem>
        <MenuItem>Privacy policy</MenuItem>
        <MenuItem>Terms of service</MenuItem>
        <MenuItem>Shipping policy</MenuItem>
      </MenuSection>
    </FooterContainer>
  );
};

export default Footer;
