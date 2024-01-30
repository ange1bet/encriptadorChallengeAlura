function validar(palabra){
    var patron = /^[a-z\s]+$/;

    if(palabra!=''){
        if(palabra===palabra.toLowerCase()){
            if(patron.test(palabra)){
                document.getElementById("texto-accion").style.display = "inline-block";
                document.getElementById("texto-accion").style.visibility = "visible";
                document.getElementById("pelon").style.display = "none";
                document.getElementById("pelon").style.visibility = "hidden";
                return true;
            }else{
                alert('Tu texto tiene caracteres especiales no validos');
                return false;
            }
        }else{
            alert('Tu texto tiene que estar en minusculas');
            return false;
        }
    }else{
        document.getElementById("pelon").style.display = "inline-block";
        document.getElementById("pelon").style.visibility = "visible";
        document.getElementById("texto-accion").style.display = "none";
        document.getElementById("texto-accion").style.visibility = "hidden";
        return false;
    }

}

function copiar(){
    let elementoEncriptado = document.getElementById('texto-accion').value;
    navigator.clipboard.writeText(elementoEncriptado);
}
function encriptar(){
    let elmentoHTML = document.getElementById('encriptado').value;
    let elementoEncriptado = document.getElementById('texto-accion');
    var patron = /^[a-z]+$/;
    //alert(elmentoHTML+''+elmentoHTML.length);
    let nuevoMensaje='';
    let validacion;
    validacion=validar(elmentoHTML);

    if(validacion==true){
        for(var i=0;i<elmentoHTML.length;i++){
            switch (elmentoHTML.substr(i,1)){
                case 'a':
                    nuevoMensaje=nuevoMensaje+'ai';
                    break;
                case 'e':
                    nuevoMensaje=nuevoMensaje+'enter';
                    break;
                case 'i':
                    nuevoMensaje=nuevoMensaje+'imes';
                    break;
                case 'o':
                    nuevoMensaje=nuevoMensaje+'ober';
                    break;
                case 'u':
                    nuevoMensaje=nuevoMensaje+'ufta';
                    break;
                default:
                    nuevoMensaje=nuevoMensaje+elmentoHTML.substr(i,1);
            }
        }
    }
    
    elementoEncriptado.value=nuevoMensaje;
}
 function desencriptar(){
    let elmentoHTML = document.getElementById('encriptado').value;
    let elementoEncriptado = document.getElementById('texto-accion');
    //alert(elmentoHTML+''+elmentoHTML.length);
    let nuevoMensaje='';
    let validacion = validar(elmentoHTML);

    if(validacion==true){
        for(var i=0;i<elmentoHTML.length;i++){
            switch (elmentoHTML.substr(i,1)){
                case 'a':
                    nuevoMensaje=nuevoMensaje+'a';
                    i = i+1;
                    break;
                case 'e':
                    nuevoMensaje=nuevoMensaje+'e';
                    i=i+4;
                    break;
                case 'i':
                    nuevoMensaje=nuevoMensaje+'i';
                    i=i+3;
                    break;
                case 'o':
                    nuevoMensaje=nuevoMensaje+'o';
                    i=i+3;
                    break;
                case 'u':
                    nuevoMensaje=nuevoMensaje+'u';
                    i=i+3;
                    break;
                default:
                    nuevoMensaje=nuevoMensaje+elmentoHTML.substr(i,1);
            }
        }
    }
    elementoEncriptado.value=nuevoMensaje;
 }