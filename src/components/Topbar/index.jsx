import React, { useState, useContext } from "react";

import { useNavigate } from 'react-router-dom';

import { 
    Header, 
    //Search, 
    Profile, 
    Menu,
    DropdownProfile 
} from './style';

import imgAvatar from '../../assets/avatar.png';
import { MdSearch, MdOutlinePerson } from 'react-icons/md';

import { AuthContext } from "../../contexts/auth";

export default function Topbar() {

    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const [showMenuProfile, setShowMenuProfile] = useState(false);

    function handleShowMenuProfile() {
        setShowMenuProfile(!showMenuProfile);
    }

    function handleLogout() {
        logout();
    }

    return(
        <Header>
            {/* <Search>
                <input type="text" placeholder="Pesquise por resultados..."/>
                <button>
                    <MdSearch size={22} color="#b4bdce"/>
                </button>
            </Search> */}
            
           <Menu>
                <Profile onClick={handleShowMenuProfile}>
                    <img src={imgAvatar} alt="imagem de perfil" />
                </Profile>

                {showMenuProfile && 
                <DropdownProfile>                    
                    <div className="box-profile-info">
                        <h5>{user.name}</h5>
                        <span>Administrator</span>
                    </div>
                    <a href="#">
                        <MdOutlinePerson size={20} color="#000"/>
                        <span>Perfil</span>
                    </a>
                    <a href="#">
                        <MdOutlinePerson size={20} color="#000"/>
                        <span>Ajuda</span>
                    </a>
                    <a href="#">
                        <MdOutlinePerson size={20} color="#000"/>
                        <span>Configurações</span>
                    </a>
                    <a onClick={handleLogout}>
                        <MdOutlinePerson size={20} color="#000"/>
                        <span>Sair</span>
                    </a>    
                </DropdownProfile>
                }
           </Menu>
        </Header>
    )
}