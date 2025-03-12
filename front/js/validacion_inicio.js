document.addEventListener('DOMContentLoaded', () =>{

    const correo = document.querySelector('#correo_sesion')
    const contrasena = document.querySelector('#contrasena_sesion')
    const formulario = document.querySelector('.form_sesion')
    const btnSesion = document.querySelector('#btn-sesion')

    eventListeners()
    function eventListeners(){

        correo.addEventListener('input', validacion)
        contrasena.addEventListener('input', validacion)
    }

    function validacion(){

        if(contrasena.value.length < 10){

            mostrarAlerta('La contraseña debe de ser de 10 o mas caracteres')
        } 

        if(correo.value.trim() === '' || contrasena.value.trim() === ''){

            mostrarAlerta('Ambos campos deben de ser llenados')
        } 
        
        if(!comprobarEmail(correo.value)){

            mostrarAlerta('El correo electronico es invalido')
        }

        if(contrasena.value.length >= 10 && (correo.value.trim() && contrasena.value.trim()) && comprobarEmail(correo.value)){

            borrarAlerta()
            btnSesion.classList.remove('boton_desactivado_sesion')
            btnSesion.classList.add('boton_activado_sesion')
            btnSesion.removeAttribute('disabled');
        } else {

            btnSesion.classList.remove('boton_activado_sesion')
            btnSesion.classList.add('boton_desactivado_sesion')
            btnSesion.setAttribute('disabled', 'disabled')
        }
    }

    function comprobarEmail(email){

        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
        const resultado = regex.test(email);
        return resultado;
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

       for(const nodo of formulario.childNodes){//Recorremos los hijos de formmulario como si fuera un arreglo

        //Cuando encuentre el nodo hijo del formulario con la clase, lo elimina
            if(nodo.classList && nodo.classList.contains('bg-danger')){

                nodo.remove()
            }
       }
       
    }




})