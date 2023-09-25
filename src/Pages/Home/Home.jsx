
import { useEffect, useState } from "react";
import Cards from "../../components/Cards/Cards";
import Banner from "../../components/Header/Banner/Banner";

const Home = () => {

    const [cards, setCards] = useState([]);
    const [search, setSearch] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => {setCards(data), setSearch(data)});
    }, [])


    return (
        <div>
            <Banner cards={cards} setSearch={setSearch}></Banner>
            <Cards search={search}></Cards>
        </div>
    );
};

export default Home;