import React from 'react'
import Homepage from './homepage'
import Header from '../Common/Header'
import Styled from 'styled-components'
import Footer from '../Common/Footer/Footer';

const Container = Styled.div`
  `;

function Index() {
  return (
    <Container>
      <Header/>
      <Homepage/>
      <Footer/>
      </Container>
  )
}

export default Index