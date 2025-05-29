import { useState } from "react";
import { ButtonsArea, LabelInputArea, MainContainer, MainContent } from "./Modal.style";

function Modal({handleActiveModal}) {

    const [updated, setUpdated] = useState(true);
    const [itemSelected, setItemSelected] = useState()

    return(
        <MainContainer>

            <MainContent>

                <LabelInputArea>
                    <label>Title</label>
                    <input placeholder="Todo title..."/>
                </LabelInputArea>

                <LabelInputArea>
                    <label>Description</label>
                    <input placeholder="Todo title..."/>
                </LabelInputArea>

                <ButtonsArea updated={updated}>
                    <button id="delete">Delete</button>
                    <button id="update">Update</button>
                    <button id="close" onClick={() => handleActiveModal(false)} >Close</button>
                </ButtonsArea>

            </MainContent>
        </MainContainer>
    );
}

export default Modal;