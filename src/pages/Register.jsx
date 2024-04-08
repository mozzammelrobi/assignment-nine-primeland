import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from "react-icons/fa";



const Register = () => {
    const [error, setError] = useState('')
    const [showPassword, setShowPassword]  = useState(true)
    const { createUser } = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, photo, email, password)

        if(!/(?=.*[a-z])(?=.*[A-Z]).+/.test(password)){
            setError('password must have lowercase and uppercase alPhabet')
            return 
        }

        // create user
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                toast.success('Register success')
                
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="hero  bg-base-200">
            <div className="hero-content">

                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form
                        onSubmit={handleRegister}
                        className="card-body">
                        <div className="form-control">
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="text" name="photo" placeholder="Photo" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <input type={`${showPassword? "password": "text"}`} name="password" placeholder="password" className="input input-bordered" required />
                            <div 
                            onClick={()=> setShowPassword(!showPassword)}
                            className="absolute right-3 top-4 cursor-pointer">
                               {
                                showPassword ?  <FaEye size={20} /> : <FaEyeSlash size={20}/>
                               }
                            </div>
                        </div>
                        <div className="text-red-700">
                            {error}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-secondary">Register</button>
                        </div>
                        <p> <Link to='/login' className="text-purple-700 text-2xl">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;