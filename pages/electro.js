import Link from 'next/link';
import Layout from '../components/layout/Layout';
import { termos } from '../cards';

import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import "swiper/components/pagination/pagination.min.css"
import { Swiper, SwiperSlide} from 'swiper/react';
import "transition-style";

SwiperCore.use([ Navigation, Pagination, Autoplay ]);

const Termos = () => {
  return (
    <Layout>
    
  

      <section className="py-24 mx-auto flex flex-wrap">
      
<div class=" flex justify-center items-center bg-slate-900 ">
         <div class="bg-slate-800 text-white rounded-lg w-full mx-5 md:w-[40rem]  space-y-6 p-10">
   
        <div class="flex space-x-2 items-center ">
          <div class="w-12 1h-12"
          >
          
            <div>
            </div>
          </div>
          <div class="space-y-2">
            <div class="flex space-x-2 items-center">
         
              <div class="  text-xs text-slate-400">posted an update</div>
            </div>
            <p class=" text-xs text-slate-400">10 Monthes Ago</p>
          </div>

        </div>
      
        <div>
          <p class="text-sm leading-6 text-slate-300">
            Hypnosis at the parallel universe was the advice of alarm, commanded to a conscious ship.
            Processors experiment with paralysis!
          </p>
        </div>


    


        <div class="grid grid-cols-6 col-span-2   gap-2  ">
          <div class=" overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
                
        
    <Swiper
    
    navigation
    pagination={false} 
    autoplay={{delay: 6000, disableOnInteraction: false}}
    slidesPerView={1}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
>
    <SwiperSlide transition-style="in:square:bottom-right">  <img  src='leno5.jpg' className="md:h-screen w-screen object-cover md:mt-26"/></SwiperSlide> 
    <SwiperSlide >   <img   src='leno.jpg'  className="md:h-screen w-screen object-cover md:mt-26"/> </SwiperSlide>
    <SwiperSlide><img   src="leno3.jpg" className="md:h-screen w-screen object-cover md:mt-26"/></SwiperSlide>
    <div            
                class="text-white animate__animated animate__backInDown animate__delay-2s text-xl absolute inset-0 mt-32 text-4xl  text-left text-white font-bold bg-slate-900/80 flex justify-center items-center">
  Fulltimegroup
            </div>

    <SwiperSlide><img src="leno4.jpg" className="md:h-screen w-screen object-cover md:mt-26"/></SwiperSlide>
</Swiper>
            
          </div>
          <div class=" overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
        
              
        
    <Swiper
    
    navigation
    pagination={false} 
    autoplay={{delay: 3000, disableOnInteraction: false}}
    slidesPerView={1}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
>
    <SwiperSlide transition-style="in:square:bottom-right">  <img  src='leno.jpg' className="md:h-screen w-screen object-cover md:mt-26"/></SwiperSlide> 
    <SwiperSlide >   <img   src='leno3.jpg'  className="md:h-screen w-screen object-cover md:mt-26"/> </SwiperSlide>
    <SwiperSlide><img   src="leno5.jpg" className="md:h-screen w-screen object-cover md:mt-26"/></SwiperSlide>

    <SwiperSlide><img src="leno5.jpg" className="md:h-screen w-screen object-cover md:mt-26"/></SwiperSlide>
</Swiper>
          </div>
          <div class=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
        
          </div>
          <div class=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
      
          </div>
          <div class="relative overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
           
          
          </div>
        </div>

      
</div>


  </div> 
      
      </section>

      <section class='text-gray-600 body-font mt-60'>
        <div class='container px-5 py-24 mx-auto'>
          <div class='text-center mb-20'>
            <h1 class='sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4'>
              Acciones de Trade Marketing para productos de tecnología
            </h1>
            <p class='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto'>
              Nuestro amplio conocimiento de los PDV´s y del mercado en general,
              nos permite desarrollar ACCIONES INTEGRALES DE MARKETING acordes
              al requerimiento de cada marca.
            </p>
          </div>
          <div class='flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2'>
            <div class='p-2 sm:w-1/2 w-full'>
              <div class='bg-gray-100 rounded flex p-4 h-full items-center'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='3'
                  class='text-green-500 w-6 h-6 flex-shrink-0 mr-4'
                  viewBox='0 0 24 24'
                >
                  <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                  <path d='M22 4L12 14.01l-3-3'></path>
                </svg>
                <span class='title-font font-medium'>
                  Acciones Integrales de marketing.
                </span>
              </div>
            </div>
            <div class='p-2 sm:w-1/2 w-full'>
              <div class='bg-gray-100 rounded flex p-4 h-full items-center'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='3'
                  class='text-green-500 w-6 h-6 flex-shrink-0 mr-4'
                  viewBox='0 0 24 24'
                >
                  <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                  <path d='M22 4L12 14.01l-3-3'></path>
                </svg>
                <span class='title-font font-medium'>
                  Puntos de venta, vía pública y eventos.
                </span>
              </div>
            </div>
            <div class='p-2 sm:w-1/2 w-full'>
              <div class='bg-gray-100 rounded flex p-4 h-full items-center'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='3'
                  class='text-green-500 w-6 h-6 flex-shrink-0 mr-4'
                  viewBox='0 0 24 24'
                >
                  <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                  <path d='M22 4L12 14.01l-3-3'></path>
                </svg>
                <span class='title-font font-medium'>
                  Potenciar el producto
                </span>
              </div>
            </div>
            <div class='p-2 sm:w-1/2 w-full'>
              <div class='bg-gray-100 rounded flex p-4 h-full items-center'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='3'
                  class='text-green-500 w-6 h-6 flex-shrink-0 mr-4'
                  viewBox='0 0 24 24'
                >
                  <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                  <path d='M22 4L12 14.01l-3-3'></path>
                </svg>
                <span class='title-font font-medium'>Demostraciones</span>
              </div>
            </div>
            <div class='p-2 sm:w-1/2 w-full'>
              <div class='bg-gray-100 rounded flex p-4 h-full items-center'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='3'
                  class='text-green-500 w-6 h-6 flex-shrink-0 mr-4'
                  viewBox='0 0 24 24'
                >
                  <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                  <path d='M22 4L12 14.01l-3-3'></path>
                </svg>
                <span class='title-font font-medium'>Lanzamientos</span>
              </div>
            </div>
            <div class='p-2 sm:w-1/2 w-full'>
              <div class='bg-gray-100 rounded flex p-4 h-full items-center'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='3'
                  class='text-green-500 w-6 h-6 flex-shrink-0 mr-4'
                  viewBox='0 0 24 24'
                >
                  <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                  <path d='M22 4L12 14.01l-3-3'></path>
                </svg>
                <span class='title-font font-medium'>Exhibición</span>
              </div>
            </div>
            <div class='p-2 sm:w-1/2 w-full'>
              <div class='bg-gray-100 rounded flex p-4 h-full items-center'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='3'
                  class='text-green-500 w-6 h-6 flex-shrink-0 mr-4'
                  viewBox='0 0 24 24'
                >
                  <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                  <path d='M22 4L12 14.01l-3-3'></path>
                </svg>
                <span class='title-font font-medium'>Manejo de marca</span>
              </div>
            </div>
            <div class='p-2 sm:w-1/2 w-full'>
              <div class='bg-gray-100 rounded flex p-4 h-full items-center'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='3'
                  class='text-green-500 w-6 h-6 flex-shrink-0 mr-4'
                  viewBox='0 0 24 24'
                >
                  <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                  <path d='M22 4L12 14.01l-3-3'></path>
                </svg>
                <span class='title-font font-medium'>
                  Equipos de Trade Marketing
                </span>
              </div>
            </div>
            <div class='p-2 sm:w-1/2 w-full'>
              <div class='bg-gray-100 rounded flex p-4 h-full items-center'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='3'
                  class='text-green-500 w-6 h-6 flex-shrink-0 mr-4'
                  viewBox='0 0 24 24'
                >
                  <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                  <path d='M22 4L12 14.01l-3-3'></path>
                </svg>
                <span class='title-font font-medium'>
                  Equipos de Trade Marketing
                </span>
              </div>
            </div>
            <div class='p-2 sm:w-1/2 w-full'>
              <div class='bg-gray-100 rounded flex p-4 h-full items-center'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='3'
                  class='text-green-500 w-6 h-6 flex-shrink-0 mr-4'
                  viewBox='0 0 24 24'
                >
                  <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                  <path d='M22 4L12 14.01l-3-3'></path>
                </svg>
                <span class='title-font font-medium'>Profesionalismo</span>
              </div>
            </div>
            <div class='p-2 sm:w-1/2 w-full'>
              <div class='bg-gray-100 rounded flex p-4 h-full items-center'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='3'
                  class='text-green-500 w-6 h-6 flex-shrink-0 mr-4'
                  viewBox='0 0 24 24'
                >
                  <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                  <path d='M22 4L12 14.01l-3-3'></path>
                </svg>
                <span class='title-font font-medium'>
                  Reportes, Gestión Post-Venta
                </span>
              </div>
            </div>
          </div>
 
        </div>
 
 </section>
 
 </Layout>      
  )  
 
};

export default Termos;
