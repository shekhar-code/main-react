// import UserContext from "../context/UserContext";
import { useContext , useState } from "react";
import UserContext from "../context/UserContext";

function Login(){

  const [username , setUsername] = useState(null)
  const [password , setPassword] = useState(null)

  const {setUser} = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault()

    setUser({username , password})
  }

  return (
    <div>
        <h2>Login</h2>
        <input type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value) }
        placeholder='username'  />
        {" "}
        <input type='text' 
        value={password}
        onChange={(e) => setPassword(e.target.value) }
        placeholder='password'  />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login;