import Card from "../Card";
import styles from "./VideoList.module.css";

function VideoList({ videos, emptyHeading } : { videos: any, emptyHeading?: string | undefined}) {
    
    const count = videos.length
    let heading = emptyHeading
    if(count > 0) {
        const noun = count > 1 ? 'vídeos' : 'vídeo'
        heading = `${count} ${noun}`
    }

    return (
        <>
            <h2>{ heading }</h2>
            <section className={ styles.videos }>
                {
                    videos.map((video: any) => <Card id={video.id} key={video.id} />)
                }
            </section>
        </>
    );
}

export default VideoList;
