import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FaGithub } from "react-icons/fa";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
    const [error, setError] = useState('')
    const { loginUser, loginGithub, user } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location)

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        setError('')

        loginUser(email, password)
            .then(result => {
                console.log(result.user)
                toast.success('login successfully')
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }

    const handleGithubLogin = () => {
        loginGithub()
    }

    useEffect(() => {
        if (user) {
            navigate(location.state)
        }
    }, [user])

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
                        {error}
                        <div className="form-control mt-6">
                            <button className="btn btn-secondary">Login</button>
                        </div>
                        <div>
                            <FaGithub
                                size={30}
                                onClick={handleGithubLogin}
                                className="cursor-pointer hover:scale-110"
                            />
                        </div>
                        <p className="text-center text-2xl">please <Link className="text-purple-800 font-bold" to='/register'>Register</Link></p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;