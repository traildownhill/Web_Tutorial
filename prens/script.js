$(document).ready(function(){
   var q1= "Crush mo ba ako?";//hindi
   var q2= "Hindi mo ako crush?"; //hindi
   var q3= "Sure ka na hindi?"; //oo
   var q4= "Yung totoo?"; //hindi
   var q5= "Sure na ba yan?"; //oo
   // var q6= "Oo, na mahal mo ako?"; //hindi
   var q7= "Ayaw mo talaga?"; //hindi
   var q8= "Sure na Sure na Sure ka?"; //oo
   var q9= "Sigurado ka na ba talaga sa sagot mo?"; //oo
   var q10= "Hindi nga?"; //oo

   var happy1 = "Yiiiiee, Set ko na yung date natin.";
   // var happy2 = "Yiiiiee true ba yan? Set ko na yung date natin.";
   var happy3 = "So, mahal mo ako, Set ko na yung date natin.";
   
   
   $("#questions").text(q1);

   $("#yes").click(function(){ //crush kita
      $("#questions").hide();
      $("button").hide();
      $(".finalYes").show();
      $(".button-53").show();
   })
   $("#no").click(function(){ //hindi kita crush
      $("#questions").text(q2); 
      $("button").show();

      $("#yes").click(function(){ //crush kita
         $("#questions").hide();
         $("button").hide();
         $(".finalYes").show();
         $(".button-53").show();
      })
      $("#no").click(function(){ //hindi kita crush
         $("#questions").text(q3);
         $("button").show();
         $("#yes").text("Ay Crush pala kita")
         $("#no").text("Hindi nga")

         $("#yes").click(function(){ //crush kita
            $("#questions").hide();
            $("button").hide();
            $(".finalYes").show();
            $(".button-53").show();
         })
         $("#no").click(function(){ //hindi kita crush
            $("#questions").text(q4);
            $("button").show();
            $("#yes").text("Crush kita")
            $("#no").text("Hindi kita crush")

            $("#yes").click(function(){ //crush kita
               $("#questions").hide();
               $("button").hide();
               $(".finalYes").show();
               $(".button-53").show();
               })
            })
            $("#no").click(function(){ //hindi kita crush
               $("#questions").text(q4);
               $("button").show();
               $("#yes").text("Ay Crush pala kita")
               $("#no").text("Hindi nga")
               
               $("#yes").click(function () { //crush kita
                  $("#questions").hide();
                  $("button").hide();
                  $(".finalYes").show();
                  $(".button-53").show();
               })
               $("#no").click(function(){ //hindi kita crush
                  $("#questions").text(q5);
                  $("button").show();

                  $("#yes").click(function(){ //crush kita
                     $("#questions").hide();
                     $("button").hide();
                     $(".finalYes").show();
                     $(".button-53").show();
                  })
                  $("#no").click(function(){ //hindi kita crush
                     $("#questions").text(q7);
                     $("button").show();
                     $("#yes").text("Crush kita")
                     $("#no").text("Hindi kita crush")

                     $("#yes").click(function(){ //crush kita
                        $("#questions").hide();
                        $("button").hide();
                        $(".finalYes").show();
                        $(".button-53").show();
                        
                     })
                     $("#no").click(function(){ //hindi kita crush
                        $("#questions").text(q8);
                        $("button").show();
                        $("#yes").text("Crush kita konti")
                        $("#no").text("Hindi talaga kita crush")
                        
                        $("#yes").click(function () { //crush kita
                           $("#questions").hide();
                           $("button").hide();
                           $(".finalYes").show();
                           $(".button-53").show();
                        })
                        $("#no").click(function(){ //hindi kita crush
                           $("#questions").text(q9);
                           $("button").show();

                           $("#yes").click(function(){ //crush kita
                              $("#questions").hide();
                              $("button").hide();
                              $(".finalYes").show();
                              $(".button-53").show();
                           })
                           $("#no").click(function(){ //hindi kita crush
                              $("#questions").hide();
                              $("button").hide();
                              $(".finalNo").show();
                              $(".button-53").show();
                           })
                        })
                     })
                  })
            })
         })
      })
   })


 });