import { useEffect, useState } from "react";
import axios from "axios";
import style from "./ModaleCharacter.module.scss";

const ModaleChar = ({closeCharDetails, customedID}) => {

    const [charactersPrev, setCharactersPrev] = useState([])


    useEffect(() => {
        axios.get(
            `https://rickandmortyapi.com/api/character/` + customedID
        )
        .then(res => {
            setCharactersPrev(res.data); 
        })
    }, [customedID]);

    return(
        <div className={style.modaleDetails}>
         
            <div key={charactersPrev.id} className={style.modalWrapper}>
                <img src={charactersPrev.image} alt={charactersPrev.name} className={style.modalImgChar} loading="lazy"/>
                <div className={style.modalDescription}>
                    <p>Name: {charactersPrev.name}</p>
                    <p>Status: {charactersPrev.status}</p> 
                    <p>Species: {charactersPrev.species}</p>
                    <p>Gender: {charactersPrev.gender}</p>
                    <p>Created: {charactersPrev.created}</p>
                    <button onClick={closeCharDetails} className={style.modalBtnClose}>✖️</button>
                </div> 
            </div>
            
        </div>
    )
}

export default ModaleChar;