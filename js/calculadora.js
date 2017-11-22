 $(document).ready(function() {
            total1=0;
            total2=0;
            total3=0;
            total4=0;

            $("#cant1").keyup(function(){
                var precio1=$("#precio1").val();
                var cantidad1=$("#cant1").val();
                total1=precio1*cantidad1;
                $("#total1").text(total1);  
                $("#totalAPagar").text(total1+total2+total3+total4);
            });

            $("#cant2").keyup(function(){
                var precio2=$("#precio2").val();
                var cantidad2=$("#cant2").val();
                total2=precio2*cantidad2;
                $("#total2").text(total2);  
                $("#totalAPagar").text(total1+total2+total3+total4);
            });

            $("#cant3").keyup(function(){
                var precio3=$("#precio3").val();
                var cantidad3=$("#cant3").val();
                var total3=precio3*cantidad3;
                $("#total3").text(precio3*cantidad3);  
                $("#totalAPagar").text(total1+total2+total3+total4);
            });

            $("#cant4").keyup(function(){
                var precio4=$("#precio4").val();
                var cantidad4=$("#cant4").val();
                var total4=precio4*cantidad4;
                $("#total4").text(precio4*cantidad4); 
                $("#totalAPagar").text(total1+total2+total3+total4);
            });


        });