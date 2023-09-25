import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Donate = ({ donate }) => {

    const { id, donation_img, category, title, price, category_bg, card_bg, text_color } = donate

    return (
        <div className='flex rounded-lg' style={{ backgroundColor: `${card_bg}` }}>
            <div>
                <img className='h-52' src={donation_img} alt="" />
            </div>
            <div className='p-6'>
                <p className='px-3 py-1 rounded-lg w-fit' style={{ backgroundColor: `${category_bg}`, color: `${text_color}` }}>{category}</p>
                <h4 className='mt-2 text-2xl font-semibold text-[#0B0B0B]'>{title}</h4>
                <p className='text-base font-semibold' style={{ color: `${text_color}` }}>${price}</p>
                <Link to={`/card/${id}`}><button className="btn normal-case text-white py-2 px-4 mt-4" style={{ backgroundColor: `${text_color}` }}>View Details</button></Link>
            </div>
        </div>
    );
};

Donate.propTypes = {
    donate: PropTypes.object
}

export default Donate;