import axios from "axios";
import { BASE_URL, GET_ALL, CREATE } from "../routes/routes";

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