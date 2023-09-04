import React from "react";

import {MdEmail, MdLock} from 'react-icons/md';

import {
    LoginPage, 
    ContainerLogin, 
    Logo,
    Form,
    FormTitle,
    Input,
    Link,
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
                    
                    <Link textalign="right">
                        <a href="#">Esqueceu sua senha?</a>
                    </Link>
                    
                    <Button>Entrar</Button>
                    
                    <Link textalign="center">
                        <span>Não é um membro? </span>
                        <a href="#">Criar uma Conta</a>
                    </Link>
                </Form>
            </ContainerLogin>
        </LoginPage>
    )
}

export default Login;