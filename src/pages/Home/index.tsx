import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header"
import Category, { categories, filterCategory } from "../../components/Category";
import Card from "../../components/Card";
import styles from "./Home.module.css"
import Carousel from "../../components/Carousel";
import ScrollToTopButton from "../../components/ScrollToTopButton";

function Home() {
    return (
        <>
            <Header />
            <Banner image="favoritos"/>
            <Container personStyle={ styles.container }>
                {   categories.map((category: string) => {
                    return <Category category={category} key={category} >
                        <Carousel>
                            { filterCategory(category).map((video: string) => <Card id={video} key={video} /> ) }
                        </Carousel>
                    </Category>
                  })
                }
            </Container>
            <ScrollToTopButton />
            <Footer />
        </>
    );
}

export default Home;
