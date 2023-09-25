import { useEffect, useState } from "react";
import Donate from "../../components/Donate/Donate";

const Donation = () => {

    const [donates, setDonates] = useState([]);
    const [noDonate, setNoDonate] = useState("")

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
            {
                noDonate ?
                    <p className="flex h-96 text-5xl font-bold justify-center items-center text-black">{noDonate}</p>
                    :
                    <div className="grid grid-cols-2 gap-6">
                        {
                            donates.map(donate => <Donate key={donate.id} donate={donate}></Donate>)
                        }
                    </div>
            }
        </div>
    );
};

export default Donation;