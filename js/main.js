
//Buscador de proyectos

$(document).ready(function(){

  var buscador = (e) => {
    $('.list-proyectos').show();
     var search = $('#input-proyectos').val();
     var titulos = $('.titulo');
    
     var result = "";
     $('.not-found>h4').html('"'+search+'"');
     $('.not-found').show();
     for(var i=0;i<titulos.length; i++){
         result = $(titulos[i]).text().toLowerCase();
         //alert(result);
         for(var x = 0; x<result.length; x++){
             if(search.length == 0 || result.indexOf(search) != -1){
                 $('.not-found').hide();
                 $(titulos[i]).parents('.card-proyecto').show();
             }else{
                $(titulos[i]).parents('.card-proyecto').hide();
             }
         }
    }
  }
  
  $('.btn-search').click(function(e){
    e.preventDefault();
    $('.list-proyectos').hide();
    $('.not-found').hide();
    $('.loading').show();
    setTimeout(()=>{
        $('.loading').hide();
        buscador();
    },2000); 
  });
});
