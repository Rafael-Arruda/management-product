import styled from "styled-components";

export const Container = styled.div`
    & + & {
        margin-top: 20px;
    }

    .menu-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        padding: 0px 30px;
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