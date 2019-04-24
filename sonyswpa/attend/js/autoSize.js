// JavaScript Document
(function(){
	function resizeFont(){
	var docEl=document.documentElement;
	var cw=docEl.clientWidth;
	if(!cw){return}
	if(100*(cw/640) > 100 ){
		
		docEl.style.fontSize=85+"px";
		}else{
	docEl.style.fontSize=100*(cw/640)+"px";
	}
	}
	
	resizeFont();
	$(window).on("resize orientation",function(){
		resizeFont();
		})
	})()