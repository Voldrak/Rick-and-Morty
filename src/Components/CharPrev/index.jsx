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

    // CHECK ELEMENTO GIA' TRA I PREFERITI //
    const checkInclusi = (val) =>
    favorite.find((char) => char.name.includes(val));

    // AGGIUNGERE AI PREFERITI //
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
    <div className={style.wrapper_CharPrev}>
      <p>Page {currentPage}</p>
    <aside className={style.charList}>
    {charactersPreview.map((char) =>
      char.name.toLowerCase().includes(value.toLowerCase()) && (
    <div key={char.id} className={style.wrapper_List}>
      <div onClick={() => handleCharDetails(char.id)} className={style.charPrevLi} >
        <img src={char.image} alt={char.name} className={style.imageCharacter} />
        <p>{char.name}</p> 
      </div>
      <button
        onClick={() => addToFavourite(char)}
        className={style.btnAdd}
        disabled={checkInclusi(char.name)}
      >
        {!checkInclusi(char.name)
          ? "⭐"
          : "🌟"}
      </button>
    </div>
    )
    )}
    </aside>
    <Pagination goToPreviousPage={goToPreviousPage} changePage={changePage} goToNextPage={goToNextPage}/>
    </div>
  );
};

export { CharPrev };