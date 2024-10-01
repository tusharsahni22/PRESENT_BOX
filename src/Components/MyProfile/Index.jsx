import Footer from "../Common/Footer";
import Head from './Head'
import Header from '../Common/Header'
import styled from 'styled-components'

const Wrapper = styled.div`

`;

function Index() {
       
    return (
        <Wrapper>
            <Header/>
            <Head />
            <Footer />
        </Wrapper>
    )
}

export default Index