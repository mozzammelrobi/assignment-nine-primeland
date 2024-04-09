import { useContext, useRef } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Helmet } from "react-helmet-async";


const Profile = () => {
    const { user, logOut } = useContext(AuthContext)

    const image = useRef()
    console.log(image)
    const handleLogOut = () => {
        logOut()
    }

    const handleUpdate = () => [

    ]

    return (
        <div className="  container mx-auto min-h-[100vh-60px]">

            <Helmet>
                <title>primeLnad | Profile</title>
            </Helmet>
            <div >
                <div className="avatar">
                    <div className="w-9 rounded-full">
                        <img src={user?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                    </div>
                </div>
            </div>
            <ul className=" p-5 shadow border-2  rounded-box ">
                <li><a className="text-2xl font-bold">Name: {user?.displayName} </a></li>



                <div className="mt-5">
                    <input type="file" ref={image} />

                    <button onClick={handleUpdate} className="btn btn-sm btn-secondary">Update</button>
                </div>

                <li><button  
                className="btn btn-sm btn-primary mt-5"
                onClick={handleLogOut}>LogOut</button></li>
            </ul>


        </div>
    );
};

export default Profile;