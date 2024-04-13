import { Helmet } from "react-helmet-async";


const Contact = () => {
    return (
        <div className="mb-24">
            <Helmet>
                <title>contact</title>
            </Helmet>


            <div className="flex items-center p-2 gap-5 flex-col sm:flex-row lg:flex-row "> 
                <div className="w-full sm:w-1/2 lg:w-1/2">
                    <h3 className="text-5xl font-bold mb-4">Contact with us</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae molestias error optio expedita nihil amet perferendis tempora quisquam voluptatibus animi.</p>
                    <button className="btn btn-secondary mt-5">Know more</button>
                </div>

                <div className=" lg:w-1/2">
                    <img src="https://i.ibb.co/7bLPpk2/contact-removebg-preview.png" alt="" />
                </div>

            </div>

        </div>
    );
};

export default Contact;