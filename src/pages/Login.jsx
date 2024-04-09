import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";


const Login = () => {
    const [error, setError] = useState('')
    const { loginUser, loginGoogle, loginGithub, user } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

  
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        const { email, password } = data

        loginUser(email, password)
            .then(result => {
                console.log(result.user)
                toast.success('login successfully')
            })
            .catch(error => {
                console.log('the error is', error.message)
                if(error.message == 'Firebase: Error (auth/invalid-credential).'){
                    toast.error('password dont match')
                }
                setError( error.message)
            })
    }

    const handleGooleLogin = () => {
        loginGoogle()
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
                        onSubmit={handleSubmit(onSubmit)}
                        className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <input type="password" name="password" placeholder="password" className="input input-bordered"
                                {...register("password", { required: true })}
                            />
                            {errors.password && <span className="text-red-500">This field is required</span>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <p className="text-red-500">{error}</p>
                        <div className="form-control mt-6">
                            <button className="btn btn-secondary">Login</button>
                        </div>
                        <div>
                            <div>
                                <p className="divider">continue with</p>
                                <div className="flex justify-center gap-5">
                                    <FaGoogle onClick={handleGooleLogin} size={30} className="cursor-pointer hover:scale-110" />
                                    <FaGithub size={30} onClick={handleGithubLogin} className="cursor-pointer hover:scale-110" />
                                </div>
                            </div>
                        </div>
                        <p className="text-center text-2xl">please <Link className="text-purple-800 font-bold" to='/register'>Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;