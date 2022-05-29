import React, { useState } from "react";
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import Swal from 'sweetalert2';
import "animate.css"
import * as emailjs from 'emailjs-com';

// LLama a la función init con el id de Emailjs como parámetro.

    
class FormService extends React.PureComponent {
    
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          message: '',
          number:''
        };
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleSubmit(event) {
        event.preventDefault();
    
        const { name, email,  message , number } = this.state;
    
        if(name==='' || email==='' || message ===''  || message ===''  ) { 
    
           
    
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
            swal(
       
                
                 'complete todos los campos' 
              )
    
        } else {

        
    
        emailjs.sendForm('service_igde7xi', 'template_test', event.target,'user_DjxbpiGhrI5bsn5NN7Lm7')
        this.resetForm();
      ;
    
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
    
      swal({
       
        icon: 'success',
        title: 'Gracias!! En breve responderemos' 
      })
        
        }
      }
      resetForm() {
        this.setState({
          name: '',
          email: '',
          message: '',
          number:''
        });
      }
    
    
    
      handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
      }
    
    
      render() {
        const { name, email,message, number } = this.state;
    
    
        return (
            
            <section >


              <div class="bg-gradient-to-r from-green-00  min-h-screen  py-6 flex flex-col justify-center sm:py-12">
	<div class="relative py-3 sm:max-w-xl sm:mx-auto">
            <form class="animate__animated animate__backInUp  animate__delay-2s "  onSubmit={ this.handleSubmit} >
                
     

		<div
			class="absolute inset-0 bg-gradient-to-r from-green-300 to-green-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div  class="max-w-md mx-auto">
				<div>
                    
					<h1 class="text-2xl font-semibold">Contactate con Nosotr@s </h1>
				</div>
				<div class="divide-y divide-gray-200">
					<div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
				
                        <div class="relative">
							<input autocomplete="off" value={name}  onChange={this.handleChange} name="name" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Nombre" />
							
                            <label htmlFor="name" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Nombre</label>
						</div>
                        <div class="relative">
							<input   autocomplete="off" id="email"  onChange={this.handleChange} value={email} type="email"   name="email" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
							<label  htmlFor="email" class="absolute left-0 -top-3.5 caret-green-200 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"> <p className="font-bold">Email</p></label>
						</div>
                        <div class="relative">
							<input autocomplete="off" value={number} onChange={this.handleChange} type="number" name="number"  id="telefono"
                        class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
							<label htmlFor="telefono" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Celular</label>
						</div>
					</div>
                    <label
                        htmlFor="message"
                        className="leading-7 text-sm text-gray-600"
                      ><p className="font-bold"> Comentario </p>
                        
                      </label>
                      <textarea 
                      value={message}
                        id="message"
                        name="message"
                        onChange={this.handleChange}
                        className="w-full bg-gray-100 bg-opacity-50 caret-green-200 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-100 ease-in-out"
                      ></textarea>
                      
                    </div>
                        
                  </div>
                  <div class="relative">
							<button type="submit"  class="bg-gradient-to-r from-green-300 to-green-800 hover:from-green-400 hover:to-green bg-green-300 text-white rounded-md px-2 py-1">Contactar</button>
						</div> 
				</div>
</form>
        			</div>
                    
       </div>
 

 </section>
        
  
  );
};

}
export default FormService;
