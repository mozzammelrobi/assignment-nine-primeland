import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const Profile = () => {
    const {user, logOut} = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
    }

    const handleUpdate = () => [

    ]

    return (
        <div className="  container mx-auto">
        <div >
            <div className="avatar">
                <div className="w-9 rounded-full">
                    <img src={user?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" } />
                </div>
            </div>
        </div>
        <ul className=" p-2 shadow  rounded-box ">
            <li><a className="text-2xl font-bold">Name: {user?.displayName} </a></li>
            <li><button onClick={handleLogOut}>LogOut</button></li>
        </ul>

        <dir>
            <input type="file" />

            <button onClick={handleUpdate} className="btn btn-sm btn-secondary">Update</button>
        </dir>
    </div>
    );
};

export default Profile;