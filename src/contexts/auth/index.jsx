import {createContext} from 'react';

import api from '../../services/api';

export const AuthContext = createContext({});

function AuthProvider({children}) {

    async function handleRegister(data) {
        const response = await api.post('/auth/register', {
            "name": data.name,
            "email": data.email,
            "password": data.password,
        })
    }

    return(
        <AuthContext.Provider value={{
            handleRegister
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;