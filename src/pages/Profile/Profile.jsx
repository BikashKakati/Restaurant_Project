import React, { useContext } from 'react'
import { AuthContext} from '../../context/AuthContextProvider'
import { useNavigate } from 'react-router-dom';

function Profile() {
    const {logOut} = useContext(AuthContext);
    const Navigate = useNavigate();

    function handleLogout(){
        logOut();
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