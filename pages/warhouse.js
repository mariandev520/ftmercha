
import Layout from '../components/layout/Layout';
import 'transition-style';


const warhouse = () => {
    return (

     
<div className="flex flex-wrap justify-center gap-12 container mx-auto bg-gray-50">


<div className="w-[360px] h-[480px] py-8 px-1">
    <div
        className="relative flex flex-col justify-center items-center w-[300px] h-[400px] mx-auto p-2 bg-slate-50 border-slate-900 text-slate-50 shadow-lg rounded-3xl hover:shadow-xl">

        <h3 class="absolute -top-5 -left-5 w-32 p-2 bg-slate-800 rounded-3xl text-2xl font-merriweather text-center">
            Eazy IP
        </h3>

        <a href="https://eazyip.github.io/" target="__blank"
            class="block w-full mx-auto p-2 md:mx-auto hover:rotate-2 transition ease-in-out delay-75 duration-150">
            <img src="https://imgur.com/iUzX7FD.png" alt="Eazy IP Web app showcase mockup" class="object-fill"></img>
        </a>

        <p
            class="absolute -bottom-12 left-6 w-[300px] p-4 bg-inherit border-slate-900 text-slate-900 border shadow-lg rounded-3xl hover:text-black hover:shadow-xl">
            Eazy IP is a Progressive Web App that aims at becoming an essensial toolkit for the network engineers by
            handling the IP operations flawlessly
        </p>
    </div>
</div>

<div class="w-[360px] h-[480px] py-8 px-1">
    <div
        class="relative flex flex-col justify-center items-center w-[300px] h-[400px] mx-auto p-2 bg-slate-50 border-slate-900 border-2 rounded-3xl">

        <h3
            class="absolute -top-5 -left-5 w-32 p-2 bg-inherit border-slate-900 text-slate-900 border-2 rounded-3xl text-2xl font-merriweather text-center">
            Eazy IP
        </h3>

        <a href="https://eazyip.github.io/" target="__blank"
            class="block w-full mx-auto p-2 md:mx-auto hover:rotate-2 transition ease-in-out delay-75 duration-150">
            <img src="https://imgur.com/iUzX7FD.png" alt="Eazy IP Web app showcase mockup" class="object-fill"></img>
        </a>

        <p class="absolute -bottom-12 left-6 w-[300px] p-4 bg-slate-800 text-slate-50 rounded-3xl hover:text-white">
            Eazy IP is a Progressive Web App that aims at becoming an essensial toolkit for the network engineers by
            the
            handling IP operations flawlessly
        </p>
    </div>
</div>
</div>

)
};

    
    

    export default warhouse;