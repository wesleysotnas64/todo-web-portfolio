import styled from "styled-components";

export const MainContainer = styled.div`
    background: #003019;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 100%;
    align-items: center;
`;

export const NewItemButton = styled.button`
    background: #ffffff;
    color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 45px;
    
    font-family: "Roboto", sans-serif;
    font-size: 12pt;
    font-weight: 500;

    border: none;
    border-radius: 30px;
    margin: 20px;

    transition: 0.15s;

    &:hover {
        transform: scale(1.05);
        cursor: pointer;
    }
`;

