window.addEventListener("load",  function() {
 
    let formulario = document.getElementById("formulario");

    formulario.addEventListener("submit",  function (e) {

        e.preventDefault(); 
    
        // Validación Titulo
        let titulo = document.getElementById("titulo");
        let errorTitulo = document.getElementById("errorTitulo");
        errorTitulo.innerHTML = "";
        if ( titulo.value == "") {
            errorTitulo.innerHTML += "Este campo es obligatorio.";
        }

        // Validación Premios
        let premios = document.getElementById("premios");
        let errorPremios = document.getElementById("errorPremios");
        errorPremios.innerHTML = "";
        if ( premios.value == "") {
            errorPremios.innerHTML += "Este campo es obligatorio.";
        }

        // Validación Duración
        let duracion = document.getElementById("duracion");
        let errorDuracion = document.getElementById("errorDuracion");
        errorDuracion.innerHTML = "";
        if ( duracion.value == "") {
            errorDuracion.innerHTML += "Este campo es obligatorio.";
        }

        // Validación Rating
        let rating = document.getElementById("rating");
        let errorRating = document.getElementById("errorRating");
        errorRating.innerHTML = "";
        if ( rating.value == "") {
            errorRating.innerHTML += "Este campo es obligatorio.";
        }
        if (errorTitulo.innerHTML == ""  &&
            errorPremios.innerHTML == "" &&
            errorDuracion.innerHTML == ""  &&
            errorRating.innerHTML == ""){
            formulario.submit();
        }
    })
})