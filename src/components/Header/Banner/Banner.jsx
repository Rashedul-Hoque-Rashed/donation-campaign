import PropTypes from 'prop-types';

const Banner = ({ cards, setSearch }) => {

    const handelSubmit = e => {
        e.preventDefault()
    }
    const handelSearch = e => {
        if (!e.target.value) {
            setSearch(cards)
        }
        else {
            const searchArray = cards.filter(card => card.category.toLowerCase().includes(e.target.value.toLowerCase()));
            setSearch(searchArray);
        }


    }

    return (
        <div style={{ backgroundImage: 'url(https://i.ibb.co/y4Lv9Gk/donation.png)', backgroundSize: 'cover' }}>
            <div className="hero min-h-[250px] md:min-h-[350px] lg:min-h-[450px]" >
                <div className="hero-overlay bg-white bg-opacity-90"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 md:mb-10 md:text-4xl lg:text-5xl font-bold text-[#0B0B0B]">I Grow By Helping People In Need</h1>
                        <form onSubmit={handelSubmit}>
                            <input onChange={handelSearch} type="text" name={'search'} placeholder="Search here...." className="input input-bordered w-full max-w-xs mb-5 text-black" />
                            <button type="submit" className="btn bg-[#FF444A] text-white hover:bg-red-400 ml-2">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

Banner.propTypes = {
    cards: PropTypes.array,
    setSearch: PropTypes.func
}

export default Banner;