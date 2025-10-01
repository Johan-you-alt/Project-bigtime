let varGlobal1="Esta es una variable global";
window.texto1="";

function FCambioColor() {
    texto1 =document.getElementById("ejmDOM1");

    texto1.textContent="Texto cambiado por funcion FCambioColor()";
    texto1.style.color="red";
    texto1.style.backgroundColor="orange" ;
    texto1.insertAdjacentHTML("afterend", "texto adicional <br><br>");
    console.log("texto por consola");

}

function FCambioClase1(){
    let texto2=document.getElementsByClassName("classDOM1");
    texto2[1].innerText="Elemento [1] del arreglo \n de clase classDOM1";
    texto2[1].style.color="cyan";

    texto2[0].innerText="Elemento[0] del arreglo " + 
                        "de clase classDOM1 ; Concatenado del global:" + varGlobal1 +
                        "\n y su tipo de variable es: "+ typeof(varGlobal1); 
    texto2[2].innerHTML="Tamaño del array=" + texto2.length +
                        "\n y su tipo de variable es: " + typeof(texto2);                    
    
}

function FCambioTag1() {
    let texto3=document.getElementsByTagName("h2");
    texto3[0].innerHTML="Elemento 1er h2 cambia por TagDOM1";
    texto3[13].innerHTML="Elemento ultimo h2 cambia por TagDOM1";
    texto3[14].style.color="magenta";
    varGlobal1="variable global modificada";

    texto3[11].innerHTML=`Tipo de variable de la varGlobal1 es: ${+ typeof(varGlobal1)}`;
}
 function FCrear1() {
 let lista=document.getElementById("ejmDOM1");
lista.style.backgroundColor="white";
lista.innerHTML="  <ul align='right'  style='color:rgb(47, 59, 34)'> " + 
                 " <li>Capacidad de atencion</li> " +
                   " <li>Consultar dudas no resueltas</li> " +
                   " <li>Repasar temas y realizar tareas en casa</li>" +
                 " </ul> " ;
}

function FAgregarTextoPermanete()
{
    let texto4="<br><h3 style='fon-zise: 18px'> Agregado con concatenacion permanente"
    texto1.innerHTML=texto1.innerHTML + texto4;
    console.log(texto1.textContent);
}

function FCrearElemento(){
    var Elemento = document.getElementById("complementario1");

    var nuevoh3= document.createElement("h3");
    var texto =document.createTextNode("deporte favorito:");
    nuevoh3.appendChild(texto);
    Elemento.appendChild(nuevoh3);

    /*CREAR un input text para poder complementar el deporte favorito */
    var nuevoInputText= document.createElement("input");
    nuevoInputText.type="text";

    Elemento.appendChild(nuevoInputText);
}
function FUsoFor1()
{
  const vTextoClass = document.getElementsByClassName("classFOR1");
  var vTextoTotal="";
  // como length=4 --> ira desde 0 hasta 3
  for(let i=0 ; i< vTextoClass.length ; i++ )
  {
    vTextoClass[i].style.border ="2px solid red" ;
    vTextoTotal = vTextoTotal + vTextoClass[i].innerText+'-';

  } // fin de for
  var nuevoH1 =document.createElement("h1");
  var texto = document.createTextNode(vTextoTotal);
  nuevoH1.appendChild(texto);
  vTextoClass[3].appendChild(nuevoH1);
  
}  // fin de function

function FUsoForEach1()
{
  const vTextoClass = document.querySelectorAll(".classFOR1");
  var vTextoTotal="";
  // como length=4 --> ira desde 0 hasta 3
  vTextoClass.forEach
  ( iter=>
    {
      iter.style.border ="2px solid blue" ;
      vTextoTotal = vTextoTotal + iter.innerText+'-';

    } // fin de for

  );}

function FEliminarConcat ()
{ alert("hola")
  const vTextoClass = document.getElementsByClassName("classFOR1");
  let rpta =prompt("estas seguro que deseas eliminar el texto concatenado?(S/N)",'');
  if(rpta=="S" || rpta=="s")
  {let rpta2 =prompt("ingrese el numero de la fila a eliminar",'');
    vTextoClass[rpta2].remove();
    alert("CONCATENACION ELIMINADA");
  }
  else
  {if(rpta=="N" || rpta=="n")
  {alert("NO SE eliminara");
  }
  else
  {alert("OPCION INCORRECTA - ingresa nuevamente"); 
  }

  }

}

function FCapturarNombre(){

  const vTexto1 = document.getElementById("NOMBRE");
  const vTexto2 = document.querySelectorAll("input.datospersonales");
  const vTexto3 = document.getElementById("clave");

  vTexto1.style.color="red";

  var valor1 =vTexto1.value;
  var valor2 ="";
  vTexto3.value=valor1;

  vTexto2.forEach(input => {
    valor2 = valor2 + `${input.name}: ${input.value}: ${input.id} \n`;
    input.style.border="2px solid orange";

  })

  vTexto2[1].style.backgroundColor="green";
  document.getElementById('observacion').value = valor2;
  console.log('El valor del nombre es:', valor1);


}

