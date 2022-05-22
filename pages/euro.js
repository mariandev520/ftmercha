import Layout from '../components/layout/Layout';
import { euro } from '../cards'
import Link from 'next/link';

const Euro = () => {
    return ( 
        <Layout>
        <section className="body-font bg-gray-100">
          <div className="py-24 mx-auto flex flex-wrap">
            <div className="flex flex-wrap w-full bg-gray-100 md:py-24 px-10 relative mb-4">
              <img alt="gallery" className="w-full object-cover md:h-auto  block absolute inset-0" src="img-section-main-euro-2.jpg"/>
            </div>
          </div>
        </section>
        
        
        <section className="bg-gray-200 text-gray-600 body-font">
          <div className="container md:mt-60 px-5 md:px-40 md:py-24 py-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-600">Acciones Promocionales</h1>
            <div className="h-1 mx-auto bg-gradient-to-r from-yellow-500 to-yellow-600 w-24 mt-3 rounded mb-8"></div>
          </div>
          <div className="md:flex flex-wrap">          
                      </div>
                    </div>   
                   
                    <div class="grid grid-cols-2 gap-4">
    <div class="bg-blue-300 w-52 h-72 m-8 static rounded-lg ">
        <div class="bg-white w-52 h-72 -m-2 hover:m-0 absolute rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in ">
            <h1 class="m-4 text-2xl font-bold">Wat is Lorem Ipsum?</h1>
            <hr class="m-4 rounded-2xl border-t-2"></hr>
            <p class="m-4 text-sm">Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak</p>
        </div>
    </div>
    <div class="bg-green-300 w-52 h-72 m-8 static rounded-lg ">
        <div class="bg-white w-52 h-72 hover:-m-2 absolute rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in ">
            <h1 class="m-4 text-2xl font-bold">Wat is Lorem Ipsum?</h1>
            <hr class="m-4 rounded-2xl border-t-2"></hr>
            <p class="m-4 text-sm">Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak</p>
        </div>
    </div>
    <div class="bg-red-300 w-52 h-72 m-8 static rounded-lg ">
        <div class="bg-white w-52 h-72 hover:m-2 absolute rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in ">
            <h1 class="m-4 text-2xl font-bold">Wat is Lorem Ipsum?</h1>
            <hr class="m-4 rounded-2xl border-t-2"></hr>
            <p class="m-4 text-sm">Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak</p>
        </div>
    </div>
    <div class="bg-yellow-300 w-52 h-72 m-8 static rounded-lg ">
        <div class="bg-white w-52 h-72 m-2 hover:m-0 absolute rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in ">
            <h1 class="m-4 text-2xl font-bold">Wat is Lorem Ipsum?</h1>
            <hr class="m-4 rounded-2xl border-t-2"></hr>
            <p class="m-4 text-sm">Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak</p>
        </div>
    </div>

</div>
          </section>
          
        </Layout>
     );
}
 
export default Euro;