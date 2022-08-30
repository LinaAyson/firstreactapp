import emailjs from '@emailjs/browser';
import React from 'react';

export default function ContactMe() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_3caw5bf', 'template_75g0a0q', e.target, 'user_BVZrceAuhC3jU9ZG5WVRO')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <div>
            <div className="container mx-auto bg-indigo-500 rounded-3xl">
                <form className='mt-1 m-14' onSubmit={sendEmail}>
                    <div className="pt-5 mx-auto row">
                        <label className="block"><span className="font-semibold text-gray-200">Full name</span>
                            <input type="text" className="block w-full mt-1 border-gray-300 rounded-md shadow-sm form-control focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" name="from_name" />
                        </label>
                        <label className="block"><span className="font-semibold text-gray-200">Email</span>
                            <input type="text" className="block w-full mt-1 border-gray-300 rounded-md shadow-sm form-control focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" name="user_email" />
                        </label>
                        <label className="block">
                            <span className="font-medium text-gray-200">Skriv ditt meddelande</span>
                            <textarea className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" name="message" rows="3">
                            </textarea>
                        </label>
                        <div className="pt-3 mx-auto col-8">
                            <input type="submit" className="px-4 py-2 m-10 mb-4 font-bold text-gray-100 bg-indigo-900 rounded hover:bg-indigo-700" value="Send message" />
                        </div>
                    </div>
                </form>
            </div>
        </div>


    )
}
