import React, { useState } from "react";

import { 
    Header, 
    Search, 
    Profile, 
    Menu,
    DropdownProfile 
} from './style';

import imgProfile from '../../assets/profile_img.jpg';

import { MdSearch, MdOutlinePerson } from 'react-icons/md';

export default function Topbar() {

    const [showMenuProfile, setShowMenuProfile] = useState(false);

    function handleShowMenuProfile() {
        setShowMenuProfile(!showMenuProfile);
    }

    return(
        <Header>
            <Search>
                <input type="text" placeholder="Pesquise por resultados..."/>
                <button>
                    <MdSearch size={22} color="#b4bdce"/>
                </button>
            </Search>
            
           <Menu>
                <Profile onClick={handleShowMenuProfile}>
                    <img src={imgProfile} alt="imagem de perfil" />
                </Profile>

                {showMenuProfile && 
                <DropdownProfile>                    
                    <div className="box-profile-info">
                        <h5>Sandra Scotland</h5>
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
                    <a href="#">
                        <MdOutlinePerson size={20} color="#000"/>
                        <span>Sair</span>
                    </a>    
                </DropdownProfile>
                }
           </Menu>
        </Header>
    )
}