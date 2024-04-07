import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';


const Home = () => {
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
        </div>
    );
};

export default Home;