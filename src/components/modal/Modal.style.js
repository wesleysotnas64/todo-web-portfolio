import styled from "styled-components";

export const MainContainer = styled.div`
    background: rgba(0,0,0, 0.8);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`;

export const MainContent = styled.div`
    background: #003019;
    width: 80%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-radius: 20px;
    gap: 20px;

    font-family: "Roboto", sans-serif;
    font-size: 12pt;
    font-weight: 600;
`;

export const LabelInputArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 80px;

    label {
        color: #ffffff;
        margin-left: 10px;
    }

    input {
        height: 30px;
        border-radius: 15px;
        padding: 0px 10px 0px 10px;
        
        font-size: 11pt;
        font-family: "Roboto", sans-serif;
    }
    `;

export const ButtonsArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 80%;
    
    button {
        border: none;
        height: 30px;
        width: 80px;
        border-radius: 15px;
        font-family: "Roboto", sans-serif;
        font-weight: 500;

        &:hover {
            cursor: pointer;
        }
    }

    #delete {
        background: #ce2323;
        color: #ffffff;
    }
    
    #update {
        background: ${({updated}) => updated ? "#2177c7" : "#0f3961"};
        color: ${({updated}) => updated ? "#ffffff" : "#cccccc"};
        &:hover {
            cursor: ${({updated}) => updated ? "pointer" : "not-allowed"};
        }
    }
`;