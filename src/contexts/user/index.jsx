import { useState, createContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext({});

function UserProvider({children}) {

    const [userData, setUserData] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem('user');

        if(!user) {
            setUserData(JSON.parse(user));
        }else {
            navigate('/login');
        }
    } , []);


    useEffect(() => {
        if(userData) {
            localStorage.setItem('user', JSON.stringify(userData))
        }
    } , [userData])

    return(
        <UserContext.Provider
            value={{
                userData, 
                setUserData
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;