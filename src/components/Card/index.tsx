import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import iconFavorite from "./img/favorite.png";
import iconUnfavorite from "./img/unfavorite.png";
import { useFavoriteContext } from "../../contexts/Favorites";

function Card({ id }: { id: string }) {

    const { favorite, addFavorite } = useFavoriteContext()
    const isFavorite = favorite.some((fav) => fav.id === id)
    const iconTest = isFavorite ? iconUnfavorite : iconFavorite
 
    return (
        <section className={ styles.card }>
            <Link to={ `/watch/${id}` }>
                <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} 
                alt="Capa" className={ styles.cover }/>
            </Link>
            <figure className={ styles.icon }>
                <img 
                    src={ iconTest } 
                    alt="Favoritar vídeo"
                    onClick={ () => addFavorite({id}) }
                />
            </figure>
        </section>
    );
}

export default Card;
