import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ButtonsArea, LabelInputArea, MainContainer, MainContent } from "./Modal.style";

function Modal({handleActiveModal}) {

    const [updated, setUpdated] = useState(true);
    const [isNewItem, setIsNewItem] = useState(false);

    const {currentTodo} = useSelector((rootReducer) => rootReducer.todoReducer);
    
    useEffect(() => {
        if (currentTodo.id === null || currentTodo.id === "") {
            setIsNewItem(true);
        } else {
            setIsNewItem(false);
        }
        setUpdated(false);
    }, []);

    return(
        <MainContainer>

            <MainContent>

                <LabelInputArea>
                    <label>Title</label>
                    <input placeholder="Todo title..." value={currentTodo.title}/>
                </LabelInputArea>

                <LabelInputArea>
                    <label>Description</label>
                    <input placeholder="Todo description..." value={currentTodo.description}/>
                </LabelInputArea>

                <ButtonsArea updated={updated}>
                    {
                        !isNewItem && (
                            <>
                                <button id="delete">Delete</button>
                                <button id="update">Update</button>
                            </>
                        )
                    }
                    
                    {isNewItem && (<button id="update">Save</button>)}
                    
                    <button id="close" onClick={() => handleActiveModal(false)} >Close</button>
                </ButtonsArea>

            </MainContent>
        </MainContainer>
    );
}

export default Modal;