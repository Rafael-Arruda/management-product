import React from "react";

import {MdEmail, MdLock, MdPerson} from 'react-icons/md';

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

function Register() {
    return(
        <LoginPage>
            <Logo src={logo} alt="logo"/>
            <ContainerLogin>
                <Form>
                    <FormTitle>Cadastro</FormTitle>
                    
                    <Input type="text">
                        <MdPerson size={18} color="#6c757d"/>
                        <input type="text" placeholder="Nome completo"/>
                    </Input>
                    <Input type="email">
                        <MdEmail size={18} color="#6c757d"/>
                        <input type="email" placeholder="Email"/>
                    </Input>
                    <Input type="password">
                        <MdLock size={18} color="#6c757d"/>
                        <input type="password" placeholder="Senha"/>
                    </Input>
                    
                    <Button>Cadastrar-se</Button>
                    
                    <Link textalign="center">
                        <span>Já possui uma conta? </span>
                        <a href="#">Entrar</a>
                    </Link>
                </Form>
            </ContainerLogin>
        </LoginPage>
    )
}

export default Register;