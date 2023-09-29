import styled from "styled-components";

export const Container = styled.div`
    .submenu-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        padding: 0px 30px 0px 60px;
        margin-bottom: 15px;
    }
`;

export const MenuTitle = styled.h3`
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 600;
    color: #76839a;
    opacity: 0.7;
`;

export const MenuItem = styled.div`
    width: 95%;
    border-radius: 0px 30px 30px 0px;
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 8px 10px 8px 50px;
    cursor: pointer;
    transition: 0.5s all;
    
    svg {
        color: #495584;
        transition: 0.5s all;
    }
    span {
        color: #495584;
        font-size: 14px;
        font-weight: 500;
        transition: 0.5s all;
    }

    &:hover {
        background-color: var(--primary-bg-color);
    }
    &:hover span {
        color: #ffffff;
    }
    &:hover svg {
        color: #ffffff;
    }

`;