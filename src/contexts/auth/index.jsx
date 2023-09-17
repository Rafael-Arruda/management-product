import { useState, createContext, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import api from '../../services/api';

import { toast } from 'react-toastify';

export const AuthContext = createContext({});

function AuthProvider({children}) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        async function loadUser() {
            const storageUser = localStorage.getItem('user');

            if(storageUser) {
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }

            setLoading(false);
        }

        loadUser();
    }, [])

    async function signUp(data) {
        const response = await api.post('/auth/register', {
            "name": data.name,
            "email": data.email,
            "password": data.password,
        })
        toast.success('Cadastro realizado com sucesso!');
        navigate("/login");
    }

    async function signIn(data) {
        await api.post('/auth/login', {
            "email": data.email,
            "password": data.password,
        })
        .then((value) => {
            console.log(value.data.user)
            setUser(value.data.user);
            storageUser(value.data.user);
            toast.success('Seja bem vindo, ' + value.data.user.name + "!");
            navigate('/empty');
        })
        .catch((error) => {
            toast.error('Email ou senha incorreto!')
            return null;
        })
    }

    function storageUser(data) {
        localStorage.setItem('user', JSON.stringify(data));
    }

    return(
        <AuthContext.Provider value={{
            signed: !!user,
            user,
            loading,
            signIn,
            signUp
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;