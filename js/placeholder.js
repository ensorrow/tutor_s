window.onload=function(){
	var placeholder=document.getElementById('plh');
	var seabox=document.getElementById('search_box');
	placeholder.onclick=seabox.onfocus;
	seabox.onfocus=function(){
		placeholder.style.display='none';
	}
	seabox.onblur=function(){
		if(seabox.value==''){
			placeholder.style.display='block';			
		}
	}
	
}