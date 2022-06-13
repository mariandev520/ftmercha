import Link from 'next/link';
import Layout from '../components/layout/Layout';
import { termos } from '../cards';

const Termos = () => {
  return (
    <Layout>
      <section class='text-gray-600 body-font'>
        <div class='container px-5 py-24 mx-auto flex flex-wrap'>
          <div class='lg:w-full mx-auto'>
            <div class='flex flex-wrap w-full h-full py-32 px-10 relative mb-4'>
              <img
                alt='gallery'
                class='w-full object-cover h-full object-center block absolute inset-0'
                src='dd.jpg'
              />
              {/* <div class='text-center relative z-10 w-full'>
                <h2 class='text-2xl text-gray-900 font-medium title-font mb-2'>
                  Shooting Stars
                </h2>
                <p class='leading-relaxed'>
                  Skateboard +1 mustache fixie paleo lumbersexual.
                </p>
                <a class='mt-3 text-green-500 inline-flex items-center'>
                  Learn More
                  <svg
                    fill='none'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    class='w-4 h-4 ml-2'
                    viewBox='0 0 24 24'
                  >
                    <path d='M5 12h14M12 5l7 7-7 7'></path>
                  </svg>
                </a>
              </div> */}
            </div>
            <div class='flex flex-wrap -mx-2'>
              <div class='px-2 w-1/2'>
                <div class='flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative'>
                  <img
                    alt='gallery'
                    class='w-full object-cover h-full object-center block absolute inset-0'
                    src='retail2.jpg'
                  />
                  {/* <div class='text-center relative z-10 w-full'>
                    <h2 class='text-xl text-gray-900 font-medium title-font mb-2'>
                      Shooting Stars
                    </h2>
                    <p class='leading-relaxed'>
                      Skateboard +1 mustache fixie paleo lumbersexual.
                    </p>
                    <a class='mt-3 text-green-500 inline-flex items-center'>
                      Learn More
                      <svg
                        fill='none'
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        class='w-4 h-4 ml-2'
                        viewBox='0 0 24 24'
                      >
                        <path d='M5 12h14M12 5l7 7-7 7'></path>
                      </svg>
                    </a>
                  </div> */}
                </div>
              </div>
              <div class='px-2 w-1/2'>
                <div class='flex flex-wrap w-full h-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative'>
                  <img
                    alt='gallery'
                    class='w-full object-cover h-full object-center block absolute inset-0'
                    src='retail10.jpg'
                  />
                  {/* <div class='text-center relative z-10 w-full'>
                    <h2 class='text-xl text-gray-900 font-medium title-font mb-2'>
                      Shooting Stars
                    </h2>
                    <p class='leading-relaxed'>
                      Skateboard +1 mustache fixie paleo lumbersexual.
                    </p>
                    <a class='mt-3 text-green-500 inline-flex items-center'>
                      Learn More
                      <svg
                        fill='none'
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        class='w-4 h-4 ml-2'
                        viewBox='0 0 24 24'
                      >
                        <path d='M5 12h14M12 5l7 7-7 7'></path>
                      </svg>
                    </a>
                  </div> */}
                </div>
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
  );
};

export default Termos;
