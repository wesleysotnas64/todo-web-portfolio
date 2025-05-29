import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { MainContainer } from "./Item.style";
import TodoActionTypes from "../../redux/todo/action-types";

import trashIcon from "../../assets/trash-icon.svg";
import checkIcon from "../../assets/check-icon.svg";
import uncheckIcon from "../../assets/uncheck-icon.svg";

function Item({ id, title, description, isCompleted, handleActiveModal }) {
    const [isPortrait, setIsPortrait] = useState(window.matchMedia("(orientation: portrait)").matches);

    const dispatch = useDispatch()
    const handleItemClick = () => {
        dispatch({
            type: TodoActionTypes.SET_CURRENT,
            payload: {
                id: id,
                title: title,
                description: description,
                isCompleted: isCompleted,
            },
        });
        handleActiveModal(true);
    }

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
        <MainContainer isCompleted={isCompleted}>
            <div className="info-area" onClick={() => handleItemClick()}>
                <label id="title">{title}</label>
                {!isPortrait && <label id="description">{description}</label>}
            </div>

            <div className="buttons-area">
                <button id="btn-isCompleted"><img src={isCompleted ? checkIcon : uncheckIcon} /></button>
                <button><img src={trashIcon} /></button>
            </div>
        </MainContainer>
    );
}

export default Item;
