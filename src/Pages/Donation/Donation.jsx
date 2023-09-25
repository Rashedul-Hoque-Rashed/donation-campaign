import { useEffect, useState } from "react";
import Donate from "../../components/Donate/Donate";

const Donation = () => {

    const [donates, setDonates] = useState([]);
    const [noDonate, setNoDonate] = useState("");
    const [isSeeAll, setIsSeeAll] = useState(false);

    useEffect(() => {
        const donation = JSON.parse(localStorage.getItem('donate'));
        if (donation) {
            setDonates(donation);
        }
        else {
            setNoDonate("You haven't given any donations yet....")
        }

    }, [])


    return (
        <div className="container mx-auto px-4 md:px-10 mt-14 mb-20">
            <div>
                {
                    noDonate ?
                        <p className="flex h-96 text-2xl md:text-4xl lg:text-5xl font-bold justify-center items-center text-black">{noDonate}</p>
                        :
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {
                                isSeeAll ?
                                    donates.map(donate => <Donate key={donate.id} donate={donate}></Donate>)
                                    :
                                    donates.slice(0, 4).map(donate => <Donate key={donate.id} donate={donate}></Donate>)
                            }
                        </div>
                }
            </div>
            

            <div className="flex justify-center mt-10">
            {
                donates.length > 4 && <button onClick={() => setIsSeeAll(!isSeeAll)} className="btn normal-case text-white bg-[#009444] px-5 hover:bg-green-800">{
                    isSeeAll? 'See Less' : 'See All'
                }
                </button>
            }
            </div>


        </div>
    );
};

export default Donation;