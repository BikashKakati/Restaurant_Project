import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { setAuthModel } from '../../services/redux/slices/authSlice';

function PrivateRoute({ children }) {
  const { currentUser } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate  = useNavigate();
  if(!currentUser){
    dispatch(setAuthModel(true));
    return navigate("/");
  }
  return children;
}

export default PrivateRoute
