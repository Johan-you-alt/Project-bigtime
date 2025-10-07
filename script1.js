let varGlobal1 = "Esta es una variable global";
window.texto1 = ""; // Usar 'window.texto1' no es una buena práctica, pero se mantiene por tu estructura.

function FCambioColor() {
    texto1 = document.getElementById("ejmDOM1");

    texto1.textContent = "Texto cambiado por funcion FCambioColor()";
    texto1.style.color = "red";
    texto1.style.backgroundColor = "orange";
    texto1.insertAdjacentHTML("afterend", "texto adicional <br><br>");
    console.log("Texto por consola");
}

function FCambioClase1(){
    // getElementsByClassName devuelve un HTMLCollection, no un array real
    let texto2 = document.getElementsByClassName("classDOM1");
    
    if (texto2.length > 1) {
        texto2[1].innerText = "Elemento [1] del arreglo \n de clase classDOM1";
        texto2[1].style.color = "cyan";
    }

    if (texto2.length > 0) {
        texto2[0].innerText = "Elemento [0] del arreglo " + 
                            "de clase classDOM1 ; Concatenado del global:" + varGlobal1 +
                            "\n y su tipo de variable es: " + typeof(varGlobal1); 
    }
    
    if (texto2.length > 2) {
        texto2[2].innerHTML = "Tamaño del array = " + texto2.length +
                            "\n y su tipo de variable es: " + typeof(texto2);                    
    }
}

function FCambioTag1() {
    let texto3 = document.getElementsByTagName("h2");
    
    if (texto3.length > 0) {
         texto3[0].innerHTML = "Elemento 1er h2 cambia por TagDOM1";
         
         // Se usa querySelectorAll para obtener todos los <h2> dentro del contenedor principal de DOM
         // para calcular un índice más fiable.
         const h2_dom_elements = document.querySelectorAll('section:nth-child(2) article:nth-child(1) h2');
         if (h2_dom_elements.length >= 2) {
             // Asume que quieres cambiar el último h2 de la sección de ejemplos de DOM
             // Usar el índice [h2_dom_elements.length - 1] o mejor un ID.
         }
         
         varGlobal1 = "variable global modificada";
         
         // Intentando encontrar el h2 de "Creacion de elementos en linea"
         const h2_elemento_linea = Array.from(texto3).find(h2 => h2.textContent.includes('Creacion de elementos en linea'));
         if (h2_elemento_linea) {
             h2_elemento_linea.innerHTML = `Tipo de variable de la varGlobal1 es: ${typeof(varGlobal1)}`;
         }
    }
}

function FCrear1() {
    let lista = document.getElementById("ejmDOM1");
    lista.style.backgroundColor = "white";
    lista.innerHTML = "  <ul align='right'  style='color:rgb(47, 59, 34)'> " + 
                     " <li>Capacidad de atención</li> " +
                       " <li>Consultar dudas no resueltas</li> " +
                       " <li>Repasar temas y realizar tareas en casa</li>" +
                     " </ul> ";
}

function FAgregarTextoPermanete() {
    // Asegurarse de que 'texto1' esté inicializado
    if (!window.texto1) {
        window.texto1 = document.getElementById("ejmDOM1");
    }
    let texto4 = "<br><h3 style='font-size: 18px'> Agregado con concatenacion permanente</h3>";
    window.texto1.innerHTML = window.texto1.innerHTML + texto4;
    console.log(window.texto1.textContent);
}

function FCrearElemento(){
    var Elemento = document.getElementById("complementario1");

    var nuevoh3 = document.createElement("h3");
    var texto = document.createTextNode("Deporte favorito:");
    nuevoh3.appendChild(texto);
    Elemento.appendChild(nuevoh3);

    /* CREAR un input text para poder complementar el deporte favorito */
    var nuevoInputText = document.createElement("input");
    nuevoInputText.type = "text";

    Elemento.appendChild(nuevoInputText);
}

function FUsoFor1() {
    const vTextoClass = document.getElementsByClassName("classFOR1");
    var vTextoTotal = "";
    
    for(let i = 0; i < vTextoClass.length; i++ ) {
        vTextoClass[i].style.border = "2px solid red";
        vTextoTotal = vTextoTotal + vTextoClass[i].innerText + ' - ';
    }
    
    // Quita el último ' - '
    vTextoTotal = vTextoTotal.slice(0, -3); 
    
    var nuevoH1 = document.createElement("h1");
    var texto = document.createTextNode(vTextoTotal);
    nuevoH1.appendChild(texto);
    
    // Añadir al final del último elemento de la clase
    if (vTextoClass.length > 0) {
        vTextoClass[vTextoClass.length - 1].appendChild(nuevoH1);
    }
}

function FUsoForEach1() {
    // querySelectorAll devuelve un NodeList, que sí permite forEach
    const vTextoClass = document.querySelectorAll(".classFOR1");
    var vTextoTotal = "";
    
    vTextoClass.forEach(iter => {
        iter.style.border = "2px solid blue";
        vTextoTotal = vTextoTotal + iter.innerText + ' - ';
    });
    
    console.log("Reporte FOREACH:", vTextoTotal.slice(0, -3));
}

function FEliminarConcat() {
    const vTextoClass = document.getElementsByClassName("classFOR1");
    let rpta = prompt("¿Estás seguro que deseas eliminar un elemento? (S/N)", '');
    
    if (rpta && rpta.toLowerCase() === "s") {
        let rpta2 = prompt(`Ingrese el número de la fila a eliminar (0 a ${vTextoClass.length - 1}):`, '');
        const index = parseInt(rpta2);
        
        if (!isNaN(index) && index >= 0 && index < vTextoClass.length) {
            vTextoClass[index].remove();
            alert("ELEMENTO ELIMINADO");
        } else {
            alert("ÍNDICE INCORRECTO - Ingrese un número válido.");
        }
    } else if (rpta && rpta.toLowerCase() === "n") {
        alert("NO se eliminará");
    } else {
        alert("OPCIÓN INCORRECTA - Ingrese S o N."); 
    }
}

