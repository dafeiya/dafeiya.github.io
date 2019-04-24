// JavaScript Document
$(function(){

	//$(".page_m").pages({_data:products1,_mpro:$("#zy")});
	
	var initPagination = function() {
		var num_entries = products1.length;
		// 创建分页
		$("#Pagination").pagination(num_entries, {
			num_edge_entries: 2, //边缘页数
			num_display_entries: 4, //主体页数
			callback: pageselectCallback,
			items_per_page:18 //每页显示1项
		});
	 }();
	 
	function pageselectCallback(page_index, jq){
				var data = products1.slice((page_index)*18,(page_index)*18+18);
				var html = "";
				for(var i in data){
					html += "<li><img src=\""+data[i].path+data[i].smallImage+"\">";
					html += "<div class=\"textbg\"><div class=\"p_box\"><div class=\"ar_1\">"+data[i].photographer+"</div>";
					html += " <div class=\"ar_2\">"+data[i].coutry+"</div><div class=\"b_fk\"></div>";
					html += " <div class=\"ar_3\">"+data[i].category+"</div>";
					html += " <a href=\"javascript:showbig("+data[i].bigImage+","+data[i].index+")\" class=\"ar_4\">查看大图</a>";
					html += " </div></div></li>";
						 }
						
				 $("#zy").empty().html(html);
				 $(".pic_xx li").each(function(){
				  $(this).hover(function(){
					  
					  $(this).find(".textbg").stop().animate({"top":0})
				  
					  },function(){
					  
					  $(this).find(".textbg").stop().animate({"top":220})
				  
					  });
				  
				  });	
		
	}
	
	
	})