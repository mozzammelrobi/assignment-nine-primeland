import { useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import EstateCard from "../components/EstateCard";
import Services from "../components/Services";


const Home = () => {
    const data = useLoaderData()

    return (
        <div>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div>
                        <img className='w-full h-96' src="https://i.ibb.co/n8kmkmG/banner-1.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='w-full h-96' src="https://i.ibb.co/QCRGfwS/living-room-581073-1280.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='w-full h-96' src="https://i.ibb.co/tQmFZh4/house-961401-1280.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='w-full h-96' src="https://i.ibb.co/GvXnD5q/house-6799908-1280.jpg" alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="container mx-auto mt-16">
                <Services></Services>
            </div>


            <div className="container mx-auto mt-24">
                <div>
                    <h1 className="text-3xl text-center font-bold mb-4 " >Fine Your Best <span className="text-purple-700">Property</span></h1>
                    <p className="text-center">Wheather you are an independent real estate agent or a larger brokarage. You wealth is your best assets</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 mb-16">
                    {
                        data?.map(estate => <EstateCard
                            key={estate.id}
                            estate={estate}
                        ></EstateCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;