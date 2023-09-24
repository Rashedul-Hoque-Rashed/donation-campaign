import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCards(data));
    }, [])

    return (
        <div className="container mx-auto md:px-10 pt-24 pb-36">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {
                cards.map(card => <Card key={card.id} card={card}></Card>)
            }
            </div>
        </div>
    );
};

export default Cards;