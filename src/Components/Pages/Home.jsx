import Layout from "../Layout/index.jsx";
import ModaleChar from "../ModaleCharacter/index.jsx";
import { createContext, useState } from "react";
import { CharPrev } from "../CharPrev";
import style from "./Pages.module.scss";

export const Context = createContext({ value: "", setValue: () => {} });


const Home = () => {

    const [value, setValue] = useState("");
    const [charDetails, setCharDetails] = useState(false);
    const [custId, setCustId] = useState("");

    // APERTURA MODALE CON LETTURA DI ID
    const handleCharDetails = (id) => {
        setCharDetails(true);
        setCustId(id);
    };
    
    // CHIUSURA MODALE
    const closeCharDetails = () => {
        setCharDetails(false)
    };

    return(
        <div className={style.wrapper_Home}>
            <Context.Provider value={{ value, setValue }}>
                <Layout>
                        <div>
                            <h2>Characters List</h2>
                            <aside className={style.ListChar}>
                                <CharPrev handleCharDetails={handleCharDetails} />
                            </aside>
                            {charDetails && <ModaleChar customedID={custId} closeCharDetails={closeCharDetails} />}
                        </div>
                </Layout>
            </Context.Provider>
        </div>
    )
}

export default Home;