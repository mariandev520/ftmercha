import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { init, sendForm } from "emailjs-com";
import Swal from 'sweetalert2';

// LLama a la función init con el id de Emailjs como parámetro.
init("user_1xeHhIAqEdSO67KBXZP");

const FormService = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  
  const [statusMessage, setStatusMessage] = useState("Mensaje");

  // Función que toma como parámetros el id del servicio, id del template y el id del form. Y envía los datos del form al email.
  const onSubmit = (data) => {
    const statusMessage = document.querySelector(".status-message");
    const form = document.querySelector("#contact-form");
    sendForm("service_8jhyua7", "template_7ifru1a", "#contact-form").then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        form.reset();
        // Alert
        Swal.fire(
          'Tu mensaje ha sido enviado',
          '¡Muchas Gracias!',
          'success'
        );
      },
      function (error) {
        console.log("FAILED...", error);
        setStatusMessage(
          "Error al enviar el mensaje, por favor intente de nuevo."
        );
        statusMessage.className = "status-message failure";
        setTimeout(() => {
          statusMessage.className = "status-message";
        }, 2000);
      }
    );
  };

  return (
    <div>
      <>
        <section className="text-gray-600 body-font bg-gray-100">
          <form
            className="md:container px-2 py-24 mx-auto"
            id="contact-form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col text-center w-full mt-24">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-600">Cotiza nuestros servicios</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Si necesitás un servicio Post Venta en cualquier lugar del país,
                por favor completá el formulario y en breve te contactamos.</p>
            </div>

            <style jsx>{`
              .status-message {
                opacity: 0;
                color: red;
              }
              .success {
                opacity: 1;
              }
              .failure {
                opacity: 1;
              }
            `}</style>

            <div className=" md:px-5 px-0 py-16 mx-auto">
              
              <div className="bg-white lg:w-1/2 md:w-2/3 mx-auto p-8 shadow-md">
                <div className="flex flex-wrap -m-2">
                  
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Nombre y apellido*
                      </label>
                   </div>
                  
                  <div className="p-2 md:w-1/2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="telefono"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Teléfono*
                      </label>
                      <input
                        type="text"
                        id="telefono"
                        name="user_telefono"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        {...register("user_telefono", { required: true })}
                      ></input>
                      {errors.user_telefono?.type === "required" && (
                        <p className="text-xs text-red-500" role="alert">
                          Campo obligatorio.
                        </p>
                      )}
                    </div>
                  </div>
                  </div>
                  
                  <div className="p-2 md:w-1/2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Email*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="user_email"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        {...register("user_email", { required: true })}
                      ></input>
                      {errors.user_email?.type === "required" && (
                        <p className="text-xs text-red-500" role="alert">
                          Campo obligatorio.
                        </p>
                      )}
                    </div>
                  </div>
                  
            
                  
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="nameinstalador"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Nombre y empresa interesada
                      </label>
                      <input
                        type="text"
                        id="nameinstalador"
                        name="user_nameinstalador"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        {...register("user_nameinstalador", { required: true })}
                      ></input>
                      {errors.user_nameinstalador?.type === "required" && (
                        <p className="text-xs text-red-500" role="alert">
                          Campo obligatorio.
                        </p>
                      )}
                    </div>
                  </div>
              </div>
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="message"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Comentario
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      ></textarea>
                    </div>
                  </div>
                  <div><p className="leading-7 text-sm text-gray-600">* Campos obligatorios.</p></div> 
                  <div className="p-2 w-full">
                    <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                      Enviar
                    </button>
                  </div>
                  <p className="status-message flex mx-auto text-center">
                    {statusMessage}
                  </p>
               
            
           
          </form>
        </section>
      </>
    </div>
  );
};

export default FormService;
