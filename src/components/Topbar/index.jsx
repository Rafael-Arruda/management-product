import React, { useState, useContext } from "react";

import { useNavigate } from 'react-router-dom';

import { 
    Header, 
    //Search, 
    Profile, 
    Menu,
    DropdownProfile 
} from './style';

import imgProfile from '../../assets/profile_img.jpg';

import { MdSearch, MdOutlinePerson } from 'react-icons/md';

import { UserContext } from "../../contexts/user";

export default function Topbar() {

    const { userData, setUserData } = useContext(UserContext);

    const navigate = useNavigate();

    const [showMenuProfile, setShowMenuProfile] = useState(false);

    function handleShowMenuProfile() {
        setShowMenuProfile(!showMenuProfile);
    }

    function handleSignOut() {
        localStorage.removeItem('user');
        setUserData({});

        navigate("/login");
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
                    <img src={imgProfile} alt="imagem de perfil" />
                </Profile>

                {showMenuProfile && 
                <DropdownProfile>                    
                    <div className="box-profile-info">
                        <h5>{userData.name}</h5>
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
                    <a onClick={handleSignOut}>
                        <MdOutlinePerson size={20} color="#000"/>
                        <span>Sair</span>
                    </a>    
                </DropdownProfile>
                }
           </Menu>
        </Header>
    )
}