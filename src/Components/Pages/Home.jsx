import Layout from "../Layout/index.jsx";
import {http} from "./../Libs/http.jsx"
import { useEffect, useState } from "react";
import { CharPrev } from "../CharPrev";
import style from "./Pages.module.scss";

const Characters = [];

const Home = () => {

    const [charactersPreview, setCharactersPreview] = useState(Characters);


    useEffect(() => {
        http("/character").then((data) => setCharactersPreview(data.results));
    }, []);


    return(
        <>
        <Layout>
            <div>
                <h1>Rick and Morty</h1>
                <aside className={style.ListChar}>
                    {charactersPreview.map((char, index) => (
                        <CharPrev key={index} data={char} />
                    ))}
                </aside>
            </div>
        </Layout>
        </>
    )
}

export default Home;