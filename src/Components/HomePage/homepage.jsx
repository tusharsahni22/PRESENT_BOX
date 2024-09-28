import React,{useEffect,useState} from 'react'
import ItemListing from '../Common/HompageNewListings'
import axios from 'axios'

function Homepage() {
  const [products, setProducts] = useState([]);
    useEffect(() => {
      axios.get("https://fakestoreapi.com/products").then((response) => {
        response.data.forEach((item) => {
          item.offerPrice = (item.price-10) ;
        });
        setProducts(response.data);
      });
    }, []);

  return (
    <div>
      <ItemListing title="New Listings" products={products}/>
      <ItemListing title="Trendinf"/>

    </div>
  )
}

export default Homepage