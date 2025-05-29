import { useEffect, useState } from "react";
import Item from "../item/Item"

import { MainContainer, NewItemButton } from "./TodoContent.style";
import { getAllTodos } from "../../services/todoServices";

function TodoContent({handleActiveModal}){

    const [todos, setTodos] = useState([])

    useEffect(() => {
        async function fetchTodos() {
            try{
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
            <NewItemButton onClick={() => {handleActiveModal(true)}}>
                Add new item
            </NewItemButton>
            
            {
                todos.map((todo) => (
                    <Item
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        description={todo.description}
                        handleActiveModal={handleActiveModal}
                    />
                ))
            }
            
        </MainContainer>
    )
}

export default TodoContent;