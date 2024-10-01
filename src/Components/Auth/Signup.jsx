import React from 'react';
import styled from 'styled-components';
import { IoCloseOutline } from 'react-icons/io5';
import { ToastContainer } from 'react-toastify';


const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(2px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const SignupForm = styled.form`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 480px;
  height: 550px;
  display: flex;
  flex-direction: column;
  outline: 1px solid black;
   @media (max-width: 768px) {
    width: 300px;
    height: 380px;
    overflow-y: scroll;
  }
`;

const Input = styled.input`
  margin-bottom: 30px;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  border: 1px solid #ccc;
`;

const Header = styled.div`
display : flex;
justify-content: space-between;
margin: 20px 0;
`
const Text = styled.div`
font-size: 24px;
font-weight: 400;
`;
const Email = styled.div`

`;
const Name = styled.div``;
const Mobile = styled.div``;
const Password = styled.div`

`;
const Field = styled.div`
display: block;
padding: 0 15%;
`;

const Close = styled(IoCloseOutline)`

`;

const Already = styled.div`
text-align: center;
`;
const Span = styled.span`
font-weight: 400;
color: #212121;
&:hover{
  cursor: pointer;
  color: gray;
}
`;
const Button = styled.div`
  margin-bottom: 30px;
  padding-top: 10px;
  border-radius: 5px;
  border: none;
  background-color: #212121;
  color: #fff;
  width: 100%;
  cursor: pointer;
  height: 40px;
  text-align: center;
`;

function SignupPage({toggleLogin,SwitchLogin}) {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [password, setPassword] = React.useState("");

   
  return (
    <Overlay>
      <SignupForm>
        <ToastContainer/>
      <Header>
            <div></div>
            <Text>Sign Up Now!</Text>
                        <Close onClick={()=>{toggleLogin()}}/> 
                    </Header>
                    <Field>
                    <Name>Name</Name>
                    <Input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Name" />
                    <Email>Email</Email>
                    <Input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Email" />
                    <Password>Password</Password>
                    <Input  value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Password" />
                    <Mobile>Mobile</Mobile>
                    <Input value={mobile} onChange={(e)=>{setMobile(e.target.value)}} type="number" placeholder="Mobile" />
                    <Button>Sign Up</Button>
                    </Field>
                    
                    <Already>Already have an account? <Span onClick={()=>{SwitchLogin()}}>Log In</Span></Already>
                   
                  </SignupForm>
                </Overlay>
              );
            }
            
 export default SignupPage;