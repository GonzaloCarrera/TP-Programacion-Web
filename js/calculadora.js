 $(document).ready(function() {
            var totalFinal;
            $("#cant").keyup(function(){
                var precio=$("#precio").val();
                var cantidad=$("#cant").val();
                var total=$("#total").text(precio*cantidad);
               
            });
        });