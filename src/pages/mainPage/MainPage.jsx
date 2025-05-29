import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import { MainContainer } from "./MainPage.style"
import TodoContent from "../../components/todoContent/TodoContent";
import { useState } from "react";
import Modal from "../../components/modal/Modal";

function MainPage(){
    const [activeModal, setActiveModal] = useState(false);

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
        </MainContainer>
    )
}

export default MainPage;