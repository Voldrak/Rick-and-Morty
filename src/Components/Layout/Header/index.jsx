import style from "./Header.module.scss"

const Header = () => {
    return(

        <div className={style.Header}>
            <label htmlFor="search">Search <input type="text" placeholder="Search here" /> </label>
        </div>

    )
}

export default Header;