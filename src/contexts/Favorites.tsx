import { createContext, useContext, useState } from "react";

interface idObject {
    id: string
}

interface favoritesContextType {
    favorite: idObject[],
    setFavorite: React.Dispatch<React.SetStateAction<any[]>>;
}

export const FavoritesContext = createContext<favoritesContextType>({
    favorite: [],
    setFavorite: () => []
})

FavoritesContext.displayName = "MyFavorites"

export default function FavoritesProvider({ children }: any) {
    const [favorite, setFavorite] = useState<idObject[]>([])

    return (
        <FavoritesContext.Provider
            value={{ favorite, setFavorite }}
        >
            {children}
        </FavoritesContext.Provider>
    );
}

export function useFavoriteContext() {
    const { favorite, setFavorite } = useContext<favoritesContextType>(FavoritesContext)

    function addFavorite(newFavorite: any) {

        const repeatedFavorite = favorite.some((item) => item.id === newFavorite.id)

        let newList = [...favorite]

        if (!repeatedFavorite) {
            newList.push(newFavorite)
            setFavorite(newList)
        } else {

            newList = newList.filter((fav) => fav.id !== newFavorite.id)
            setFavorite(newList)
        }
    }

    return {
        favorite,
        addFavorite
    }
}
