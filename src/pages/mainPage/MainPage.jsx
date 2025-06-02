import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import { MainContainer } from "./MainPage.style"
import TodoContent from "../../components/todoContent/TodoContent";
import { useState } from "react";
import Modal from "../../components/modal/Modal";
import Loading from "../../components/loading/Loading";
import { useSelector } from "react-redux";

function MainPage(){
    const [activeModal, setActiveModal] = useState(false);
    const { loading } = useSelector((rootReducer) => rootReducer.loadingReducer)

    const handleActiveModal = (active) => {
        setActiveModal(active);
    }

    return(
        <MainContainer>
            <Header />
            <TodoContent handleActiveModal={handleActiveModal} />
            <Footer />

            {
                activeModal && (<Modal handleActiveModal={handleActiveModal}/>)
            }

            {
                loading && (<Loading />)
            }
        </MainContainer>
    )
}

export default MainPage;