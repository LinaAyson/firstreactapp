import React from 'react';
import pic from './images/Lina.jpg';


const MyWorks = () => {
    return (
        <div className="w-full">
            <div className="flex flex-col p-5 mx-auto bg-pink-100 shadow-xl rouded-xl ">
                <div className="">
                    <img src={pic} alt="profilepic" className="mx-auto rounded-full shadow-xl w-52 drop-shadow-2xl" />
                </div>
                <div className="mt-5 text-center">
                    <p className="text-xl text-gray-900 sm:text-2xl">
                        Lina Andersson
                    </p>
                    <p className="inline-block w-auto px-5 pt-2 pb-4 text-lg font-extrabold text-gray-600 border-b-2">
                        Mina arbeten
                    </p>
                    <div className="flex justify-center mt-4 align-center">
                    </div>
                    <p className="pb-4 text-3xl text-gray-900 text-bold animate-ping">Soon to come!</p>

                </div>

            </div>

        </div>

    );
}

export default MyWorks;