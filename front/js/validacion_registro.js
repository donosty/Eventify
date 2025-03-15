document.addEventListener('DOMContentLoaded', () =>{

    const nombre = document.querySelector('#nombre_registro')
    const apellido = document.querySelector('#apellido_registro')
    const correo = document.querySelector('#correo_registro')
    const contrasena = document.querySelector('#contrasena_registro')

    const formulario = document.querySelector('#form_registro')

    const btnRegistro = document.querySelector('.boton_desactivado_registro')

    const obj = {

        name : false,
        sname : false,
        em : false,
        password : false
    }

    eventListeners()
    function eventListeners(){

        nombre.addEventListener('input', validacionNombre)
        apellido.addEventListener('input', validacionApellido)
        correo.addEventListener('input', comprobarEmail)
        contrasena.addEventListener('input', comprobarContraseña)
    }

    function validarFormulario(){

        if(obj.name && obj.sname && obj.em && obj.password){

            borrarAlerta()
            btnRegistro.classList.remove('boton_desactivado_registro')
            btnRegistro.classList.add('boton_activado_registro')
            btnRegistro.removeAttribute('disabled');

        } else {

            btnRegistro.classList.remove('boton_activado_registro')
            btnRegistro.classList.add('boton_desactivado_registro')
            btnRegistro.setAttribute('disabled', 'disabled')
        }
    }

    function validacionNombre(){

        if(nombre.value.trim() === ''){

            mostrarAlerta('El campo nombre es requerido')
            obj['name'] = false
            validarFormulario()
            return
        } 

        if(nombre.value.length < 3){

            mostrarAlerta('Nombre invalido')
            obj['name'] = false   
            validarFormulario()     
            return
        }

        borrarAlerta()
        obj['name'] = true

        validarFormulario()
       
    }

    function validacionApellido(){

        if(apellido.value.trim() === ''){

            mostrarAlerta('El campo apellido es requerido')
            obj['sname'] = false   
            validarFormulario()   
            return  
        } 

        if(apellido.value.length < 3){

            mostrarAlerta('Apellido invalido')
            obj['sname'] = false    
            validarFormulario()  
            return  
        }

        borrarAlerta()
        obj['sname'] = true       

        validarFormulario()

    }

    function comprobarEmail(){

        if(correo.value.trim() === ''){

            mostrarAlerta('El campo correo es requerido')
            obj['em'] = false  
            validarFormulario()
            return      
        }

        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
        const resultado = regex.test(correo.value);

        if(!resultado){

            mostrarAlerta('El email es invalido')
            obj['em'] = false        
            validarFormulario()
            return
        }

        borrarAlerta()

        obj['em'] = true    

        validarFormulario()

    }

    function comprobarContraseña(){

        if(contrasena.value.trim() === ''){

            mostrarAlerta('El campo contraseña es requerido')
            obj['password'] = false 
            validarFormulario()
            return       
        }

        if(contrasena.value.length < 10){

            mostrarAlerta('La contraseña debe se ser de 10 o mas caracteres')
            obj['password'] = false
            validarFormulario()
            return        
        }

        borrarAlerta()
        obj['password'] = true      

        validarFormulario()
    }

    function mostrarAlerta(mensaje){
    
        borrarAlerta()
        const contenedorMensaje = document.createElement('DIV')
        contenedorMensaje.classList.add('bg-danger', 'fw-bold', 'text-center', 'fs-3', 'w-100', 'p-2', 'mt-4')

        const msj = document.createElement('P')
        msj.classList.add('text-white')
        msj.textContent = mensaje

        contenedorMensaje.appendChild(msj)

        formulario.appendChild(contenedorMensaje)

    }

    function borrarAlerta(){

       for(const nodo of formulario.childNodes){

            if(nodo.classList && nodo.classList.contains('bg-danger')){

                nodo.remove()
            }
       }
       
    }




})