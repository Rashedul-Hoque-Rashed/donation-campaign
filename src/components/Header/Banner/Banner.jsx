

const Banner = () => {
    return (
        <div style={{ backgroundImage: 'url(src/assets/donation.png)', backgroundSize: 'cover' }}>
            <div className="hero min-h-[250px] md:min-h-[350px] lg:min-h-[450px]" >
                <div className="hero-overlay bg-white bg-opacity-90"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 md:mb-10 md:text-4xl lg:text-5xl font-bold text-[#0B0B0B]">I Grow By Helping People In Need</h1>
                        <input type="text" placeholder="Search here...." className="input input-bordered w-full max-w-xs mb-5 text-black" />
                        <button className="btn bg-[#FF444A] text-white hover:bg-red-400 ml-2">Button</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;