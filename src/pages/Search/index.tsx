import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import styles from "./Search.module.css"
import SearchVideoList from "../../components/SearchVideoList";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import { useEffect, useState } from "react";
import { allVideos } from "../../components/Category";
import Loader from "../../components/Loader";

function Search() {

    const [ videos, setVideos ] = useState<{ title: String, band: string }[]>([])

    useEffect(() => {
        const fetchData= async () => {
            const group = await allVideos() 
            setVideos(group)
        }
        fetchData()
    }, [])

    return (
        <>
            <Header />
            <Container personStyle={ styles.container }>
                { 
                    videos ? (
                        <SearchVideoList videos={ videos } />
                    ) : (
                        <Loader />
                    )
                }
            </Container>
            <ScrollToTopButton />
            <Footer />
        </>
    );
}

export default Search;
