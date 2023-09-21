import { Link, Outlet } from 'react-router-dom'

function Auth() {
  return (
    <div >
      <div >
      <Link to={"/auth/login"}>Login</Link>
       <Link to={"/auth/signup"}>Signup </Link>
      </div>
       
      <Outlet/>
    </div>
  )
}

export default Auth
