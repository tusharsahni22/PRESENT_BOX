import React from 'react'
import HomePageNewListing from './homepageNewListing'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 0 10%;
  `;


function Index({title, ...props}) {
  return (
    <Wrapper>
      <HomePageNewListing title={title} props={props}/></Wrapper>
  )
}

export default Index