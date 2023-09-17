import React from "react";

import { Link } from "react-router-dom";

import {MdEmail, MdLock} from 'react-icons/md';

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

function Login() {
    return(
        <LoginPage>
            <Logo src={logo} alt="logo"/>
            <ContainerLogin>
                <Form>
                    <FormTitle>Entrar</FormTitle>
                    
                    <Input type="email">
                        <MdEmail size={18} color="#6c757d"/>
                        <input type="email" placeholder="Email"/>
                    </Input>
                    <Input type="password">
                        <MdLock size={18} color="#6c757d"/>
                        <input type="password" placeholder="Senha"/>
                    </Input>
                    
                    <BoxLink textalign="right">
                        <a href="#">Esqueceu sua senha?</a>
                    </BoxLink>
                    
                    <Button>Entrar</Button>
                    
                    <BoxLink textalign="center">
                        <span>Não é um membro? </span>
                        <Link to="/register">Criar uma conta</Link>
                    </BoxLink>
                </Form>
            </ContainerLogin>
        </LoginPage>
    )
}

export default Login;