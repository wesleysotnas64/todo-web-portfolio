import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import { MainContainer } from "./MainPage.style"
import TodoContent from "../../components/todoContent/TodoContent";
import { useEffect, useState } from "react";
import Modal from "../../components/modal/Modal";
import Loading from "../../components/loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { setLoadingAction } from "../../redux/loading/actions";
import { getAllTodos } from "../../services/todoServices";

function MainPage(){
    const [activeModal, setActiveModal] = useState(false);
    const [todos, setTodos] = useState([])
    const { loading } = useSelector((rootReducer) => rootReducer.loadingReducer)
    const dispatch = useDispatch();

    const handleGetAllTodos = async () => {
        try{
            dispatch(setLoadingAction(true))
            const data = await getAllTodos();
            setTodos(data)
        } catch(error) {
            console.error("Erro ao carregar os itens.");
        }
    }

    const handleActiveModal = (active) => {
        setActiveModal(active);
    }

    useEffect(() => {
        dispatch(setLoadingAction(false))
    }, [todos])
    
    useEffect(() => {
        handleGetAllTodos();
    }, []);

    return(
        <MainContainer>
            <Header />
            <TodoContent todos={todos} handleActiveModal={handleActiveModal} handleGetAllTodos={handleGetAllTodos}/>
            <Footer />

            {
                activeModal && (<Modal handleActiveModal={handleActiveModal} handleGetAllTodos={handleGetAllTodos}/>)
            }

            {
                loading && (<Loading />)
            }
        </MainContainer>
    )
}

export default MainPage;