import styles from "./Category.module.css";
import playLists from "../../json/playLists.json";
import { resolveVideos } from "../../api/youtubePlaylist";

export const categories: string[] = playLists.map((item: any) => item.category)

async function groupCategory (category: string) {
    const playlist = playLists.filter((list: any) => list.category === category)
    const videos = await resolveVideos(playlist[0].idPlaylist, playlist[0].category)
    return videos
}

export async function allVideos () {
    const arrayVideos: any[] = []
    await Promise.all(categories.map(async (category: any) => {
        const group = await groupCategory(category)
        arrayVideos.push(...group)
    }))
    return arrayVideos
}

function Category({ category, children } : { category: string, children: React.ReactNode }) {
    return (
        <section className={ styles.category }>
            <h2>{category}</h2>
            <div>
                {children}
            </div>
        </section>
    );
}

export default Category;
