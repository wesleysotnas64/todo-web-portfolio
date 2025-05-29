import styled from "styled-components";

export const MainContainer = styled.div`
    background:rgb(230, 230, 230);
    height: 50px;
    width: 80%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-radius: 25px;

    font-family: "Roboto", sans-serif;
    font-size: 12pt;
    font-weight: 400;

    margin-bottom: 10px;
    padding: 0px 15px 0px 15px;

    transition: 0.15s;

    &:hover {
        transform: scale(1.01);
        background: #ffffff;
        cursor: pointer;
    }
    
    button {
        background:rgb(187, 41, 41);
        border: none;
        height: 30px;
        width: 30px;
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        
        img {
            height: 50%;
            width: auto;
        }
        
        transition: 0.15s;
        
        &:hover {
            transform: scale(1.25);
            cursor: pointer;
        }
    }
    
    .info-area {
        display: flex;
        flex-grow: 1;
        gap: 20px;
        
        label {
            &:hover {
                cursor: pointer;
            }
        }
    }

    .buttons-area{
        display: flex;
        gap: 5px;
        margin-left: 10px;
    }
`;