function FCapturarNombre(){
    const vTexto1 = document.getElementById("NOMBRE");
    const vTexto2 = document.querySelectorAll("input.datospersonales");
    const vTexto3 = document.getElementById("clave");
    const observacion = document.getElementById('observacion');

    vTexto1.style.color = "red";

    var valor1 = vTexto1.value;
    var valor2 = "Datos Personales Capturados:\n";
    vTexto3.value = valor1;

    vTexto2.forEach(input => {
        valor2 += `${input.name}: ${input.value} (ID: ${input.id}) \n`;
        input.style.border = "2px solid orange";
    });

    if (vTexto2.length > 1) {
        vTexto2[1].style.backgroundColor = "green";
    }
    
    observacion.value = valor2;
    console.log('El valor del nombre es:', valor1);
}

function FValidarCiclo() {
    // CORRECCIÓN: Se usa querySelector para obtener el valor del radio seleccionado
    const varciclo = document.querySelector('input[name="ciclo"]:checked');
    const observacion = document.getElementById('observacion');
    
    if (varciclo) {
        observacion.value = `Ciclo seleccionado (Botón): ${varciclo.value}`;
    } else {
        observacion.value = "Ningún ciclo seleccionado (Botón)";
    }
}

function FValidarCursos() {
    // Se usa querySelectorAll para obtener SOLO los checkboxes marcados
    const varcurso = document.querySelectorAll('input[name="cursos"]:checked');
    let varobservacion = document.getElementById("observacion");
    let cursosSeleccionados = [];

    // Recorremos la NodeList de checkboxes marcados
    varcurso.forEach(curso => {
        cursosSeleccionados.push(curso.value);
    });

    let textoObservacion = "";
    if (cursosSeleccionados.length > 0) {
        textoObservacion = "Cursos seleccionados (Botón): " + cursosSeleccionados.join(', ');
    } else {
        textoObservacion = "Ningún curso seleccionado (Botón)";
    }

    varobservacion.value = textoObservacion;
}

// ==================================================================================
// FUNCIÓN PARA GENERAR CAMPOS DE COLEGIO DINÁMICAMENTE
// ==================================================================================
function FGenerarColegios(cantidad) {
    const container = document.getElementById("detalle_colegios_container");
    
    // 1. Limpiar el contenido anterior (crucial para que no se dupliquen los campos)
    container.innerHTML = '';
    
    const numColegios = parseInt(cantidad);

    // 2. Validar que el valor sea un número positivo
    if (isNaN(numColegios) || numColegios <= 0 || numColegios > 10) { 
        return; // No hace nada si el número es inválido, cero, o excede un límite razonable (10)
    }

    // 3. Iterar la cantidad de veces e insertar elementos
    for (let i = 1; i <= numColegios; i++) {
        // Crear el Label
        const label = document.createElement("label");
        label.textContent = `Colegio ${i}: `;
        label.setAttribute("for", `colegio_${i}`);
        label.style.display = 'block'; // Para que cada campo esté en una nueva línea

        // Crear el Input Text
        const input = document.createElement("input");
        input.type = "text";
        input.id = `colegio_${i}`;
        input.name = `colegio_${i}`;
        input.placeholder = `Nombre del Colegio ${i}`;
        
        // Agregar los elementos al contenedor
        container.appendChild(label);
        container.appendChild(input);
        container.appendChild(document.createElement("br")); // Separador visual
    }
}


// ----------------------------------------------------------------------------------
// MANEJO DE EVENTOS DINÁMICO (Se espera a que todo el DOM cargue)
// ----------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    
    // Funcionalidad para radio button
    const radios = document.querySelectorAll('input[name="ciclo"]'); 

    radios.forEach(function(radio) {
        radio.addEventListener('change', function(event) {
            const varciclo = event.target.value;
            alert("Ciclo Seleccionado = " + event.target.value);
            document.getElementById('observacion').value = `Ciclo seleccionado (Dinámico): ${varciclo}`;
        });
    });

    // Funcionalidad para checkbox
    const checkboxes = document.querySelectorAll('input[name="cursos"]');

    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            // Llama a la función auxiliar para actualizar el campo de texto con TODOS los cursos
            actualizarCursosSeleccionadosDinamicamente();
        });
    });

    // Función auxiliar para actualizar dinámicamente el campo de observaciones con los checkboxes
    function actualizarCursosSeleccionadosDinamicamente() {
        const cursosSeleccionados = [];
        // Selecciona todos los checkboxes con name="cursos" que estén marcados
        const todosLosCheckboxes = document.querySelectorAll('input[name="cursos"]:checked');
        
        todosLosCheckboxes.forEach(cb => {
            cursosSeleccionados.push(cb.value);
        });

        const varobservacion = document.getElementById('observacion');
        if (varobservacion) {
            if(cursosSeleccionados.length > 0) {
                 varobservacion.value = "Cursos seleccionados (Dinámico): " + cursosSeleccionados.join(', '); 
            } else {
                 varobservacion.value = "Ningún curso seleccionado (Dinámico)";
            }
        }
    }

    // --- LÓGICA PARA GENERAR CAMPOS DE COLEGIO DINÁMICAMENTE ---

    const inputNumColegios = document.getElementById('num_colegios');

    if (inputNumColegios) {
        // Usa el evento 'input' para llamar a la función FGenerarColegios cada vez que el valor cambie
        inputNumColegios.addEventListener('input', (event) => {
            FGenerarColegios(event.target.value);
        });
    }

});
