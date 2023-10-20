import { useContext } from "react";
import { AuthContext } from "../authentication/AuthProvider";
import { Link } from "react-router-dom";


const Profile = () => {
    const { user } = useContext(AuthContext)
    const { displayName, email, photoURL } = user;
    console.log(user.displayName);

    return (
        <div className="max-w-7xl mx-auto my-10">
            <div className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-blue-400">
                <div className="relative">
                    {
                        user?.photoURL ?
                        <img className="w-full h-48 object-cover" src={photoURL} alt="Profile Image" /> :
                        <img className="w-full h-48 object-cover" src="https://i.ibb.co/z5M8kX0/blank-profile-picture-973460-1280.png" alt="Profile Image" />
                    }

                </div>
                <div className="px-6 py-4">
                    <div className="text-xl font-semibold text-gray-800">
                        {user?.email && displayName}
                    </div>
                    <p className="text-gray-600">Front-end Developer</p>
                </div>
                <div className="px-6 py-4">
                    <span className="inline-block px-2 py-1 font-semibold text-teal-900 bg-teal-200 rounded-full">Web</span>
                    <span className="inline-block px-2 py-1 font-semibold text-indigo-900 bg-indigo-200 rounded-full">UI/UX</span>
                    <span className="inline-block px-2 py-1 font-semibold text-purple-900 bg-purple-200 rounded-full">Design</span>
                </div>
                <div className="px-6 py-4">
                    <Link to='' className="text-blue-500 hover:underline">View Profile</Link>
                </div>
            </div>
        </div>
    );
};

export default Profile;