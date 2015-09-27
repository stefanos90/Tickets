$(document).ready(function(){
    var timer = null;
    $('#search-box').keyup(function(e){
 
        if( e.keyCode ==38 ){
            if( $('#search_suggestion_holder').is(':visible') ){
                if( ! $('.selected').is(':visible') ){
                    $('#search_suggestion_holder li').last().addClass('selected');
                }else{
                    var i =  $('#search_suggestion_holder li').index($('#search_suggestion_holder li.selected')) ;
                    $('#search_suggestion_holder li.selected').removeClass('selected');
                    i--;
                    $('#search_suggestion_holder li:eq('+i+')').addClass('selected');
 
                }
            }
        }else if(e.keyCode ==40){
            if( $('#search_suggestion_holder').is(':visible') ){
                if( ! $('.selected').is(':visible') ){
                    $('#search_suggestion_holder li').first().addClass('selected');
                }else{
                    var i =  $('#search_suggestion_holder li').index($('#search_suggestion_holder li.selected')) ;
                    $('#search_suggestion_holder li.selected').removeClass('selected');
                    i++;
                    $('#search_suggestion_holder li:eq('+i+')').addClass('selected');
                }
            }
        }else if(e.keyCode ==13){
            if( $('.selected').is(':visible') ){
                var value   =   $('.selected').text();
                $('#search-box').val(value);
                $('#search_suggestion_holder').hide();
            }
        }else{
            var keyword = $(this).val();
            $('#loader').show();
            
            /*
            setTimeout( function(){
                $.ajax({
                    url:'get_suggestions.php',
                    apantisi:'term='+keyword,
                    success:function(apantisi){
                        //$('#search_suggestion_holder').html(apantisi);
                        //$('#search_suggestion_holder').show();
                        //$('#loader').hide();
                        console.log(apantisi[0].ev_title);
                    }
                });
            },400);*/

            $.getJSON("get.php", { term: keyword  }, function(apantisi, status){
                //console.log(apantisi[0].ev_title);
                //$("#results").append("<li>"+apantisi[0].ev_title+"</li>");
                //$( "#results li" ).remove();
                $('#search_suggestion_holder li').remove();
                $.each( apantisi, function( key, value ) {
                    //alert( key + ": " + value );
                    //$("#results").append("<li>"+apantisi[key].ev_title+"</li>");
                    if (apantisi[key].ev_title!=undefined) {

                        $('#search_suggestion_holder').append("<li>"+apantisi[key].ev_title+"</li>");
                        $('#search_suggestion_holder').show();
                        $('#loader').hide();
                        console.log(apantisi[key].ev_title);
                    }
                    else if(apantisi[key].ev_title==undefined){
                        $('#search_suggestion_holder').html("<li>No results</li>");
                        $('#search_suggestion_holder').show();
                        $('#loader').hide();
                    }
                });
                
            
            });
        }
    });
 
    $('#search_suggestion_holder').on('click','li',function(){
        var value   =   $(this).text();
        $('#search-box').val(value);
        $('#search_suggestion_holder').hide();
    });
 
});