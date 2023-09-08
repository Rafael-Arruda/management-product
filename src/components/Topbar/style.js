import styled from 'styled-components';

export const Header = styled.header`
    background-color: var(--white);
    display: flex;
    align-items: center;
   
    width: 100%;
    height: 12vh;
    border-left: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    
    position: fixed;
    z-index: 99;
    top: 0;
    left: 260px;
`;

export const Search = styled.div`
    margin-left: 50px;
    border: 1px solid var(--border-color);
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 350px;
    height: 40px;
    border-radius: 20px;
    padding: 16px 24px;

    input {
        width: 100%;
        border: none;
        font-size: 16px;
        color: #4d5875;
    }
    input::placeholder {
        color: #4d5875;
    }

    button {
        padding: 5px;
        background: none;
        border: none;
    }
`;