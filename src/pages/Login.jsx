import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FaGithub } from "react-icons/fa";


const Login = () => {
    const { loginUser, loginGithub } = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        // login user
        loginUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGithubLogin = () => {
        loginGithub()
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content">

                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form
                        onSubmit={handleLogin}
                        className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">

                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div>
                            <FaGithub
                             onClick={handleGithubLogin} 
                            className="cursor-pointer hover:scale-110"
                            />
                        </div>
                        <p> <Link className="text-purple-800" to='/register'>Register</Link></p>
                    </form>
                  
                </div>
            </div>
        </div>
    );
};

export default Login;