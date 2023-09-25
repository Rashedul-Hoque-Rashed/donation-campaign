import { useLoaderData, useParams } from "react-router-dom";
import Swal from 'sweetalert2'

const CardDetails = () => {

    const cards = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const card = cards.find(card => card.id === idInt);

    const handelDonate = () => {

        const addDonate = [];

        const donation = JSON.parse(localStorage.getItem('donate'));
        if (!donation) {
            addDonate.push(card);
            localStorage.setItem('donate', JSON.stringify(addDonate));
            Swal.fire({
                icon: 'success',
                title: 'Your donate has been successful',
                showConfirmButton: false,
                timer: 1500
            })
        }
        else {
            const exist = donation.find(donate => donate.id === idInt);
            if (!exist) {
                addDonate.push(...donation, card);
                localStorage.setItem('donate', JSON.stringify(addDonate));
                Swal.fire({
                    icon: 'success',
                    title: 'Your donate has been successful',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Already donate',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        }
    }


    return (
        <div className="container mx-auto px-4 md:px-10 mt-14 mb-20">
            <div>
                <div className="hero mx-auto h-56 md:h-96 lg:h-[600px]  rounded-lg" style={{ backgroundImage: `url(${card.img})` }}>
                    <div className="w-full text-start text-neutral-content mt-[152px] md:mt-[295px] lg:mt-[480px]">
                        <div className="w-full p-3 md:p-5 lg:p-9 hero-overlay rounded-lg">
                            <button onClick={handelDonate} className="btn normal-case text-white lg:text-xl lg:font-semibold" style={{ backgroundColor: `${card.text_color}` }}>Donate ${card.price}</button>
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