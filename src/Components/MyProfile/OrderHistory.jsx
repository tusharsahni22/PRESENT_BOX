import React, { useEffect } from 'react'
import styled from 'styled-components'
import {RiArrowDropRightLine} from "react-icons/ri";
// import { getOrderDetails } from '../Services/profile';

const Wrapper = styled.div`
width: 100%;

`;
const Box = styled.div`
padding: 40px 5%;
// margin: 60px 0;
border-radius: 15px;
box-shadow: 0 2px 5px #00000029, 0 2px 10px #0000001f;
`;
const Details = styled.div`
display: flex;
justify-content: space-between;
@media (max-width:767px){
  display: block;
}
`;
const Ids = styled.div`
display: flex;
flex-direction: column;
`;
const Datee = styled.div`
margin-right: 20px;
font-size: 15px !important;
color: rgb(153,153,153);
@media (max-width:767px){
  margin: 0 10px 10px 0;
}
`;
const OrderId = styled.div`
 margin-right: 20px;
 color: rgb(153,153,153);;
 font-size: 15px !important;
 @media (max-width:767px){
  margin: 0 10px 10px 0;
  width: 85px;
}
`;
const OrderDetails = styled.div`
    font-size: 15px;
    color:black;
    display: flex;
    cursor: pointer;
@media (max-width:767px){
  margin: 10px 0 0 0;
}
`;
const Line = styled.div`
width: 100%;
height: 1px;
background-color: #000000;
opacity: 0.2;
margin: 20px 0;
`;
const Product = styled.div`
display: flex;
margin:0 0 20px 0;
`;
const Img = styled.img`
width: 100px;
height: 100px;
cursor: pointer;
`;
const Title = styled.div`
margin: 10px 0 0 20px;
cursor: pointer;
`;
const DateText = styled.div`
font-size: 15px;
font-weight: 700;
`;
const OrderIdText = styled.div`
font-size: 15px;
font-weight: 700;
`;
const SideArrow = styled(RiArrowDropRightLine)`
margin-left: 10px;
font-size: 20px;
color: black;
`;
const Welcome = styled.div`
font-size: 30px;
color: var(--contentTextColor);
font-weight: 400;
letter-spacing: 0.025em;
color: #000000;
margin-top: 15px;
margin-bottom: 30px;
width: 100%;
text-align: center;
`;
const OrderContainer = styled.div`
height: 100vh;
overflow-y: auto;
gap: 20px;
display: flex;
flex-direction: column;
padding: 10px 20px;
`;
const OrderSummary = styled.div`
display: flex;
flex-direction: column;
padding: 20px 0;
`;
const SubTotalContainer = styled.div`
display: flex;
justify-content: space-between;
`;
const SubTotal = styled.div`
font-size: 15px;
font-weight: 700;
`;
const SubTotalAmount = styled.div`
font-size: 15px;
font-weight: 700;
`;
const ShippingContainer = styled.div`
display: flex;
justify-content: space-between;
`;
const Shipping = styled.div`
font-size: 15px;
font-weight: 700;
`;
const ShippingAmount = styled.div`
font-size: 15px;
font-weight: 700;
`;
const TotalContainer = styled.div`
display: flex;
justify-content: space-between;
`;
const Total = styled.div`
font-size: 15px;
font-weight: 700;
`;
const TotalAmount = styled.div`
font-size: 15px;
font-weight: 700;
`;
const ItemDetails = styled.div`
font-size: 15px;
font-weight: 700;
margin: 20px 0;
`;
const Price = styled.div`
font-size: 15px;
font-weight: 700;
margin: 10px 0 0 20px;
`;
const Container = styled.div`
display: flex;
padding: 40px 10px;
height: max-content;
border-radius: 15px;
box-shadow: 0 2px 5px #00000029, 0 2px 10px #0000001f;
`;


function OrderHistory({name, greeting}) {
  const [orderList, setOrderList] = React.useState([])
  const [OrderDetailsExpanded, setOrderDetailsExpanded] = React.useState(false)
  const convertToDateFormat = (data) => {
    const date = new Date(data);
    const dateString = date.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    return dateString;
  }
  useEffect(() => {
    // getOrderDetails().then((response) => {
      // setOrderList(response.data)
      setOrderList([
      ])

  }, [])
  return (
    <Wrapper>
      
      <Welcome> {greeting}! {name?.split(" ")[0]}</Welcome>
      <OrderContainer style={{height:"100vh",overflowY:"auto"}}>
      {orderList.length===0 ? <Container>
        <div style={{display:"flex",justifyContent:"center",width:"100%"}}>No Orders Found</div>
      </Container>:""}
      {orderList.map((order)=>(
      <Box key={order._id}>
      <Details>
        <Ids>
        <div style={{display:"flex"}}>
        <Datee>Order Place on:</Datee>
        <DateText>{convertToDateFormat(order.createdAt)}</DateText>
        </div>
        <div style={{display:"flex"}}>
        <OrderId>Order Id: </OrderId>
        <OrderIdText>{order.orderId}</OrderIdText>
        </div>
        </Ids>
        <OrderDetails onClick={()=>{setOrderDetailsExpanded(!OrderDetailsExpanded)}}>{OrderDetailsExpanded ? "Hide Order Details" : "Show Order Details"} 
        <SideArrow />
        </OrderDetails>
      </Details>
      <Line></Line>
      {OrderDetailsExpanded ? <ItemDetails>Items Details</ItemDetails> : null}
      {order.items.map((item)=>(
      <Product key={item._id}>
        <Img src={item.product?.mainPicture}/>
        <div style={{display:"flex",flexDirection:"column"}}>
        <Title>{item.product?.title} / {item?.size?.toUpperCase()} / {item?.color?.toUpperCase()} </Title>
        {OrderDetailsExpanded?<Price>Price  {item.product.price}</Price>:""}
        </div>
      </Product>))}
      {OrderDetailsExpanded ? <div>
        <Line></Line>
      <OrderSummary>
        <SubTotalContainer>
          <SubTotal>Subtotal</SubTotal>
          <SubTotalAmount>{order.paymentMode==="cash"? `₹ ${order.total-100}`: order.total}</SubTotalAmount>
        </SubTotalContainer>
        <SubTotalContainer>
          <SubTotal>Saving</SubTotal>
          <SubTotalAmount>{order.paymentMode==="cash"? `₹ ${order.total-100}`: order.total}</SubTotalAmount>
        </SubTotalContainer>
        <ShippingContainer>
          <Shipping>Shipping</Shipping>
          <ShippingAmount>{order.paymentMode==="cash"? "₹ 100": "Free"}</ShippingAmount>
        </ShippingContainer>
        <Line/>
        <TotalContainer>
          <Total>Grand Total</Total>
          <TotalAmount>₹ {order.total}</TotalAmount>
        </TotalContainer>
      </OrderSummary>
      <Line/>
      <ShippingContainer>
        <Shipping>Shipping Address</Shipping>
        <ShippingAmount>{order.address.address} {order.address.landmark} {order.address.pincode} {order.address.city} {order.address.state}</ShippingAmount>
      </ShippingContainer>

      </div> : null }
      </Box>
      ))}
      
      {/* {orderList.length===0 && <div style={{textAlign:"center",marginTop:"20px"}}>No Orders Found</div>} */}
      </OrderContainer>
    </Wrapper>
  )
}

export default OrderHistory