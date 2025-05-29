import { useEffect, useState } from "react";
import { MainContainer } from "./Item.style";
import trashIcon from "../../assets/trash-icon.svg";
// import checkIcon from "../../assets/check-icon.svg";
// import uncheckIcon from "../../assets/uncheck-icon.svg";

function Item({ id, title, description, handleActiveModal }) {
    const [isPortrait, setIsPortrait] = useState(window.matchMedia("(orientation: portrait)").matches);

    useEffect(() => {
        const handleOrientationChange = () => {
            setIsPortrait(window.matchMedia("(orientation: portrait)").matches);
        };

        // Adiciona o listener
        window.addEventListener('resize', handleOrientationChange);

        // Remove o listener quando desmontar
        return () => {
            window.removeEventListener('resize', handleOrientationChange);
        };
    }, []);

    return (
        <MainContainer>
            <div className="info-area" onClick={() => {handleActiveModal(true)}}>
                <label id="title">{title}</label>
                {!isPortrait && <label id="description">{description}</label>}
            </div>

            <div className="buttons-area">
                {/* <button><img src={uncheckIcon} /></button> */}
                <button><img src={trashIcon} /></button>
            </div>
        </MainContainer>
    );
}

export default Item;
