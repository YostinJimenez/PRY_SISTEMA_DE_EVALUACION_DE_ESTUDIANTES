let notas = [8, 4, 10, 6, 3, 9, 5, 7, 2];
var inputNota = document.getElementById('input-nota'); // Ojo: guion medio
var btnAgregar = document.getElementById('btn_agregar_nota');
var listaVisual = document.getElementById('lista-notas'); // Ojo: guion medio
function renderizarYCalcular() {
    let aprobados = 0;
    let supletorios = 0;
    let reprobados = 0;
    let sumaTotal = 0;
    listaVisual.innerHTML = "";
    notas.forEach(function (nota) {
        // Sumar para el promedio
        sumaTotal += nota;
        if (nota >= 7 && nota <= 10) {
            aprobados++;
        } else if (nota >= 5 && nota < 7) {
            supletorios++;
        } else if (nota >= 0 && nota < 5) {
            reprobados++;
        }
        listaVisual.innerHTML += `<span class="badge bg-secondary me-1">${nota}</span>`;
    });

    let promedio;
    if (notas.length > 0) {
        promedio = (sumaTotal / notas.length);
    } else {
        promedio = 0;
    }

    let estado = "";
    let claseColor = "";
    if (promedio >= 7) {
        estado = "Aprobado";
        claseColor = "bg-success";
    } else {
        estado = "En Riesgo";
        claseColor = "bg-danger";
    }

    document.getElementById("txt_total_aprobados").innerText = aprobados;
    document.getElementById("txt_total_supletorio").innerText = supletorios;
    document.getElementById("txt_total_reprobados").innerText = reprobados;

    document.getElementById("txt_promedio_curso").innerText = promedio.toFixed(2);
    document.getElementById("txt_estado_curso").innerText = estado;

    let elementoEstado = document.getElementById("txt_estado_curso");
    elementoEstado.style.color = "white";
    // elementoEstado.classList.add(claseColor);
    elementoEstado.className = `badge ${claseColor} p-2 fs-6`;
}

btnAgregar.addEventListener('click', function () {
    let valor = parseFloat(inputNota.value);

    if (!isNaN(valor) && valor >= 0 && valor <= 10) {
        notas.push(valor);
        
        // ¡IMPORTANTE! Volvemos a ejecutar todos los cálculos
        renderizarYCalcular();
        
        // Limpiamos el input   
        inputNota.value = '';
        inputNota.focus();
        document.getElementById("sugerencia").innerText = "";
    } else {
        document.getElementById("sugerencia").innerText = "Por favor ingresa una nota válida entre 0 y 10"; 
    }
});

document.getElementById("btn_limpiar_notas").addEventListener("click", function (e) {
    document.getElementById("txt_total_aprobados").innerText = "";
    document.getElementById("txt_total_supletorio").innerText = "";
    document.getElementById("txt_total_reprobados").innerText = "";
    document.getElementById("txt_promedio_curso").innerText = "";
    document.getElementById("txt_estado_curso").innerText = "";
    listaVisual.innerHTML = "";
    notas = [];
});

renderizarYCalcular();
















var btn_agregar_nota = document.getElementById('btn_agregar_nota');
var input_nota = document.getElementById('input_nota');
var lista_notas = document.getElementById('lista_notas');
var notas_estudiantes = [8, 4, 10, 6, 3, 9, 5, 7, 2];

btn_agregar_nota.addEventListener('click', function (event) {
    var elementoLI = (nota) => {
        var elementoLI = document.createElement('li');
        elementoLI.classList.add('list-group-item');
        elementoLI.textContent = nota;
        return elementoLI;
    }
    if (input_nota.value !== '' && !isNaN(input_nota.value)) {
        var nota = parseFloat(input_nota.value);
        lista_notas.appendChild(elementoLI(nota));
        notas_estudiantes.push(nota);
        input_nota.value = '';
    } else {
        console.log("POR FAVOR INGRESE UNA NOTA VALIDA!");
    }
    console.log(notas_estudiantes);
});


