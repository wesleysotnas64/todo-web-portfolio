import axios from "axios";
import { BASE_URL, GET_ALL } from "../routes/routes";

export async function getAllTodos() {
    try{
        const response = await axios.get(`${BASE_URL}/${GET_ALL}`);
        console.log(response);
        return response.data;
    } catch(error) {
        console.error("Erro ao buscar os itens: ", error);
        throw error;
    }
}