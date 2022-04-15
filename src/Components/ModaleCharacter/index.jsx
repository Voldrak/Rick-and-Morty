import { useEffect, useState } from "react";
import axios from "axios";
import style from "./ModaleCharacter.module.scss";

const ModaleChar = ({closeCharDetails, id}) => {

    const [charactersPrev, setCharactersPrev] = useState([])

    useEffect(() => {
        axios.get(
            `https://rickandmortyapi.com/api/character/2`
            // ${id}
        )
        .then(res => {
            setCharactersPrev(res.data); 
        })
    }, []);

    // console.log(id);

    return(
        <div className={style.modaleDetails}>
         
            <div key={charactersPrev.id}>
                <img src={charactersPrev.image} alt={charactersPrev.name} />
                <p>{charactersPrev.name}</p>
                <p>{charactersPrev.status}</p> 
                <p>{charactersPrev.species}</p>
                <p>{charactersPrev.gender}</p>
                <p>{charactersPrev.created}</p>
            </div> 
            
            <button onClick={closeCharDetails}>Close</button>
        </div>
    )
}

export default ModaleChar;