import styles from "./Category.module.css";
import videos from "../../json/videos.json";

export const categories: string[] = videos.reduce((category:string[], item) => {
    return category.includes(item.category) ? category : [...category, item.category]
}, [])

export function filterCategory(category: string): string[] {
    return videos.filter((video) => video.category === category).map((video) => video.id)
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
