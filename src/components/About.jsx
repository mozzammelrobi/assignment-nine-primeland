import { Helmet } from "react-helmet-async";

const About = () => {
    return (
        <div className="mb-24 mt-20">
            <Helmet>
                <title>About us</title>
            </Helmet>
            <div className="flex gap-5 p-4 flex-col lg:flex-row">

                <div className=" w-11/12 sm:h-1/2 lg:w-1/2">


                    <div className="border border-purple-700 p-4 rounded-lg ">
                        <h3 className="text-4xl font-bold mb-4">About us</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolorum dolores at magni distinctio labore architecto nostrum aliquam facilis amet!</p>
                    </div>

                    <p className="mt-6 p-4">consectetur adipisicing elit. Ex, inventore. Ducimus numquam itaque libero magnam molestias ipsam laboriosam doloribus nulla mollitia hic unde excepturi quas temporibus magni impedit vitae labore vero atque rem, saepe asperiores quo dolorem. Nemo eius itaque praesentium dolore dicta optio, quae alias sint, reiciendis amet quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident soluta praesentium quae nostrum neque iste, quaerat, tenetur quis autem eveniet natus sequi! Corporis, iusto non! Deleniti magni eum vitae eligendi quam asperiores aperiam, totam eveniet reprehenderit fugit ullam dolor at.</p>
                </div>

                <div className="sm:w-1/2 lg:w-1/2 ">
                    <img className="rounded-lg" src="https://i.ibb.co/2WcS6rG/pexels-photo-1481105.jpg" alt="" />
                </div>
            </div>
            <div className="border border-[#A020F0] rounded-lg p-4 mt-10 sm:w-1/2 lg:w-1/2 mx-auto">
                <h3 className="text-3xl font-bold text-center mb-4">Your Services</h3>
                <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa perferendis temporibus optio perspiciatis libero dolore. Error, quaerat. Deleniti temporibus, culpa repellendus eius at laboriosam praesentium minus distinctio. Voluptas, recusandae ad.</p>
            </div>
        </div>
    );
};

export default About;