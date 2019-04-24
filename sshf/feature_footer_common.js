$("#main.feature .header .left").html('<a href="https://www.sonystyle.com.cn" target="_blank"><img src="https://www.sonystyle.com.cn/sshf/images/logo_new.jpg"/></a>');
$.ajax({
     url: "/sshf/footer.html",
     dataType: 'html',
     success:function(html){
         $("#footer").append(html);
     }
});