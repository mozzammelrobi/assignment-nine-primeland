import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import auth, { storage } from "../firebase/firebase.config";
import { updateProfile } from "firebase/auth";



const Profile = () => {
    const [image, setImgage] = useState(null)
    // const [url, setUrl] = useState(null)
    const { user, logOut } = useContext(AuthContext)
console.log(user)

    const handleLogOut = () => {
        logOut()
    }

    const handleImgChange = (e) => {
        if (e.target.files[0]) {
            setImgage(e.target.files[0])

        }
    }
    console.log(image)

    const handleUpdate = () => {
        const imageRef = ref(storage, "image")
        uploadBytes(imageRef, image).then(() => {
            getDownloadURL(imageRef)
                .then((url) => {
                    console.log(url)
                    updateProfile(auth.currentUser, { photoURL: url })
                    // setUrl(url)
                })

                .catch(error => {
                    console.log(error.message, "error from image url")
                })
            setImgage(null)

        })
            .catch(error => {
                console.log(error.message, "error from imageRef")
            })
    }

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
                <p>email: {user.email}</p>
                <div className="mt-5">
                    <input type="file" onChange={handleImgChange} />
                    <button onClick={handleUpdate} className="btn btn-sm btn-secondary">Update</button>
                </div>
                <li>
                    <button
                        className="btn btn-sm btn-primary mt-5"
                        onClick={handleLogOut}>LogOut</button>
                </li>
            </ul>
        </div>
    );
};

export default Profile;