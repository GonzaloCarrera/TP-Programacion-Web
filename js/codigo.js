 $(document).ready(function() {
    var numero=0;
    $(".boton").toggle(
                function() {
                     numero++;
                    $(".sumaCarrito").text(numero);
                    $(".boton").empty();
                    $(".boton").append("QUITAR DEL CARRITO");
                },
                function() {
                    numero--;
                    $(".sumaCarrito").text(numero);
                    $(".boton").empty();
                    $(".boton").append("AGREGAR AL CARRITO");
                }                        
            );

    var availableTags = [
      "Botines",
      "Papi",
      "Baby",
      "Futsal",
      "Clasicos",
      "Profesional",
      "Negro",
      "Color",
      "Blanco",
      "Tapones",
      "Cuero",
      "Nike",
      "Adidas",
      "Umbro",
      "Puma",
      "Kappa"
    ];
    $( "#search" ).autocomplete({
      source: availableTags
    });
});