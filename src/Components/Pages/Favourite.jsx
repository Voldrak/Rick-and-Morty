import { useStateValue } from "./../Libs/StateProvider";
import Layout from "./../Layout"
import style from "./Pages.module.scss"
import FavoriteCharacters from "./../FavoriteCharacters";


const Favorite = () => {
    const [{ favorite }] = useStateValue();

    return(
        <Layout>
            <div className={style.wrapper_FavoritesPage}>
                <h2>Favorite List</h2> 
                {favorite?.length === 0 ? (
                    <div className={style.EmptyList}>
                        <h2>Favorite List Empty</h2>
                    </div>
                ) : (
                    <div className={style.container_Favorites}>
                {favorite?.map((item) => (
                    <div key={item.id} className={style.wrapper_Favorites}>
                    <FavoriteCharacters
                        id={item.id} 
                        image={item.image}
                        name={item.name}
                    />
                    </div>
                ))}
                </div>
                )}
            </div>
        </Layout>
    )
}

export default Favorite;