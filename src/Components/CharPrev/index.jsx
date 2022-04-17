import style from "./CharPrev.module.scss";
import { useEffect, useState, useContext } from "react";
import { Context } from "./../Pages/Home";
import axios from "axios";
import Pagination from "./../Pagination";


const CharPrev = ({handleCharDetails}) => {

  const [charactersPreview, setCharactersPreview] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  // const [colorNumPage, setColorNumPage] = useState("#fff")

  const { value } = useContext(Context);

  useEffect(() => {
      axios.get(
        `https://rickandmortyapi.com/api/character/?page=` + currentPage
      )
      .then(res => {
          setCharactersPreview(res.data.results); 
      })
  }, [currentPage]);

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

    return (
    <>
    <ul className={style.charList}>
    {charactersPreview.map((char) =>
    char.name.toLowerCase().includes(value.toLowerCase()) && (
    <li key={char.id} onClick={() => handleCharDetails(char.id)} className={style.charPrevLi} >
      <img src={char.image} alt={char.name} loading="lazy" />
      <p>{char.name}</p>
    </li>
    )
    )}
    </ul>
    <Pagination goToPreviousPage={goToPreviousPage} changePage={changePage} goToNextPage={goToNextPage}/>
    </>
  );
};

export { CharPrev };