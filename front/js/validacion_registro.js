document.addEventListener('DOMContentLoaded', () =>{

    const nombre = document.querySelector('#nombre_registro')
    const apellido = document.querySelector('#apellido_registro')
    const correo = document.querySelector('#correo_registro')
    const contrasena = document.querySelector('#contrasena_registro')

    const formulario = document.querySelector('#form_registro')

    eventListeners()
    function eventListeners(){

        nombre.addEventListener('input', validacion)
        apellido.addEventListener('input', validacion)
        correo.addEventListener('input', validacion)
        contrasena.addEventListener('input', validacion)
    }

    function validacion(e){

        if(nombre.value.trim() === ''){

            mostrarAlerta("Todos los campos son obligatorios")
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

       for(const nodo of formulario.childNodes){

            if(nodo.classList && nodo.classList.contains('bg-danger')){

                nodo.remove()
            }
       }
       
    }
})