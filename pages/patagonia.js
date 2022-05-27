import Layout from "../components/layout/Layout";
import { patagonia } from "../cards";
import Link from "next/link";

const Patagonia = () => {
  return (
 <Layout>
      <section className="body-font bg-gray-100">
        
        <div className="py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap w-full bg-gray-100 md:py-24 px-10 relative mb-4">
            <img
              alt="gallery"
              className="w-full object-cover md:h-auto object-center block absolute inset-0"
              src="img-section-main-patagonia-2.jpg"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-200 text-gray-600 body-font">
        <div className="container md:mt-60 px-5 md:px-40 md:py-24 py-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-600">
Cobertura Nacional con personal propio, cubriendo 2.000 puntos de venta con SUPERVISORES EXCLUSIVOS.
            </h1>
            <div className="h-1 mx-auto bg-gradient-to-r from-yellow-500 to-yellow-600 w-24 mt-3 rounded mb-8"></div>
          </div>
        
          
          </div>
          <div class="bg-gray-200 h-screen flex items-center justify-center">
  
  <card class="flex flex-col bg-white w-1/4 border border-gray-300">
    
    <header class="font-semibold p-3">
     calendario Servicios
    </header>
    
    <content class="hover:bg-gray-200 cursor-pointer grid grid-cols-6 border-t border-gray-300 p-3">
      
      <div>
        <img src="https://picsum.photos/30/30"  class="rounded-lg" />
      </div>
      
      <div class="col-span-5 flex flex-col">
        <name class="li">
       <Link href="https://calendar.google.com/calendar/embed?src=a0ju6u8pbrigc5kvatj9os3n4s%40group.calendar.google.com&ctz=Etc%2FGMT"> Yago Alonso</Link>
        </name>
        
        <description   class="text-gray-400 text-sm">
         Tares
        </description>
      </div>
      
    </content>
    
    <content class="hover:bg-gray-200 cursor-pointer grid grid-cols-6 border-t border-gray-300 p-3">
      
      <div>
        <img src="https://picsum.photos/30/30" class="rounded-lg" />
      </div>
      
      <div class="col-span-5 flex flex-col">
        <name class="">
          Merchandising 
        </name>
        
        <description src="https://calendar.google.com/calendar/embed?src=a0ju6u8pbrigc5kvatj9os3n4s%40group.calendar.google.com&ctz=Etc%2FGMT" class="text-gray-400 text-sm">
       Tares
        </description>
      </div>
      
    </content>
    
    <content class="hover:bg-gray-200 cursor-pointer grid grid-cols-6 border-t border-gray-300 p-3">
      
      <div>
        <img src="https://picsum.photos/30/30" class="rounded-lg" />
      </div>
      
      <div class="col-span-5 flex flex-col">
        <name class="">
         Tares
        </name>
        
        <description class="text-gray-400 text-sm">
          A community discussing Software Developer and Engineer careers
        </description>
      </div>
      
    </content>
    
  </card>
  
</div>
      </section>
      <div class="h-screen w-screen flex justify-center items-center bg-slate-900 ">
         <div class="bg-slate-800 text-white rounded-lg w-full mx-5 md:w-[40rem]  space-y-6 p-10">
       
        <div class="flex space-x-4 items-center ">
          <div class="w-12 h-12"
          >
           
            <div>
            </div>
          </div>
          <div class="space-y-2">
            <div class="flex space-x-2 items-center">
              <h2 class="text-base"> John Doe</h2>
           
              <div class="  text-xs text-slate-400"></div>
            </div>
            <p class=" text-xs text-slate-400">10 Monthes Ago</p>
          </div>

        </div>
     
        <div>
          <p class="text-sm leading-6 text-slate-300">

          </p>
        </div>


     </div>


  </div>
    </Layout>
  );
};

export default Patagonia;
