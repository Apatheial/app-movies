import styles from "./PageNotFound.module.css"
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import error404 from "./img/page-not-found.svg";

function PageNotFound() {
    return (
        <>
            <Header />
            <Container personStyle={ styles.container404 }>
                <h2>Ops! Conteúdo não localizado!</h2>
                <img src={error404} alt="Página não encontrada!" />
            </Container>
            <Footer />
        </>
    );
}

export default PageNotFound;
