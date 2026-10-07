document.addEventListener("DOMContentLoaded", function () {

    const buscador = document.getElementById("buscadorEmpresas");
    const tabla = document.getElementById("tablaEmpresas");
    const contador = document.getElementById("contadorEmpresas");

    if (!buscador || !tabla || !contador) {
        return;
    }

    const filas = Array.from(tabla.querySelectorAll("tr"));

    function actualizarContador(cantidad) {
        contador.textContent =
            `Mostrando ${cantidad} empresa${cantidad !== 1 ? "s" : ""}`;
    }

    actualizarContador(filas.length);

    buscador.addEventListener("input", function () {

        const texto = buscador.value
            .toLowerCase()
            .trim();

        let visibles = 0;

        filas.forEach(function (fila) {

            const contenido = fila.textContent.toLowerCase();

            if (contenido.includes(texto)) {
                fila.style.display = "";
                visibles++;
            } else {
                fila.style.display = "none";
            }

        });

        actualizarContador(visibles);

    });

});