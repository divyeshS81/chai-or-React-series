import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = () => {
        
        setUser({username, password})
    }

  return (
    <div>
        <h2>Login</h2>
        <input type="text" 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='usename'
          /> {" "}
        <input type="text" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password'  />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login