import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ButtonsArea, LabelInputArea, MainContainer, MainContent } from "./Modal.style";
import { createTodo, updateTodo, deleteTodo } from "../../services/todoServices";

function Modal({handleActiveModal, handleGetAllTodos}) {

    const [updated, setUpdated] = useState(false);
    const [isNewItem, setIsNewItem] = useState(false);

    const {currentTodo} = useSelector((rootReducer) => rootReducer.todoReducer);
    const [todoItem, setTodoItem] = useState(currentTodo);

    const handleChangeTitle = (e) => {
        setTodoItem({
            ...todoItem,
            title: e.target.value
        })
    };
    
    const handleChangeDescription = (e) => {
        setTodoItem({
            ...todoItem,
            description: e.target.value
        })
    }

    const handleUpdatedItem = () => {
        if(
            currentTodo.title !== todoItem.title ||
            currentTodo.description !== todoItem.description ||
            currentTodo.isCompleted !== todoItem.isCompleted
        ){
            setUpdated(true)
        } else setUpdated(false)
    }

    const handleCreateTodo = () => {
        createTodo({
            title: todoItem.title,
            description: todoItem.description
        }).then(response => {
            console.log("Todo salvo com sucesso: ", response)
            handleGetAllTodos()
            handleActiveModal(false);
        }).catch(error => {
            console.error("Erro ao criar item: ", error)
            handleGetAllTodos()
            handleActiveModal(false);
        })
    }
    
    const handleUpdateTodo = () => {
        updateTodo({
            id: todoItem.id,
            title: todoItem.title,
            description: todoItem.description,
            isCompleted: todoItem.isCompleted
        }).then(response => {
            console.log("Todo atualizado com sucesso: ", response)
            handleGetAllTodos()
            handleActiveModal(false);
        }).catch(error => {
            console.error("Erro ao atualizar item: ", error)
            handleGetAllTodos()
            handleActiveModal(false);
        })
    }

    const handleDeleteTodo = (todoId) => {
        deleteTodo(todoId).then(response => {
            console.log("Item deletado com sucesso: ", response)
            handleGetAllTodos()
            handleActiveModal(false);
        }).catch(error => {
            console.error("Erro ao deletar item: ", error)
            handleGetAllTodos()
            handleActiveModal(false);
        });
    }
    
    useEffect(() => {
        handleUpdatedItem()
    }, [todoItem, currentTodo]);


    useEffect(() => {
        if (currentTodo.id === null || currentTodo.id === "") {
            setIsNewItem(true);
        } else {
            setIsNewItem(false);
        }
        setUpdated(false);
        handleUpdatedItem()
    }, []);

    return(
        <MainContainer>

            <MainContent>

                <LabelInputArea>
                    <label>Title</label>
                    <input placeholder="Todo title..." value={todoItem.title} onChange={handleChangeTitle}/>
                </LabelInputArea>

                <LabelInputArea>
                    <label>Description</label>
                    <input placeholder="Todo description..." value={todoItem.description} onChange={handleChangeDescription}/>
                </LabelInputArea>

                <ButtonsArea updated={updated}>
                    {
                        !isNewItem && (
                            <>
                                <button id="delete" onClick={()=>{handleDeleteTodo(currentTodo.id)}}>Delete</button>
                                <button id="update" onClick={()=>{handleUpdateTodo()}}>Update</button>
                            </>
                        )
                    }
                    
                    {isNewItem && (<button id="update" onClick={()=>{handleCreateTodo()}}>Create</button>)}
                    
                    <button id="close" onClick={() => handleActiveModal(false)} >Close</button>
                </ButtonsArea>

            </MainContent>
        </MainContainer>
    );
}

export default Modal;