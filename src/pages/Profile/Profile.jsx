import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleLogOut } from '../../services/redux/slices/authSlice';

function Profile() {
    const dispatch = useDispatch();
    const Navigate = useNavigate();

    function handleLogout(){
        dispatch(handleLogOut());
        Navigate("/login");
    }
    return (
        <div className="w-full h-full pt-20">
            <div className="max-w-[50rem] min-h-32 bg-white shadow-lg m-auto flex items-center justify-center">
                <button
                    className="bg-red-500 hover:bg-red-600 text-white py-3 px-11"
                    onClick={handleLogout}
                >
                    Log out
                </button>
            </div>
        </div>
    )
}

export default Profile