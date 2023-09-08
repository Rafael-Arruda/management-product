import React from "react";

import { Header, Search } from './style';

import { MdSearch } from 'react-icons/md';

export default function Topbar() {
    return(
        <Header>
            <Search>
                <input type="text" placeholder="Pesquise por resultados..."/>
                <button>
                    <MdSearch size={22} color="#b4bdce"/>
                </button>
            </Search>
        </Header>
    )
}