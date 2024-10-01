import React, { useState } from 'react'
import Login from './Login'
import SignUp from './Signup'

function App({ toggleLogin }) {
  const [isLogin, setIsLogin] = useState(true)

  const SwitchScreen = () => {
    setIsLogin(!isLogin)
  }

  return (
    <div>
      {isLogin ? <Login SwitchLogin={SwitchScreen} toggleLogin={toggleLogin} /> : <SignUp SwitchLogin={SwitchScreen} toggleLogin={toggleLogin}/>}
    </div>
  )
}

export default App