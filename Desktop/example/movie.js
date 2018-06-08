$(document).ready( function(){
     //var searchBar = document.getElementById("btn");
     var search = document.getElementById("movieSearcher");
     
     $('#mainForm').submit(function(evt){
          evt.preventDefault();
     });

     $("#movieSearcher").keyup(function(event){
               console.log("in");
               console.log(search);
               var ss = $("#movieSearcher").val();
               if(ss.length > 3){
                    $.ajax({
                         type: "GET",
                         url: 'http://www.omdbapi.com/?apikey=6e408513&',
                         data: {
                              t: search.value
                         },
                         dataType: "json",
                         success: function(response){
                              $('#movie-title').html(response.Title);
                              $('#poster').attr("src", response.Poster);
                              $('#para').html(response.Plot)
                         }
                    });
               }
               
               if($("#movieSearcher").val() == ""){
                    $("#movie-title").html("Movie Title");
                    $("#poster").attr("src", "");
                    $('#para').html("")
               }
          
     });

});

function deleteInput(objectInput){
          if(objectInput.value == "Type some movie title")
               objectInput.value = "";
     }