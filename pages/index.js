import Layout from "../components/layout/Layout";
import Navbar from "../components/layout/Navbar";
import Slide from "../components/Slide";
import 'transition-style';


import Link from "next/link";


const Index = () => {
  
 
  
  
  return (
    <div className="text-gray-200">
      <Layout>
        <Navbar  />
      
       
        <Slide />
       

        <section className=" body-font bg-gray-100">
          <div className="container px-5 md:py-24 py-12 mx-auto flex flex-wrap">
            <div transition-style="in:wipe:up" className="md:w-2/3 w-full mx-auto">
              <Link href="/patagonia">
                
                <a className="flex flex-wrap w-full h-96 bg-gray-100 md:py-32 relative mb-4 overflow test">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block absolute inset-0 card-img-top"
                    src="clientes.jpg"
                  />
                  <div className="details text-white">
                    <h2 className="text-3xl font-medium title-font mb-2">
                  
                    </h2>
                    <p className="leading-relaxed">
                      Sumate!!
                    </p>
                  </div>
                </a>
              </Link>
              <div className="flex flex-wrap -mx-2">
                <div transition-style="in:wipe:bottom-right" className="md:w-1/2 p-2 w-full">
                  <Link href="/euro">
                    <a className="flex flex-wrap w-full bg-gray-100 md:py-32 py-20 relative mb-4 overflow test">
                      <img
                        alt="gallery"
                        className="w-full object-cover h-42 object-center block absolute inset-0 card-img-top"
                        src="img-section-euro-2.jpg"
                      />
                      <div className="details text-white">
                        <h2 className="text-3xl font-medium title-font mb-2">
                        
                        </h2>
                        <p className="leading-relaxed">
                        Logistica Funcional
                        </p>
                      </div>
                    </a>
                  </Link>
                </div>
                <div transition-style="in:wipe:bottom-left" className="md:w-1/2 p-2 w-full">
                  <Link href="/termos">
                    <a className="flex flex-wrap w-full bg-gray-100 md:py-32 py-20 relative mb-4 overflow test">
                      <img
                        alt="gallery"
                        className="w-full object-cover h-42 object-center block absolute inset-0 card-img-top"
                        src="img-section-termo.jpg"
                      />
                      <div className="details text-white">
                        <h2 className="text-3xl font-medium title-font mb-2">
                        
                        </h2>
                        <p className="leading-relaxed">
                          Buscamos Talentos
                        </p>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
            


<section className="animate__animated animate__backInUp
 animate__delay-2s "
 class="relative  bg-blueGray-50">
<div class="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div class="absolute top-0 w-full h-full bg-center bg-cover" 
          >
          <span id="blackOverlay" class="w-full h-full absolute opacity-75 bg-gray-300"></span>
        </div>
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div class="pr-12">
                <h1 class=" font-semibold text-5xl text-gray-400 hover:text-green-800">
                 Crecimiento Garantizado 
                </h1>
                <p class="mt-4 text-lg text-gray-700">
                  Nuestros equipos estan al servicio de sus productos 
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px">
          <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon class="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
      </div>
      <section  class=" pb-10 bg-blueGray-200 -mt-24 animate__animated animate__pulse animate__slow 1s animate__infinite">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap">
            <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div class="px-4 py-5 flex-auto">
                  <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <i class="fas fa-award"></i>
                  </div>
                  <h6 class="text-xl text-gray-600  font-semibold">Agencia Laboral</h6>
                  <p class="mt-2 mb-4 text-green-700">
                   Años de experiencia aseguran nuestro organizacion de los recursos humanos mas espeficicos y dedicados.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-4/12 px-4 text-center ">
              <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div class="px-4 py-5 flex-auto">
                  <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                    <i class="fas fa-retweet"></i>
                  </div>
                  <h6 class="text-xl text-gray-600 font-semibold">Inversiones Seguras</h6>
                  <p class="mt-2 mb-4 text-green-700">
                    Su inversion en nuestros servicios potencia su negocio a lo largo del desarrollo de su cartera de productos y clientes.
                  </p>
                </div>
              </div>
            </div>
            <div  class="pt-6 w-full md:w-4/12 px-4 text-center">
              <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div class="px-4 py-5 flex-auto">
                  <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                    <i class="fas fa-fingerprint"></i>
                  </div>
                  <h6  class="text-xl  text-gray-600  font-semibold">Marketing Grafica Digital</h6>
                  <p class="mt-2 mb-4 text-green-700">
                  Publicidad gráfica especializada en carteleria, señalización, corporeos, leds, exhibidores , fotografía, decoración de vehículos, puntos de venta.
                  </p>
                </div>
              </div>
            </div>
          </div>
         
            </div>
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap items-center md:justify-between justify-center">
      <div class="w-full md:w-6/12 px-4 mx-auto text-center">
        <div class="text-sm text-blueGray-500 font-semibold py-1">
        Desing <a class="text-blueGray-500 hover:text-gray-800" target="_blank"></a> by <a href="https://www.mad.net.ar" class="text-blueGray-500 hover:text-gray-800" target="_blank"> MAD</a>.
        </div>
      </div>
    </div>
  </div>
</section>
      </section>

      </Layout>
    </div>
  );
};

export default Index;
