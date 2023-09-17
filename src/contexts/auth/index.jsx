import {createContext, useContext} from 'react';

import api from '../../services/api';

import { UserContext } from '../user';

export const AuthContext = createContext({});

function AuthProvider({children}) {

    const {setUserData} = useContext(UserContext);

    async function handleRegister(data) {
        const response = await api.post('/auth/register', {
            "name": data.name,
            "email": data.email,
            "password": data.password,
        })
    }

    async function handleLogin(data) {
        const response = await api.post('/auth/login', {
            "email": data.email,
            "password": data.password,
        })

        //console.log(response.data.user);
        setUserData(response.data.user);
    }

    return(
        <AuthContext.Provider value={{
            handleRegister,
            handleLogin
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;