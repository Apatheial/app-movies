import styles from "./Watch.module.css"
import { useParams } from "react-router-dom";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PageNotFound from "../PageNotFound";
import { allVideos } from "../../components/Category";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";

function Watch() {
    const params = useParams();
    const [ videoId, setVideoId ] =  useState<any | null>(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const group = await allVideos()
            const id = group.find((video: any) => video.id === params.id)
            
            if(!id) {
                setVideoId(null)
            } else {
                setVideoId(id.id)
            }

            setLoading(false)
        }
        fetchData()
    }, [params.id])

    if(loading) {
        return (
            <>
                <Header />
                <Container personStyle={ styles.configContainer}>
                    <Loader />
                </Container>
                <Footer />
            </>
        )
    }

    if(videoId === null) { return <PageNotFound />}

    return (
        <>
            <Header />
            <Container personStyle={styles.configContainer}>
                <section className={ styles.watch }>
                    {   
                        videoId ? (
                            <iframe 
                                width="854" height="480" 
                                src={`https://www.youtube.com/embed/${videoId}`}
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowFullScreen
                            ></iframe>
                         ) : (
                            <Loader />
                         )
                    }
                </section>
            </Container>
            <Footer />
        </>
    );
}

export default Watch;
