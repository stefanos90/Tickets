$(function () {
    $("#topic_title").keyup(function (e) {
    		var input_search = $("#topic_title").val();  
    		//console.log(input_search);
    		if (input_search.length>=2) {
	    		$.getJSON("auto.php", { term: input_search  }, function(apantisi, status){
					//console.log(apantisi[0].ev_title);
					//$("#results").append("<li>"+apantisi[0].ev_title+"</li>");
					$( "#results li" ).remove();
					$.each( apantisi, function( key, value ) {
					 // alert( key + ": " + value );
					  $("#results").append("<li>"+apantisi[key].ev_title+"</li>");
					});
					
				
				});
	    	}
	    	else if (input_search.length<2) {
	    		$( "#results li" ).remove();
	    	}
	    	if(e.keyCode == 8){
	    		$( "#results li" ).remove();
	    	}
/*   		

	        var OriginalContent = $(this).text();
	        $(this).addClass("cellEditing");
	        $(this).html("<textarea type='text' >" + OriginalContent + "</textarea>");
	        $(this).children().first().focus();
	        $(this).children().first().keypress(function (e) {
	            if (e.which == 13) {
	                var newContent = $(this).val();
	                $(this).parent().text(newContent);
	                $(this).parent().removeClass("cellEditing");
	                //console.log("mera: "	+cl_class[0]);
	                //console.log("stadio: "	+cl_class[1]);
	                $.get( "update.php", { mera: cl_class[0], stadio: cl_class[1], fagita:newContent , username:user } );

	            }
	        });
	    $(this).children().first().blur(function(){
	        $(this).parent().text(OriginalContent);
	        $(this).parent().removeClass("cellEditing");
	    });
	        $(this).find('textarea').click(function(e){
	            e.stopPropagation(); 
	        });
*/
    });
});


