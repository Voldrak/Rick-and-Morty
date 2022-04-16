import Layout from "../Layout/index.jsx";
import ModaleChar from "../ModaleCharacter/index.jsx";
import { useEffect, useState } from "react";
import { CharPrev } from "../CharPrev";
import style from "./Pages.module.scss";
import axios from "axios";


const Home = () => {

    const [charDetails, setCharDetails] = useState(false);
    const [custId, setCustId] = useState("");

    const handleCharDetails = (id) => {
        setCharDetails(true);
        setCustId(id);
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
                    <CharPrev handleCharDetails={handleCharDetails} />
                </aside>
                {charDetails && <ModaleChar customedID={custId} closeCharDetails={closeCharDetails} />}
            </div>
        </Layout>
        </div>
    )
}

export default Home;