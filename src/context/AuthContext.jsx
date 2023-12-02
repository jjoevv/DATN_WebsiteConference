import { createContext, useEffect, useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const AuthContext = createContext(null);

export const AuthContextProvider = (props) => {
    const [token, setToken] = useState(null)
    const [notiList, setNotiList] = useState([
        {
            noti_id: 1,
            noti_type_id: 1,
            noti_message: "ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD)",
            content: "has changed the notification date from 03/12/2023 to 01/01/2024" 
        }
    ])
    const navigate = useNavigate();
    const location = useLocation();

    const fakeAuth = () =>
        new Promise((resolve) => {
            setTimeout(() => resolve('2342f2f1d131rf12'), 250);
    });
    const handleLogin = async () => {
        const token = await fakeAuth();    
        setToken(true);
        const origin = location.state?.from?.pathname || '/home';
        navigate(origin);
    };

    const handleLogout = () => {
        setToken(null);
        navigate('/home');
      };
    return (
        <AuthContext.Provider 
            value={{
                token,
                notiList,
                onLogin: handleLogin,
                onLogout: handleLogout,
            }}>

            {props.children}

        </AuthContext.Provider>
    )
}
export const useAuth = () => {
    return useContext(AuthContext)
}

