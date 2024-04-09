import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form"
import { useNavigate, Link } from "react-router-dom";


const Register = () => {
    const [error, setError] = useState('')
    const [showPassword, setShowPassword] = useState(true)
    const navigate = useNavigate();
    const {  createUser, updateUserProfile, logOut } = useContext(AuthContext)

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const { name, email, password, photo } = data
        console.log(name, email, password)

        if (!/^(?=.*[a-z])(?=.*[A-Z])/.test(password)) {
            setError('password must have uppercase nad lowercase')
            return
        }
        setError('')
        createUser(email, password)

        //  create user
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                updateUserProfile(name, photo)
                    .then(() => { })
                toast.success('Register success')
                navigate("/profile");
                logOut()


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
                        onSubmit={handleSubmit(onSubmit)}
                        className="card-body">
                        <div className="form-control">
                            <input type="text" name="name" placeholder="Name" className="input input-bordered"
                                {...register("name", { required: true })}
                            />
                            {errors.name && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered"
                                {...register("photo")}
                            />
                            {errors.photo && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <input type="email" name="email" placeholder="email" className="input input-bordered"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control relative">
                            <input type={`${showPassword ? "password" : "text"}`} name="password" placeholder="password" className="input input-bordered"
                                {...register("password", { required: true })}
                            />
                            {errors.password && <span className="text-red-500">This field is required</span>}
                            {error}
                            <div
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-4 cursor-pointer">
                                {
                                    showPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />
                                }
                            </div>
                        </div>
                        <div className="text-red-700">
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