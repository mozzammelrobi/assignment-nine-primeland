import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";



const Register = () => {
    const { createUser } = useContext(AuthContext)


    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, photo, email, password)

        // create user
        createUser(email, password)
            .then(result => {
                console.log(result.user)
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

                        <div className="form-control">
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p> <Link to='/login' className="text-purple-700">Login</Link></p>
                    </form>
                  
                </div>
            </div>
        </div>
    );
};

export default Register;