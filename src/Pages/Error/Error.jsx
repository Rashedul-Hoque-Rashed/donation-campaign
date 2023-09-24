import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="flex items-center justify-center text-center min-h-[80vh]">
            <div>
            <h2 className="text-5xl font-bold mb-6">Oops!!</h2>
            <p className="text-xl font-semibold mb-5">There wse no data found.</p>
            <button className="btn normal-case bg-rose-500 text-white hover:bg-rose-600 text-lg font-bold"><Link to={"/"}>Go Back Home</Link></button>
            </div>
        </div>
    );
};

export default Error;