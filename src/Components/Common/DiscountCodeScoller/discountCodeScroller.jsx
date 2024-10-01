import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const DISCOUNT_SCROLLER = ['GRAB 20% EXTRA OFF: USE CODE FLAT20  T&C Apply',"FREE SHIPPING ON ORDERS ABOVE RS. 500"];

const DiscountCodeContainer = styled.div`
display: flex;
border: 1px solid #ECECEC;
height: 40px;
justify-content: center;
align-items: center;
`;

const DiscountCodeScroller = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % DISCOUNT_SCROLLER.length);
    }, 5000);


    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <DiscountCodeContainer >
      {DISCOUNT_SCROLLER[currentIndex]}
    </DiscountCodeContainer>
  );
};

export default DiscountCodeScroller;
