import style from "./Header.module.scss";
import { useContext } from "react";
import { Context } from "./../../Pages/Home";

const SearchBar = () => {
    const { setValue } = useContext(Context);
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
    return (
      <form className={style.searchDiv}>
      <label>
          Cerca: <input
          className={style.searchInput}
          onChange={handleChange}
          type="text"
        />
        </label>
      </form>
    );
  };
  
  export default SearchBar;
  