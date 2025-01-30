import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import logementsData from "../data/logements.json";
import "../assets/styles/home.scss";

const Home = () => {
    const [logements, setLogements] = useState([]);

    useEffect(() => {
        setLogements(logementsData);
    }, []);

    return (
        <div className="home">
            <Banner image="/assets/banner.jpg" text="Chez vous, partout et ailleurs" />
            <div className="grid">
                {logements.map((logement) => (
                    <Card key={logement.id} id={logement.id} title={logement.title} cover={logement.cover} />
                ))}
            </div>
        </div>
    );
};

export default Home;
