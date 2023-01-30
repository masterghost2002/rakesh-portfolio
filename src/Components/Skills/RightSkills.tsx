// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import CertificatesCard from "./CertificatesCard";
import {Data} from './CertificatesData';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function RightSkills() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {Data.map((item, index)=>
            <SwiperSlide key={index}>
                <CertificatesCard 
                    certificateName = {item.certificateName}
                    description = {item.description}
                    certificateImage = {item.certificateImage}
                    certificateLink = {item.certificateLink}
                />
            </SwiperSlide>)}
      </Swiper>
    </>
  );
}
