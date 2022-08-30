import pic from './images/OllieNorrland.jpg';

const AboutMe = () => {


    return (
        <div className="container flex flex-col items-center mx-auto my-12 bg-indigo-800 rounded-xl md:flex-row md:my-24 ">
            <div className="flex flex-col items-start justify-center w-full px-6 pt-12 pb-24 lg:w-1/2">
                <p className="text-lg font-bold tracking-widest text-gray-200 uppercase animate-pulse">Frontend Developer Student</p>
                <h1 className="my-4 text-3xl font-bold text-gray-200 uppercase ">Lina Andersson</h1>
                <p className="mb-4 font-mono leading-normal underline decoration-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus soluta autem reprehenderit, temporibus sit molestiae ab veritatis tempore quae magnam neque corporis id, odio vero pariatur alias in. Saepe, officia!
                </p>
                <div className="font-sans text-lg font-medium text-white ">
                    <ul className="m-6 list-disc">
                        <li>Lorem ipsum dolor</li>
                        <li>sit amet consectetur adipisicing elit.</li>
                        <li>Libero, esse quaerat doloribus nesciunt minima</li>
                        <li>dignissimos laudantium aperiam illo</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, esse quaerat doloribus nesciunt minima voluptas at quibusdam quisquam eius dignissimos laudantium aperiam illo, explicabo neque ea? Molestias eum nesciunt quidem.</li>
                    </ul>


                </div>
            </div>

            <div className="text-center lg:w-1/2">
                <img src={pic} alt="Dog" className="md:w-full" />
            </div>

        </div>

    );
}

export default AboutMe;