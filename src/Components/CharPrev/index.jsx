import style from "./CharPrev.module.scss";
import { useEffect, useState, useContext } from "react";
import { Context } from "./../Pages/Home";
import axios from "axios";
import Pagination from "./../Pagination";
import { useStateValue } from "./../Libs/StateProvider";



const CharPrev = ({handleCharDetails}) => {

  const [charactersPreview, setCharactersPreview] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [{ favorite }, dispatch] = useStateValue();

  const { value } = useContext(Context);

  useEffect(() => {
      axios.get(
        `https://rickandmortyapi.com/api/character/?page=` + currentPage
      )
      .then(res => {
          setCharactersPreview(res.data.results); 
      })
  }, [currentPage, favorite]);

  const goToNextPage = () => {
    if (currentPage !== 42){
    setCurrentPage((page) => page + 1);
    }
  }

    const goToPreviousPage = () => {
      if (currentPage !== 1) {
        setCurrentPage((page) => page - 1);
        }
    }

    const changePage = (e) => {
        const pageNumber = Number(e.target.textContent)
        setCurrentPage(pageNumber);
    }

    const checkInclusi = (val) =>
    favorite.find((char) => char.name.includes(val));

    const addToFavourite = (items) => {
      dispatch({
        type: "favorite_char",
        obj: {
          id: items.id,
          image: items.image,
          name: items.name,
        },
      });
    };

    
    return (
    <>
    <ul className={style.charList}>
    {charactersPreview.map((char) =>
    char.name.toLowerCase().includes(value.toLowerCase()) && (
    <div key={char.id}>
      <li  onClick={() => handleCharDetails(char.id)} className={style.charPrevLi} >
        <img src={char.image} alt={char.name} loading="lazy" />
        <p>{char.name}</p> 
      </li>
      <button
        onClick={() => addToFavourite(char)}
        className={style.btnAdd}
        disabled={checkInclusi(char.name)}
      >
        {!checkInclusi(char.name)
          ? "Add to Favourite"
          : "Already in the Favorites"}
      </button>
    </div>
    )
    )}
    </ul>
    <Pagination goToPreviousPage={goToPreviousPage} changePage={changePage} goToNextPage={goToNextPage}/>
    </>
  );
};

export { CharPrev };