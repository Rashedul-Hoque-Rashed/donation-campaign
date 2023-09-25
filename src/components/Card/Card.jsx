import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Card = ({ card }) => {

    const { id, img, title, category, category_bg, card_bg, text_color } = card;




    return (
        <div className='mx-2'>
            <NavLink to={`/card/${id}`}>
                <div className="card card-compact shadow-xl" style={{ backgroundColor: `${card_bg}`, color: `${text_color}` }}>
                    <figure><img className='w-full' src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h4 className="text-sm font-medium py-1 px-3 rounded-lg w-fit" style={{ backgroundColor: `${category_bg}` }}>{category}</h4>
                        <h2 className="card-title">{title}</h2>
                    </div>
                </div>
            </NavLink>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object.isRequired
}

export default Card;