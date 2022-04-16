import style from "./CharPrev.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";


const CharPrev = ({handleCharDetails}) => {

  // const data = props.data || {
  //   id: "1",
  //   name: "Characters",
  //   image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",  
  // };

  const [charactersPreview, setCharactersPreview] = useState([]);

  useEffect(() => {
      axios.get(
          "https://rickandmortyapi.com/api/character"
      )
      .then(res => {
          setCharactersPreview(res.data.results); 
      })
  }, []);

  

  return (
    <ul className={style.charList}>
    {charactersPreview.map(char =>
    <li key={char.id} onClick={() => handleCharDetails(char.id)} className={style.charPrevLi} >
      <img src={char.image} alt={char.name} />
      <p>{char.name}</p>
    </li>
    )}
    </ul>
  );
};

export { CharPrev };