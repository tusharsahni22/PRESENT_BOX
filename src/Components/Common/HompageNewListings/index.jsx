import React from 'react'
import HomePageNewListing from './homepageNewListing'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 0 10%;
  `;


function Index({title, ...props}) {
  if(props.loading) return <h1>Loading...</h1>
  if(props.error) return <h1>Error...</h1>
  return (
    <Wrapper>
      <HomePageNewListing title={title} props={props}/></Wrapper>
  )
}

export default Index