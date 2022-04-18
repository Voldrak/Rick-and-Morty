import { Link } from "react-router-dom";
import style from "./Header.module.scss"
import SearchBar from "./searchBar";


const Header = () => {
    return(

        <div className={style.Header}>
            <div className={style.container_Title}>
            <Link to={"/"}><h1 className={style.title}>Rick and Morty</h1></Link>
            </div>
            
            <SearchBar />
            <div className={style.filter}>
            <Link to={"/favourite"}>Favourite</Link>
            </div>
        </div>

    )
}

export default Header;