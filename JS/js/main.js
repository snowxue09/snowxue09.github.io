function wrap() {
	var divBox=document.getElementById('divbox');
	var add=document.getElementById('add');
	var txt=document.getElementById('txt');
	var img1=document.getElementById('img1'); 
	var ul=document.getElementById('ul1');
	var ul2=document.getElementById('ul2');

	
       

    img1.onclick=function(){
      roll();
      txt.value='';


    }
    function roll(){
    	  // 添加li和里面的img
       var li=document.createElement('li');
       ul.appendChild(li);
       li.innerHTML=txt.value;
      
       var img2=document.createElement('img');
       img2.setAttribute('id','img2');
       img2.src='img/3.png';
       li.appendChild(img2);
       var img3=document.createElement('img');
        li.appendChild(img3);
        img3.setAttribute('id','img3');
        img3.src='img/1.png';

        img2.onclick=function(){
        	del(this);
        };
        img3.onclick=function(){
        	move(this);
        };

       
    }
    function del(delThis){
    	delThis.parentNode.remove();
    }
    function move(moveThis){
    	var s = moveThis.parentNode.parentNode.id;
    console.log(s)
    	if(s=='ul1'){
    		moveThis.setAttribute('src','img/2.png');
    		ul2.appendChild(moveThis.parentNode);

    	}else if(s =='ul2'){
    		moveThis.setAttribute('src','img/1.png');
    		ul.appendChild(moveThis.parentNode);
    	}
    }

}
wrap();
