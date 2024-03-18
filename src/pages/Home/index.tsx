import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header"
import Category, { categories, allVideos } from "../../components/Category";
import Card from "../../components/Card";
import styles from "./Home.module.css"
import Carousel from "../../components/Carousel";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";

function Home() {

    const [ videos, setVideos ] =  useState<any[]>([])
    const [ loading, setLoading ] = useState<boolean>(true) 

    useEffect(() => {
        const fetchData = async () => {
            const arrayVideos = await allVideos()
            setVideos(arrayVideos)
            setLoading(false)
        }
        fetchData()
    }, [])
    
    if(loading) {
        return (
            <>
                <Header />
                <Container personStyle={styles.containerLoading}>
                    <Loader />
                </Container>
                <Footer />
            </>
        );
    }

    const banners = ['favoritos', 'assistir', 'home']
    const randomBanner = banners[Math.floor(Math.random() * 3)]

    return (
        <>
            <Header />
            <Banner image={ randomBanner } />
            <Container personStyle={styles.container}>
                {   videos ? (
                        categories.map((category) => {
                            return <Category category={ category } key={ category }>
                                <Carousel>
                                    {
                                        videos.map((video: any) => {
                                            if(video.band === category) {
                                                return <Card id={ video.id } key={ video.id }/>
                                            }
                                        })
                                    }
                                </Carousel>
                            </Category>
                        }) 
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

export default Home;
