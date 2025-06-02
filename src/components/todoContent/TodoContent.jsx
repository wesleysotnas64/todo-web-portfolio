import { useEffect, useState } from "react";
import Item from "../item/Item"

import { MainContainer, NewItemButton } from "./TodoContent.style";
import { getAllTodos } from "../../services/todoServices";
import { useDispatch } from "react-redux";
import { setCurrentAction } from "../../redux/todo/actions";
import { setLoadingAction } from "../../redux/loading/actions";

function TodoContent({handleActiveModal}){

    const [todos, setTodos] = useState([])

    const dispatch = useDispatch();
    const handleNewitem = () => {
        dispatch(setCurrentAction({
            id: "",
            title: "",
            description: "",
            isCompleted: false
        }))
        handleActiveModal(true)
    }

    useEffect(() => {
        dispatch(setLoadingAction(false))
    }, [todos])

    useEffect(() => {
        async function fetchTodos() {
            try{
                dispatch(setLoadingAction(true))
                const data = await getAllTodos();
                setTodos(data)
            } catch(error) {
                console.error("Erro ao carregar os itens.");
            }
        }

        fetchTodos();
    }, []);

    return(
        <MainContainer>
            <NewItemButton onClick={() => {handleNewitem()}}>
                Add new item
            </NewItemButton>
            
            {
                todos.map((todo) => (
                    <Item
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        description={todo.description}
                        isCompleted={todo.isCompleted}
                        handleActiveModal={handleActiveModal}
                    />
                ))
            }
            
        </MainContainer>
    )
}

export default TodoContent;