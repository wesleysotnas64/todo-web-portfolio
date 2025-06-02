import axios from "axios";
import { BASE_URL, GET_ALL, CREATE, UPDATE, DELETE } from "../routes/routes";

export async function createTodo(todo) {
    try {
        const response = await axios.post(`${BASE_URL}/${CREATE}`, {
            title: todo.title,
            description: todo.description,
            isCompleted: false
        })
        return response.data;
    } catch(error) {
        console.error("Erro ao salvar item", error)
        throw error
    }
}

export async function getAllTodos() {
    try{
        const response = await axios.get(`${BASE_URL}/${GET_ALL}`);
        return response.data;
    } catch(error) {
        console.error("Erro ao buscar os itens: ", error);
        throw error;
    }
}

export async function updateTodo(todo) {
    try {
        const response = await axios.put(`${BASE_URL}/${UPDATE}`, {
            id: todo.id,
            title: todo.title,
            description: todo.description,
            isCompleted: todo.isCompleted
        })
        return response.data;
    } catch(error) {
        console.error("Erro ao atualizar item", error)
        throw error
    }
}

export async function deleteTodo(todoId) {
    try{
        const response = await axios.delete(`${BASE_URL}/${DELETE}/${todoId}`);
        return response.data;
    } catch(error){
        console.error("Erro ao deletar item: ", error);
        throw error;
    }
}