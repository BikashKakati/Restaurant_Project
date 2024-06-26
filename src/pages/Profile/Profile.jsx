import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Wrapper from '../../components/Ui/Wrapper';
import { handleLogOut } from '../../services/redux/slices/authSlice';

function Profile() {
    const {currentUser} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const Navigate = useNavigate();

    useEffect(() => {
        window.scroll(0, 0);
    }, [])

    function handleLogout() {
        dispatch(handleLogOut());
        Navigate("/login");
    }
    return (
        <div className="w-full min-h-dvh pt-20">
            <Wrapper className="mb-20">
                <div className="max-w-[50rem] w-full min-h-32 bg-white shadow-custom m-auto flex items-center justify-center flex-wrap">
                    <p className="basis-full text-center font-semibold">{currentUser.email}</p>
                    <button
                        className="bg-red-500 hover:bg-red-600 text-white py-3 px-11"
                        onClick={handleLogout}
                    >
                        Log out
                    </button>
                </div>
            </Wrapper>
        </div>
    )
}

export default Profile