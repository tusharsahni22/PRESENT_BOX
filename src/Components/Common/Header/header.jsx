import React, { useState } from 'react';
import styled from 'styled-components';
import { APP_NAME } from '../../../Utils/ApplicationConstant';
import DiscountScroller from '../DiscountCodeScoller/discountCodeScroller';
import Sidebar from '../Sidebar';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderCenter = styled.div`
  flex-grow: 1;
  text-align: center;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

const BrandName = styled.h1`
  margin: 0;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
`;

const SearchInput = styled.input`
  flex-grow: 1;
  padding: 10px;
  font-size: 16px;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin: 0 10px;
  cursor: pointer;
`;

function Header() {
  const [togleSideBar, setToggleSideBar] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);

  return (
    <>
      {togleSideBar && <Sidebar />}
      <DiscountScroller />
      <HeaderContainer>
        {isSearchActive ? 
          <SearchContainer>
            <SearchInput type="text" placeholder="Search..." />
            <Icon src='./Cross.svg' alt="Close" onClick={() => setIsSearchActive(false)} />
          </SearchContainer>
         : 
          <>
            <HeaderLeft>
              <Icon onClick={() => setToggleSideBar(!togleSideBar)} src='./Menu.svg' alt="Menu" />
              <Icon src='./Search.svg' alt="Search" onClick={() => setIsSearchActive(true)} />
            </HeaderLeft>
            <HeaderCenter>
              <BrandName>{APP_NAME}</BrandName>
            </HeaderCenter>
            <HeaderRight>
              <Icon src='./User.svg' alt="User" />
              <Icon src='./ShoppingBag.svg' alt="Bag" />
            </HeaderRight>
          </>
        }
      </HeaderContainer>
    </>
  );
}

export default Header;