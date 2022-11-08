function validar() {
    var ret_email = validar_email();
    var ret_adr = validar_adr ();
    var ret_tel =  validar_tel ();
    var ret_pass1 = validar_pass1();
    var ret_pass2 = validar_pass2();
    //var ret_c = validar_c();
    //&& ret_c

    return ret_email && ret_adr && ret_tel && ret_pass1 && ret_pass2 ;
}


//function validar_url(){
    //var input = document.getElementById("web");
    //var div = document.getElementById("msj_web");
    //if (input.value !=""){


    
    //}
   
//}


//funciona
function validar_adr(){
    var input = document.getElementById("addr");
    var div = document.getElementById("msj_addr");
    if (input.value !=""){

    }else{
        div.innerText = 'el campo "dirección" es obligatorio'
        div.className ='m-2 text-danger'
        return false;
    }

}
function validar_tel(){
    var input = document.getElementById("tel");
    var div = document.getElementById("msj_tel");
    if (input.value !=""){
        if (input.value.length <=7){
            div.innerText = 'el campo "Telefono" debe tener 8 digitos';
            div.className = 'm-2 text-danger';
            return false;
        }



    }else{
        div.innerText = 'el campo "telefono" es obligatorio'
        div.className = 'm-2 text-danger'
        return false;
    }
}

function validar_email() {
    var input = document.getElementById("email");
    var div = document.getElementById("msj_email");
    if (input.value != "") {
        if(input.value.length >= 5) {
            
            // Validación mediante manipular y analizar el String
            var correo = input.value;
            var pos_arroba = correo.indexOf('@');
            var pos_punto = correo.lastIndexOf('.');
            var arr_correo = correo.split('.');
            var extension = arr_correo[arr_correo.length - 1];
            if(pos_arroba > 3 && (pos_punto - pos_arroba) > 1 && extension.length > 1) {
                div.innerText = "";
                div.className = "";
                return true;
            } else {
                div.innerText = 'El campo "Correo electrónico" no tiene un formato válido';
                div.className = 'm-2 text-danger';
                return false;
            }
        } else {
            div.innerText = 'El campo "Correo electrónico" debe tener al menos 5 caracteres';
            div.className = 'm-2 text-danger';
            return false;
        }
    } else {
        div.innerText = 'El campo "Correo electrónico" es obligatorio';
        div.className = 'm-2 text-danger';
        return false;
    }
    
}
  

function validar_pass1 (){
    var input = document.getElementById("pass1");
    var div = document.getElementById("msj_pass1");
    if (input.value != ""){
        if (input.value.length<=3){
            div.innerText = 'el campo "contraseña" debe tener entre 3 a 6 caracteres';
            div.className = 'm-2 text-danger';
            return false;
        }
        
    }else{
        div.innerText = 'el campo "contraseña" es obligatorio';
        div.className = 'm-2 text-danger';
        return false;
    }
}
function validar_pass2 (){
    var input = document.getElementById("pass2");
    var div = document.getElementById("msj_pass2");
    if(input.value !=""){
        
    }else{
        div.innerText = 'debe confirmar su contraseña';
        div.className = 'm-2 text-danger';
        return false;
    }
}

//function validar_c(){
    //var input= document.getElementById("pass1");
   // var div = document.getElementById("msj_pass1");
    //var input= document.getElementById("pass2");
    //var div = document.getElementById("msj_pass2");
    //if (pass1.value != pass2.value){
      //  div.innerText = 'las contraseñas no coinciden';
        //div.className = 'm-2 text-danger';
       // return false;

   // }
    
//}