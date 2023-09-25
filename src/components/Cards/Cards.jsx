// import { useEffect, useState } from "react";
import Card from "../Card/Card";
import PropTypes from "prop-types"

const Cards = ({ search }) => {

    // const [cards, setCards] = useState([]);

    // useEffect(() => {
    //     fetch('data.json')
    //         .then(res => res.json())
    //         .then(data => setCards(data));
    // }, [])



    return (
        <div className="container mx-auto md:px-10 pt-24 pb-36">
            <div>
                {
                    search?.length ?
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {
                                search.map(card => <Card key={card.id} card={card}></Card>)
                            }
                        </div>
                        :
                        <p className="flex h-96 text-5xl font-bold justify-center items-center text-black">No Matching Data</p>
                }
            </div>
        </div>
    );
};

Cards.propTypes = {
    search: PropTypes.array
}

export default Cards;