import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ShowcaseContainer = styled.div`
  padding: 20px;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 40px;
`;

const ProductCard = styled.div`
  width: 200px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #fff;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 150px;
  object-fit: contain;
`;

const ProductName = styled.h2`
  font-size: 1.2em;
  text-align: center;
  margin: 10px 0;
  flex-grow: 1;
`;

const PriceSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ProductPrice = styled.span`
  text-decoration: line-through;
  color: lightgrey;
`;

const OfferPrice = styled.span`
  font-weight: bold;
  color: red;
`;

// const Discount = styled.span`
//   color: green;
// `;

const Title = styled.span`
  font-size: 1.5em;
  font-style: italic;
  font-weight: bold;
`;

const Div = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 1.2em;
  color: #9D9D9D;
  cursor: pointer;
`;

const Sale = styled.div`
  position: relative;
  left: 10px;
  width: 30px;
  color: white;
  background-color: black;
  border-radius: 30px;
  color: white;
  padding: 5px;
  font-size: 0.8em;
  text-align: center;
`;


const HomepageNewListing = ({ title , props }) => {
  const [Items, setItems] = useState([]);
  useEffect(() => {
    setItems(props.products);
  }, [props.products]);

  return (
    <ShowcaseContainer>
      <Title>{title}</Title>
      <ProductGrid>
        {Items?.slice(0, 4).map((item, index) => (
          <ProductCard key={index}>
            <ProductImage src={item.image} alt={item.name} />
            {
              <Sale>Sale</Sale>}
            <ProductName>{item.title.slice(0,10)}</ProductName>
            <PriceSection>
              <ProductPrice>${item.price}</ProductPrice>
              <div>
              <OfferPrice>${item.offerPrice}</OfferPrice>
              {/* <Discount>{item.discount}% off</Discount> */}
              </div>
            </PriceSection>
          </ProductCard>
        ))}
      </ProductGrid>
      <Div>View All</Div>
    </ShowcaseContainer>
  );
};

export default HomepageNewListing;