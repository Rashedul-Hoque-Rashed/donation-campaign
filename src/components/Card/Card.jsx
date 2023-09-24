
const Card = ({ card }) => {

    const { img, title, category, category_bg, card_bg, text_color } = card

    return (
        <div>
            <div className="card card-compact shadow-xl" style={{backgroundColor: `${card_bg}`, color: `${text_color}`}}>
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h4 className="text-sm font-medium py-1 px-3 rounded-lg w-fit" style={{backgroundColor: `${category_bg}`}}>{category}</h4>
                    <h2 className="card-title">{title}</h2>
                </div>
            </div>
        </div>
    );
};

export default Card;