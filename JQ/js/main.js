$(function() {
	
	$("#img1").on('click',function(){
		var orderTemplate=$('#order-template').html();
	    var order={value:$('#txt').val(),}
		$('#orders').append(Mustache.render(orderTemplate,order));
		$('#txt').val('');
         
    });

 
})
 function del(delThis){
    	$(delThis).parents('li').hide(300);
    };
    function move(moveThis){
    	  
        var mov=$(moveThis).parent();
    	if($(mov).parent().attr('id')=='orders'){
          $(moveThis).attr('src','img/2.png');
          $(mov).appendTo($('#orders2'));
          

    	}else{
    		$(mov).appendTo($('#orders'));
    		$(moveThis).attr('src','img/1.png');
    	}
        
         
    	}
    	