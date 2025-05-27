import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import { MainContainer } from "./MainPage.style"
import TodoContent from "../../components/todoContent/TodoContent";

function MainPage(){
    return(
        <MainContainer>
            <Header />
            <TodoContent />
            <Footer />
        </MainContainer>
    )
}

export default MainPage;