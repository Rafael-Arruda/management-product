import React, {useState, useContext} from "react";

import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/auth";

import {MdEmail, MdLock, MdPerson} from 'react-icons/md';

import {
    LoginPage, 
    ContainerLogin, 
    Logo,
    Form,
    FormTitle,
    Input,
    BoxLink,
    Button
} from './style';

import logo from '../../assets/logo-zanex.png';

function Register() {

    const {handleRegister} = useContext(AuthContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleForm(event) {
        event.preventDefault();

        handleRegister({name, email, password});

        setName('');
        setEmail('');
        setPassword('');
    }

    return(
        <LoginPage>
            <Logo src={logo} alt="logo"/>
            <ContainerLogin>
                <Form onSubmit={handleForm}>
                    <FormTitle>Cadastro</FormTitle>
                    
                    <Input type="text">
                        <MdPerson size={18} color="#6c757d"/>
                        <input 
                            type="text" 
                            placeholder="Nome completo"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Input>
                    <Input type="email">
                        <MdEmail size={18} color="#6c757d"/>
                        <input 
                            type="email" 
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Input>
                    <Input type="password">
                        <MdLock size={18} color="#6c757d"/>
                        <input 
                            type="password" 
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Input>
                    
                    <Button>Cadastrar-se</Button>
                    
                    <BoxLink textalign="center">
                        <span>Já possui uma conta? </span>
                        <Link to="/login">Entrar</Link>
                    </BoxLink>
                </Form>
            </ContainerLogin>
        </LoginPage>
    )
}

export default Register;