import { useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import EstateCard from "../components/EstateCard";


const Home = () => {
    const data = useLoaderData()
    console.log(data)

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
                        <img className='w-full h-96' src="https://i.ibb.co/xDDLNQq/download.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='w-full h-96' src="https://i.ibb.co/cDVSJDx/Real-Estate-Agent-Business-India.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='w-full h-96' src="https://i.ibb.co/xDDLNQq/download.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='w-full h-96' src="https://i.ibb.co/cDVSJDx/Real-Estate-Agent-Business-India.jpg" alt="" />
                    </div>
                </SwiperSlide>

            </Swiper>
            <div className="container mx-auto">
                <div className="mt-16">
                    <h1 className="text-3xl text-center font-bold mb-4 " >Fine Your Best <span className="text-purple-700">Property</span></h1>
                    <p className="text-center">Wheather you are an independent real estate agent or a larger brokarage. You wealth is your best assets</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-16">
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