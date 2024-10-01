import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ProductsPage = styled.div`
  display: flex;
  padding: 20px;
  font-family: Arial, sans-serif;
`

const Sidebar = styled.div`
  width: 250px;
  padding: 20px;
  border-right: 1px solid #ddd;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

const FilterTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 20px;
  color: #333;
`

const FilterGroup = styled.div`
  margin-bottom: 20px;
`

const FilterLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 1em;
  cursor: pointer;
  color: #555;
`

const FilterCheckbox = styled.input`
  margin-right: 10px;
`

const Content = styled.div`
  flex: 1;
  padding: 20px;
`

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-size: 2.5em;
  color: #333;
  font-weight: bold;
`

const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 0;
  list-style: none;
`

const ProductItem = styled.li`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
  transition: transform 0.2s;
  background-color: #fff;
  width: 250px;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;
`

const ProductName = styled.div`
  font-size: 1.2em;
  margin-bottom: 10px;
  font-weight: bold;
  color: #333;
`

const ProductPrice = styled.div`
  color: #888;
  margin-bottom: 10px;
  font-size: 1.1em;
`

const DiscountedPrice = styled.div`
  color: #e74c3c;
  margin-bottom: 10px;
  font-size: 1.1em;
`

const DiscountPercentage = styled.div`
  color: #27ae60;
  margin-bottom: 10px;
  font-size: 0.9em;
`

const ProductCategory = styled.div`
  font-size: 0.9em;
  color: #aaa;
  margin-bottom: 10px;
`

const ProductRating = styled.div`
  font-size: 0.9em;
  color: #f39c12;
  margin-bottom: 10px;
`

const BuyButton = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: #0056b3;
  }
`

function Products(props) {
  const [products, setProducts] = useState([])
  const [filter, setFilter] = useState({
    electronics: false,
    jewelery: false,
    mensClothing: false,
    womensClothing: false,
  })

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then(response => {
      const productsWithDiscount = response.data.map(product => ({
        ...product,
        discountPercentage: Math.floor(Math.random() * 30) + 10, // Random discount between 10% and 40%
      }))
      setProducts(productsWithDiscount)
    })
  }, [])

  const handleFilterChange = (e) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.checked,
    })
  }

  const filteredProducts = products.filter(product => {
    const categoryMatch =
      (filter.electronics && product.category === 'electronics') ||
      (filter.jewelery && product.category === 'jewelery') ||
      (filter.mensClothing && product.category === "men's clothing") ||
      (filter.womensClothing && product.category === "women's clothing") ||
      (!filter.electronics && !filter.jewelery && !filter.mensClothing && !filter.womensClothing)
    return categoryMatch
  })

  return (
    <ProductsPage>
      <Sidebar>
        <FilterTitle>Filters</FilterTitle>
        <FilterGroup>
          <FilterLabel>
            <FilterCheckbox
              type="checkbox"
              name="electronics"
              checked={filter.electronics}
              onChange={handleFilterChange}
            />
            Electronics
          </FilterLabel>
          <FilterLabel>
            <FilterCheckbox
              type="checkbox"
              name="jewelery"
              checked={filter.jewelery}
              onChange={handleFilterChange}
            />
            Jewelery
          </FilterLabel>
          <FilterLabel>
            <FilterCheckbox
              type="checkbox"
              name="mensClothing"
              checked={filter.mensClothing}
              onChange={handleFilterChange}
            />
            Men&#39;s Clothing
          </FilterLabel>
          <FilterLabel>
            <FilterCheckbox
              type="checkbox"
              name="womensClothing"
              checked={filter.womensClothing}
              onChange={handleFilterChange}
            />
            Women&#39;s Clothing
          </FilterLabel>
        </FilterGroup>
      </Sidebar>
      <Content>
        <Title>{props.state.title}</Title>
        <ProductList>
          {filteredProducts.map(product => {
            const discountedPrice = (product.price * (1 - product.discountPercentage / 100)).toFixed(2)
            return (
              <ProductItem key={product.id}>
                <ProductImage src={product.image} alt={product.title} />
                <ProductName>{product.title.slice(0,10)}</ProductName>
                <ProductPrice>Original: ${product.price}</ProductPrice>
                <DiscountedPrice>Discounted: ${discountedPrice}</DiscountedPrice>
                <DiscountPercentage>Save {product.discountPercentage}%</DiscountPercentage>
                <ProductCategory>{product.category}</ProductCategory>
                <ProductRating>Rating: {product.rating.rate} ({product.rating.count} reviews)</ProductRating>
                <BuyButton>Buy Now</BuyButton>
              </ProductItem>
            )
          })}
        </ProductList>
      </Content>
    </ProductsPage>
  )
}

export default Products