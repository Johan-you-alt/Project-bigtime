document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica del Menú Lateral (Sidebar)---
    const menuToggle = document.getElementById('menutoggle'); 
    const sidebar = document.getElementById('sidebar');
    const closeSidebar = document.getElementById('closeSidebar');
    const overlay = document.getElementById('overlay');

    function openSidebar() {
        sidebar.classList.add('active');
        overlay.classList.add('active');
    }

    function closeSidebarHandler() {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', openSidebar);
    }
    if (closeSidebar) {
        closeSidebar.addEventListener('click', closeSidebarHandler);
    }
    if (overlay) {
        overlay.addEventListener('click', closeSidebarHandler);
    }
    
    /**
     * Función Reutilizable para calcular el Total del Pedido 
     * Se usa en el botón de Precio Total y en el cálculo de Descuento/Recargo.
     */
    function calcularTotalPedido() {
        const productRows = document.querySelectorAll('#product-catalog-table tbody tr');
        let totalPedido = 0;

        productRows.forEach(row => {
            // Se usa el data attribute del HTML para obtener el precio
            const price = parseFloat(row.dataset.productPrice);
            const quantityInput = row.querySelector('.product-quantity');
            const quantity = parseInt(quantityInput.value);

            if (!isNaN(price) && !isNaN(quantity) && quantity > 0) {
                totalPedido += (price * quantity);
            }
        });
        return totalPedido;
    }

    // 1. Cálculo del Precio Total del Pedido 
    const calcularTotalBtn = document.getElementById('calcularTotalBtn');
    const resultadoTotalH2 = document.getElementById('resultadoTotal');

    if (calcularTotalBtn) {
        calcularTotalBtn.addEventListener('click', () => {
            const total = calcularTotalPedido();
            resultadoTotalH2.textContent = `Precio Total: S/ ${total.toFixed(2)}`;
            alert(`El precio total de tu pedido es: S/ ${total.toFixed(2)}`);
        });
    }

    // 2. Concatenar IDs de los 3 input text 
    const concatenarIdsBtn = document.getElementById('concatenarIdsBtn');
    const resultadoIdsConcatenadosH2 = document.getElementById('resultadoIdsConcatenados');

    if (concatenarIdsBtn) {
        concatenarIdsBtn.addEventListener('click', () => {
            // Seleccione todos los inputs con la clase 'product-identifier-input'
            const idInputs = document.querySelectorAll('.product-identifier-input');
            let concatenatedIds = '';

            idInputs.forEach(input => {
                concatenatedIds += input.value.trim() + '-'; // Concatene el valor y añadi un guion
            });

            // Elimine el último guion si existe
            if (concatenatedIds.endsWith('-')) {
                concatenatedIds = concatenatedIds.slice(0, -1);
            }

            resultadoIdsConcatenadosH2.textContent = `IDs Concatenados: ${concatenatedIds}`;
            alert(`Los IDs concatenados son: ${concatenatedIds}`);
        });
    }

    // 3. Contar inputs text existentes y crear párrafo 
    const contarInputsBtn = document.getElementById('contarInputsBtn');
    const resultadoConteoInputsH2 = document.getElementById('resultadoConteoInputs');

    if (contarInputsBtn) {
        contarInputsBtn.addEventListener('click', () => {
            // Selecciona todos los inputs de tipo "text" en la página
            const allTextInputs = document.querySelectorAll('input[type="text"]');
            const count = allTextInputs.length;

            // Mostrar el conteo en el H2
            resultadoConteoInputsH2.textContent = `Número de Inputs Text existentes en la página: ${count}`;

            // crear un párrafo debajo del H2
            let paragraph = document.getElementById('conteoParagraph');
            if (!paragraph) {
                paragraph = document.createElement('p');
                paragraph.id = 'conteoParagraph';
                resultadoConteoInputsH2.parentNode.insertBefore(paragraph, resultadoConteoInputsH2.nextSibling);
            }
            paragraph.textContent = `Actualmente hay ${count} campos de texto disponibles para interacción.`;
            paragraph.style.cssText = 'text-align: center; color: #555; margin-top: 10px; font-style: italic;';

            alert(`Se han encontrado ${count} inputs de texto.`);
        });
    }

    // 4. Descuento (10%) o Recargo (5%) basado en longitud de textos vs cantidad 
    const aplicarDescuentoRecargoBtn = document.getElementById('aplicarDescuentoRecargoBtn');
    const textAreaInput = document.getElementById('textAreaInput');
    const cantidadProductosInput = document.getElementById('cantidadProductosInput');
    const resultadoDescuentoRecargoH2 = document.getElementById('resultadoDescuentoRecargo');

    if (aplicarDescuentoRecargoBtn) {
        aplicarDescuentoRecargoBtn.addEventListener('click', () => {
            const totalPedido = calcularTotalPedido(); // Obtiene el total del pedido de la tabla
            const idInputs = document.querySelectorAll('.product-identifier-input');
            let caracteresTotales = 0;
            
            // Suma el total de caracteres de los 3 inputs de texto
            idInputs.forEach(input => {
                caracteresTotales += input.value.trim().length;
            });

            const cantidadTotal = parseInt(cantidadProductosInput.value);

            // Validación de la cantidad
            if (isNaN(cantidadTotal) || cantidadTotal < 0) {
                alert('Por favor, ingresa una cantidad total válida (un número positivo) en el campo "Cantidad Total".');
                return;
            }
            if (totalPedido === 0) {
                 alert('Por favor, selecciona al menos un producto y su cantidad en la tabla para realizar el cálculo.');
                 return;
            }

            let totalPagar = totalPedido;
            let resultadoTexto = "";

            // Lógica de Descuento/Recargo
            if (caracteresTotales > cantidadTotal) {
                // Aplicar Descuento del 10%
                const descuento = totalPedido * 0.10;
                totalPagar = totalPedido - descuento;
                
                resultadoTexto = 
                    `*** DESCUENTO APLICADO (10%) ***\n` + 
                    `Total Original: S/ ${totalPedido.toFixed(2)}\n` +
                    `Descuento: - S/ ${descuento.toFixed(2)}\n` +
                    `TOTAL A PAGAR: S/ ${totalPagar.toFixed(2)}\n\n` + 
                    `Condición: (${caracteresTotales} caracteres > ${cantidadTotal} cantidad)`;
                
                resultadoDescuentoRecargoH2.style.color = '#28a745'; // Verde
            } else {
                // Aplicar Recargo del 5%
                const recargo = totalPedido * 0.05;
                totalPagar = totalPedido + recargo;
                
                resultadoTexto = 
                    `*** RECARGO APLICADO (5%) ***\n` + 
                    `Total Original: S/ ${totalPedido.toFixed(2)}\n` +
                    `Recargo: + S/ ${recargo.toFixed(2)}\n` +
                    `TOTAL A PAGAR: S/ ${totalPagar.toFixed(2)}\n\n` +
                    `Condición: (${caracteresTotales} caracteres <= ${cantidadTotal} cantidad)`;

                resultadoDescuentoRecargoH2.style.color = '#dc3545'; // Rojo
            }

            // Mostrar el resultado en el TEXT AREA (Requisito del PDF)
            textAreaInput.value = resultadoTexto;
            resultadoDescuentoRecargoH2.textContent = `Total Calculado: S/ ${totalPagar.toFixed(2)}`;
            alert("El resultado de la operación ha sido actualizado en el área de comentarios.");
        });
    }

    // 5. Actividad Domiciliaria: Creación dinámica de inputs number
    const palabraInput = document.getElementById('palabraInput');
    const dynamicInputsContainer = document.getElementById('dynamicInputsContainer');

    if (palabraInput && dynamicInputsContainer) {
        // Usa el evento 'input' que se dispara cada vez que el valor del input cambia
        palabraInput.addEventListener('input', () => { 
            const palabra = palabraInput.value.trim();
            const longitud = palabra.length;

            dynamicInputsContainer.innerHTML = ''; // Limpiar inputs anteriores

            if (longitud > 0) {
                for (let i = 0; i < longitud; i++) {
                    const input = document.createElement('input');
                    input.type = 'number';
                    input.min = '0';
                    input.value = '0';
                    // Etiqueta el input con la posición para mejor UX
                    input.placeholder = `Posición ${i + 1}`; 
                    input.style.marginRight = '10px'; 
                    input.style.marginBottom = '10px'; 
                    dynamicInputsContainer.appendChild(input);
                }
            }
        });
    }

});