import {createContext, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import api from '../../services/api';
import { UserContext } from '../user';

import { toast } from 'react-toastify';

export const AuthContext = createContext({});

function AuthProvider({children}) {

    const {userData, setUserData} = useContext(UserContext);

    const navigate = useNavigate();

    async function handleRegister(data) {
        const response = await api.post('/auth/register', {
            "name": data.name,
            "email": data.email,
            "password": data.password,
        })
        toast.success('Cadastro realizado com sucesso!');
    }

    async function handleLogin(data) {
        await api.post('/auth/login', {
            "email": data.email,
            "password": data.password,
        })
        .then((value) => {
            setUserData(value.data.user);
            toast.success('Seja bem vindo, ' + value.data.user.name + "!");
            return navigate('/empty');
        })
        .catch((error) => {
            toast.error('Email ou senha incorreto!')
            return null;
        })
       
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