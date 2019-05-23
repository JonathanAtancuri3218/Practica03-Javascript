lista=[{"id":1,"imagen":"imagenes/1.jpeg"},
{"id":2,"imagen":"imagenes/2.jfif"},
{"id":3,"imagen":"imagenes/3.jfif)"},
{"id":4,"imagen":"imagenes/4.jfif"},
{"id":5,"imagen":"imagenes/5.jfif"},
{"id":6,"imagen":"imagenes/6.jfif"},
{"id":7,"imagen":"imagenes/7.jfif"},
{"id":8,"imagen":"imagenes/8.jfif"},
{"id":9,"imagen":"imagenes/9.jfif"},
{"id":10,"imagen":"imagenes/10.jpg"}];
imagenes = [1,2,3,4,5];
var posActual=0;

function inicio(){
    for (i=0 ; i<5; i++){
        
        imagenes[i] = Math.floor(Math.random() * (10));    
        
        
    }
    posActual = 0;
    
    verificar();
    imprimir();
}

//creo una función que muestre la imagen en una section ya creada en el archivo html,
function imprimir(){
    console.log(imagenes);
    //creo codigo html como texto tomando el valor de la lista.
    var texto = "<img src="+lista[imagenes[posActual]].imagen+">";
    //ingresa el codigo HTML al section con id imagen.
     window.document.getElementById("imagen").innerHTML =texto;
    
}
function verificar(){
    //Verfica si ya se esta en la ultima imagen para deshabilitar el boton siguiente
    if(posActual==4){
         window.document.getElementById("btn_siguiente").disabled = true;
        window.document.getElementById("btn_anterior").disabled = false;
   
    }
    //conpruebo si se está mostrando la primera imagen par deshabilitar el boton anterior
    else if(posActual == 0){
              window.document.getElementById("btn_anterior").disabled = true;
            window.document.getElementById("btn_siguiente").disabled = false;
   
    }else{
         window.document.getElementById("btn_siguiente").disabled = false;
              window.document.getElementById("btn_anterior").disabled = false;
        
   
    }
}

function anterior(){
    posActual--;
    verificar();
    imprimir();
    
}
function siguiente(){
    
    posActual++;
    verificar();
    imprimir();
    
    
}
    
    