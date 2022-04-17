import style from "./Header.module.scss"
import SearchBar from "./searchBar";


const Header = () => {
    return(

        <div className={style.Header}>
            <SearchBar />
        </div>

    )
}

export default Header;