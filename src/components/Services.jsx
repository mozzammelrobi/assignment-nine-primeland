

const Services = () => {
    return (
        <div>
            <div className="mb-10">
                <h1 className="text-5xl font-bold text-center">Your Sevices</h1>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="border border-red-600 flex flex-col justify-center items-center rounded-lg p-6">
                    <div className="w-full  flex justify-center">
                        <img className="w-24" src="https://i.ibb.co/10C09Wv/images.png" alt="" />
                    </div>
                    <h2 className="text-3xl font-bold mt-4 mb-2">Buy a House </h2>
                    <p className="text-center text-gray-400">Discover your future home: timeless comfort, security, and cherished memories.</p>
                </div>
                <div className="border border-red-600 flex flex-col justify-center p-6 rounded-lg">
                   <div className="flex justify-center">
                   <img className="w-24" src="https://i.ibb.co/X44ZCcy/images.png" alt="" />
                   </div>
                    <h2 className="text-3xl font-bold text-center mt-4 mb-2"> Rent House </h2>
                    <p className="text-center text-gray-400">Charming abode offering comfort, convenience, and modern amenities.</p>
                </div>
                <div className="border border-red-600 flex flex-col justify-center p-6 rounded-lg">
                   <div className="flex justify-center">
                   <img className="w-24" src="https://i.ibb.co/fXG2Xd5/images.png" alt="" />
                   </div>
                    <h2 className="text-3xl font-bold text-center mt-4 mb-2">Sell a House </h2>
                    <p className="text-center text-gray-400">Tranquil modern living in lush surroundings, blending nature with luxury.</p>
                </div>
            </div>

        </div>
    );
};

export default Services;