import { Link } from "react-router-dom"
import "./register.scss"

const Register = () => {
  return (
    <div className="register">
        <div className="card">
            <div className="left">
                <h1>Social Sphere</h1>
                <p>
                Explore today's picks from the Community.
                </p>
                <span>Do you have an Account?</span>
                <Link to="/login">
                <button>Login</button>
                </Link>
            </div>
            <div className="right">
                <h1>Register</h1>
                <form>
                    <input type="text" placeholder="Username"/>
                    <input type="text" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <input type="text" placeholder="Name"/>
                    <button>Register</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register