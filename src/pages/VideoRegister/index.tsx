
import styles from "./VideoRegister.module.css"
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import Header from "../../components/Header";

function VideoRegister() {
    return (
        <>
            <Header />
            <Container personStyle={ styles.container }>
                <Form />
            </Container>
            <Footer />
        </>
    );
}

export default VideoRegister;
