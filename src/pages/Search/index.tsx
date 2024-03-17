import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import styles from "./Search.module.css"
import videos from "../../json/videos.json";
import SearchVideoList from "../../components/SearchVideoList";
import ScrollToTopButton from "../../components/ScrollToTopButton";

function Search() {
    return (
        <>
            <Header />
            <Container personStyle={ styles.container }>
                <SearchVideoList videos={ videos } />
            </Container>
            <ScrollToTopButton />
            <Footer />
        </>
    );
}

export default Search;
