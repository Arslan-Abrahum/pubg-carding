import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

function Cards() {

    const { cards, viewDetails } = useGlobalContext()

    return (
        <div className='h-auto w-full flex items-center flex-wrap p-5 gap-5'>
            {cards && cards.length > 0 ? (
                cards.map((card) => (
                    <div key={card.id} className="card bg-white custom-shadow shadow-lg rounded-lg overflow-hidden w-[23%] mx-auto">
                        <div className="overflow-hidden p-2">
                            <img src={card.imageUrl} alt={card.title} className="w-full h-64 object-cover rounded-lg" />
                        </div>
                        <div className="card-body p-6 flex flex-col justify-center items-center">
                            <h2 className="card-title text-2xl font-bold mb-2">{card.title}</h2>
                            <h3 className="text-xl mb-4">PKR: <span className="font-semibold">{card.amount}</span></h3>
                            <Link className='no-underline w-full' to={"/details"}>
                                <button onClick={()=> viewDetails(card)} className="bg-red-500 cursor-pointer text-white py-2 font-semibold px-4 w-full rounded hover:bg-red-600 transition duration-300">View Details</button>
                            </Link>
                        </div>
                    </div>
                ))
            ) : (
                <div className="text-center w-full   text-gray-600">
                    <p className='text-2xl mt-3 mb-3 font-semibold'>No card items found.</p>
                </div>
            )}
        </div>
    );
}

export default Cards;
