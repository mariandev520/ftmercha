import Layout from "../components/layout/Layout";
import { patagonia } from "../cards";
import Link from "next/link";

import swal from "sweetalert";



const Patagonia = () => {
  return (
 <Layout>

    
   
      <section className="body-font bg-gray-100">
        
        
        <div className="py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap w-full bg-gray-100 md:py-24 px-10 relative mb-4">
      
<div className='flex items-center justify-center min-h-screen from-teal-100 via-teal-300 to-teal-500 bg-gradient-to-br'>
  <div
            className="overflow-hidden  aspect-video bg-red-400 cursor-pointer rounded-xl relative group"
        >
            <div
                className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end"
            >
                <div>
                    <div
                        className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out"
                    >
                        <div className="font-bold">Jessie Watsica</div>

                        <div className="opacity-60 text-sm ">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Distinctio dolores error iure, perferendis
                            sequi totam. Ad aliquam aperiam atque deleniti dolor
                            dolorem enim esse et in, inventore itaque, pariatur
                            reprehenderit.
                        </div>
                    </div>
                </div>
            </div>
            <img
                alt=""
                class="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                src="img-section-main-patagonia-2.jpg"
            />
        </div>
 </div>
           
          </div>
        </div>
      </section>

    
     

      <section className="text-gray-600 body-font">
     
          <div class="h-screen flex items-center justify-center">
  
 
</div>
</section>
  
     


    </Layout>
  );
};

export default Patagonia;
