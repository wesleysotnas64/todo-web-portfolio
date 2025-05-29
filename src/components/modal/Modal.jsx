import { useState, useEffect } from "react";
import { ButtonsArea, LabelInputArea, MainContainer, MainContent } from "./Modal.style";

function Modal({handleActiveModal}) {

    const [updated, setUpdated] = useState(true);
    const [itemSelected, setItemSelected] = useState()
    const [isNewItem, setIsNewItem] = useState(false);
    
    useEffect(() => {
        if (itemSelected !== null && itemSelected !== undefined) {
            setIsNewItem(false);
        } else {
            setIsNewItem(true);
        }
        setUpdated(false);
    }, [itemSelected]);

    return(
        <MainContainer>

            <MainContent>

                <LabelInputArea>
                    <label>Title</label>
                    <input placeholder="Todo title..."/>
                </LabelInputArea>

                <LabelInputArea>
                    <label>Description</label>
                    <input placeholder="Todo description..."/>
                </LabelInputArea>

                <ButtonsArea updated={updated}>
                    {
                        isNewItem === false && (
                            <>
                                <button id="delete">Delete</button>
                                <button id="update">Update</button>
                            </>
                        )
                    }
                    
                    {isNewItem === true && (<button id="update">Save</button>)}
                    
                    <button id="close" onClick={() => handleActiveModal(false)} >Close</button>
                </ButtonsArea>

            </MainContent>
        </MainContainer>
    );
}

export default Modal;