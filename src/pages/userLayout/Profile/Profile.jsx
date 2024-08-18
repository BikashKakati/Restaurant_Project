import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Wrapper from '../../../components/Ui/Wrapper';
import { handleLogOut } from '../../../services/redux/slices/authSlice';
import profileImg from "../../../assets/profile.png";

function Profile() {
    const {currentUser} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const Navigate = useNavigate();

    useEffect(() => {
        window.scroll(0, 0);
    }, [])

    function handleLogout() {
        dispatch(handleLogOut());
        Navigate("/");
    }

    function handleEdit(){

    }
    return (
        <div className="w-full min-h-dvh pt-20">
            <Wrapper className="mb-20">
            <div className="max-w-[50rem] min-h-32 bg-white shadow-custom mx-auto p-6 rounded-lg">
            <div className="flex items-center space-x-6 mb-6">
                <img
                    src={currentUser?.photoUrl || profileImg}
                    alt="Profile"
                    className="w-24 h-24 rounded-full border-2 border-gray-300"
                />
                <div>
                    <h1 className="text-2xl font-semibold text-gray-800">{currentUser?.name || "Your Name"}</h1>
                    <p className="text-gray-600">{currentUser?.email || "Your Email"}</p>
                    {currentUser?.isVerified ? (
                        <span className="text-green-500 text-sm">Email Verified</span>
                    ) : (
                        <span className="text-red-500 text-sm">Email Not Verified</span>
                    )}
                </div>
            </div>
            <div className="flex justify-end space-x-4">
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg"
                    onClick={handleEdit}
                >
                    Edit Profile
                </button>
                <button
                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-lg"
                    onClick={handleLogout}
                >
                    Log out
                </button>
            </div>
        </div>
            </Wrapper>
        </div>
    )
}

export default Profile