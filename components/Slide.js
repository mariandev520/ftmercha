
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import "swiper/components/pagination/pagination.min.css"
import { Swiper, SwiperSlide} from 'swiper/react';
import "transition-style";

// Import Swiper styles
// import 'swiper/swiper-bundle.css';
// install Swiper modules
SwiperCore.use([ Navigation, Pagination, Autoplay ]);

function dhat() {
    { var ldk = document.createElement('script'); ldk.type = 'text/javascript'; ldk.async = true; ldk.src = 'https://s.cliengo.com/weboptimizer/62960b923a5ff3002a347c4e/62960b933a5ff3002a347c52.js?platform=view_installation_code'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ldk, s); }
   
  
   }
   

const Slide = () => {
    
    return ( 
        
        
        <Swiper
    
            navigation
            pagination={true} 
            autoplay={{delay: 4000, disableOnInteraction: false+{dhat}}}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide transition-style="in:square:bottom-right"><img  onClick={dhat} src="/img-main-patagonia.jpg" className="md:h-screen w-screen object-cover md:mt-26"/></SwiperSlide>
            <SwiperSlide  ><img onClick={dhat} src="/img-main-euro.jpg" className="md:h-screen w-screen object-cover md:mt-26"/></SwiperSlide>
            <SwiperSlide><img  onClick={dhat} src="/pepe3.jpg" className="md:h-screen w-screen object-cover md:mt-26"/></SwiperSlide>
            <SwiperSlide><img onClick={dhat} src="/img-section-main-termos-eco.jpg" className="md:h-screen w-screen object-cover md:mt-26"/></SwiperSlide>
        </Swiper>
    );
}
 
export default Slide;