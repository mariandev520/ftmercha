import Layout from "../components/layout/Layout";
import Navbar from "../components/layout/Navbar";
import Slide from "../components/Slide";
import 'transition-style';
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";


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
                  <Link href="/warhouse">
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
                  <div>
  </div>


                </div>
              </div>
            </div>
          </div>
    

        </section>
        
            


<section className="animate__animated 
 animate__delay-2s "
 class="relative  bg-blueGray-50">
<div class="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div class="absolute top-0 w-full h-full bg-center bg-cover" 
          >
          <span id="blackOverlay" class="w-full h-full absolute opacity-75 bg-gradient-to-br from-green-400 to-green-200 "></span>
        </div>
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div class="pr-12">
                <h1 class=" font-semibold text-5xl text-gray-500 hover:text-green-800">
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
      <section  class=" pb-10 bg-blueGray-200 -mt-24 animate__animated animate__pulse animate__slow 3s ">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap">
            <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div class="px-4 py-5 flex-auto">
                  <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <i class="fas fa-award"></i>
                  </div>
                  <h6 class="text-xl text-gray-600   font-semibold ">Agencia Laboral</h6>
                  <p class="mt-2 mb-4 text-gray-400 hover:text-green-800 ">
                  Años de experiencia aseguran nuestro organización de los recursos humanos más específicos y dedicados.
                  </p>
                </div>
              </div>
            </div>
     
            <div class="w-full md:w-4/12 px-4 text-center p-20">
              <div class="pb-10 bg-blueGray-200 -mt-24 animate__animated animate__pulse animate__slow 1s animate__infinite">
              <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div class="px-4 py-5 flex-auto">
                  <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                    <i class="fas fa-retweet"></i>
                  </div>
                
                  <h6 class="text-xl text-gray-600 font-semibold ">Inversiones Seguras</h6>
                  <p class="mt-2 mb-4 text-gray-400 hover:text-green-800 cursor-pointer">
                  Su inversión en nuestros servicios potencia su negocio a lo largo del desarrollo de su cartera de productos y clientes.
                  </p>
                  </div>
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
                  <p class="mt-2 mb-4 text-gray-400 hover:text-green-800 cursor-pointer">
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

      
<div class="bg-white h-screen flex items-center justify-center p-12 py-6">
  <div class="mx-auto w-full max-w-screen-lg bg-green-400 px-5 py-10">
    <div class="grid gap-5 md:grid-cols-2 md:gap-10 lg:gap-20">
      <div class="flex justify-center md:justify-end">
        <img class="w-full max-w-sm" src="https://ouch-cdn2.icons8.com/sKnF2PmYhkmP28DzIm6KqWSknT03UVWjg3FLlGYIOp4/rs:fit:684:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvOTI3/L2U4OWQ2NmZiLTg0/NzEtNDc3NS1hNTA0/LTMwNWRiYmJkNzg0/MC5zdmc.png" alt="Marketing newsletter via computer Illustration in PNG, SVG" />
      </div>
      <div class="flex items-center">
        <div class="mx-auto md:mx-0">
          <h3 class="text-4xl font-bold text-white">Suscribirse</h3>
          <p class="mt-2 max-w-[20rem] text-lg text-white/80">Recibe las últimas novedades del sector  </p>
          <form action="" class="mt-4 flex flex-col">
            <input type="email" name="email" id="email" placeholder="Ingresa Tu Email" class="w-full rounded border border-white/50 bg-transparent px-3 py-2 text-white placeholder:text-white/50 md:max-w-[18rem]" />
            <button type="submit" class="mt-4 w-full max-w-[14rem] rounded bg-white/30 px-14 py-2 text-center text-white">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
 
      </Layout>
    </div>
  );
};

export default Index;
