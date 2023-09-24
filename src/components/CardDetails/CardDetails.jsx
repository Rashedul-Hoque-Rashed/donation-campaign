import { useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {

    const cards = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const card = cards.find(card => card.id === idInt);

    console.log(card)


    return (
        <div className="container mx-auto px-4 md:px-10 mt-14 mb-20">
            <div>
                <div className="hero mx-auto h-56 md:h-96 lg:h-[600px]  rounded-lg" style={{ backgroundImage: `url(${card.img})` }}>
                    <div className="w-full text-start text-neutral-content mt-[152px] md:mt-[295px] lg:mt-[480px]">
                        <div className="w-full p-3 md:p-5 lg:p-9 hero-overlay rounded-lg">
                            <button className="btn normal-case text-white lg:text-xl lg:font-semibold" style={{ backgroundColor: `${card.text_color}` }}>Donate ${card.price}</button>
                        </div>
                    </div>
                </div>
            </div>
            <h3 className="text-4xl font-bold text-[#0B0B0B] mt-14 mb-6">{card.title}</h3>
            <p className="text-base font-normal text-[#0B0B0BB3]">{card.description}</p>
        </div>
    );
};

export default CardDetails;