import React from 'react'
import Product from './products'
import Header from '../Common/Header/header'
import Footer from '../Common/Footer/Footer'
import { useLocation } from 'react-router-dom'

function Index() {
  const state = useLocation().state
  return (
    <>
    <Header />
    <Product state={state} />
    <Footer />
    </>
  )
}

export default Index