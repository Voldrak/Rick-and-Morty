import Layout from "../Layout/index.jsx";
import ModaleChar from "../ModaleCharacter/index.jsx";
import { useEffect, useState } from "react";
import { CharPrev } from "../CharPrev";
import style from "./Pages.module.scss";
import axios from "axios";
// import { useStateValue } from "./../Libs/StateProvider";


const Home = () => {

    const [charactersPreview, setCharactersPreview] = useState([]);
    const [charDetails, setCharDetails] = useState(false)

    // const [ dispach] = useStateValue()
    // useEffect(() => {
    //     http("/character").then((data) => setCharactersPreview(data.results));
    // }, []);
   
    useEffect(() => {
        axios.get(
            "https://rickandmortyapi.com/api/character"
        )
        .then(res => {
            console.log(res.data.results);
            setCharactersPreview(res.data.results); 
        })
    }, []);

    const handleCharDetails = (e) => {
        setCharDetails(true);
    };

    const closeCharDetails = () => {
        setCharDetails(false)
    };

    return(
        <div>
        <Layout>
            
            <div>
                <h1>Rick and Morty</h1>
                <aside className={style.ListChar}>
                    
                    {charactersPreview.map(char => (
                        <div key={char.id} onClick={handleCharDetails}>
                        <CharPrev data={char} />
                        </div>
                        ))}
                </aside>
                        {charDetails && <ModaleChar closeCharDetails={closeCharDetails} />}
            </div>
        </Layout>
        </div>
    )
}

export default Home;