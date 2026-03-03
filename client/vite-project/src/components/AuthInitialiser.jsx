import {useDispatch, useSelector} from 'react-redux';
import { setLogin } from '../redux/authSlice';
import { useEffect } from 'react';
import axios from '../services/api';




const AuthInitialiser = ()=>{
    const dispatch = useDispatch();

    const token = useSelector((state)=>state.auth.token);
    const role = useSelector((state)=>state.auth.role);

    useEffect(()=>{
        const loadUser = async ()=>{
            try {
                const res = await axios.get("/api/auth/profile");
            dispatch(setLogin({
                user: res.data.user,
                token: token,
                role:role
            }))
            console.log("User Restored!")
            } catch (error) {
                console.error(error||"Auto Restored failed");
            }
        }

        if(token){
            loadUser();
        }



    }, [token])
            return null;
}

export default AuthInitialiser;