import ItemListing from '../Common/HompageNewListings'
import useFetchWithCache from '../Common/CustomQuery/useFetchWithCache';

function Homepage() {

    const {data,isLoading,error} = useFetchWithCache("https://fakestoreapi.com/products");

  return (
    <div>
      <ItemListing title="New Listings" products={data} loading={isLoading} error={error}/>
      <ItemListing title="Trending"/>
    </div>
  )
}

export default Homepage