import Item from "../item/Item"

import { MainContainer, NewItemButton, NoItemMessage } from "./TodoContent.style";
import { setCurrentAction } from "../../redux/todo/actions";
import { useDispatch } from "react-redux";

function TodoContent({todos, handleActiveModal, handleGetAllTodos}){

    const dispatch = useDispatch()

    const handleNewitem = () => {
        dispatch(setCurrentAction({
            id: "",
            title: "",
            description: "",
            isCompleted: false
        }))
        handleActiveModal(true)
        console.log("Apertou")
    }

    return(
        <MainContainer>
            <NewItemButton onClick={() => {handleNewitem()}}>
                Add new item
            </NewItemButton>
            
            {
                todos.length === 0 ? (
                    <NoItemMessage>
                        <label>No items in the list.</label>
                    </NoItemMessage>
                ):
                todos.map((todo) => (
                    <Item
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        description={todo.description}
                        isCompleted={todo.isCompleted}
                        handleActiveModal={handleActiveModal}
                        handleGetAllTodos={handleGetAllTodos}
                    />
                ))
            }
            
        </MainContainer>
    )
}

export default TodoContent;