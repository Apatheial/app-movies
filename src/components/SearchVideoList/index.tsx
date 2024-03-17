import { useEffect, useState } from "react";
import VideoList from "../VideoList";
import styles from "./SearchVideoList.module.css";
import Loader from "../Loader";

export function filterVideos(videos: any, searchText: string) {
    return videos.filter((video: any) => 
        video.category.toLowerCase().includes(searchText.toLowerCase) || 
        video.title.toLowerCase().includes(searchText.toLocaleLowerCase())
    )
}

function SearchVideoList({ videos } : any) {

    const [ searchText, setSearchText ] = useState<string>("")
    const foundVideos: string[] = filterVideos(videos, searchText)

    const [ loading, setLoading] = useState<boolean>(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 750)
    }, [])

    return (
        <section className={ styles.container }>
            <input 
                type="search" 
                onChange={ (evt) => setSearchText(evt.target.value) } 
                placeholder="Pesquisar..." 
            />
            { 
                loading ? 
                    <Loader /> : 
                    <VideoList videos={ foundVideos } emptyHeading={ `Sem vídeos sobre: ${ searchText }` }/>
            }
        </section>
    );
}

export default SearchVideoList;
