$(function () {
    $(".nav_bg a").click(function(){
        $(this).addClass("nactive").siblings().removeClass("nactive");
    });

    $(".nav_0").click(function () {
        top.frames["iframe_main"].location.href=$(this).data("href");
    });

    //初始化混动图片内容
    initGalleryPhotos();
    function initGalleryPhotos() {
        let photoItems=$.config.navigatorPhotos;
        let html="";
        for (let i = 0; i <photoItems.length ; i++) {
            html+='<div class="gallery-item">';
            html+='<img class="slick-image" width="800px" height="450px" src="'+photoItems[i].src+'" />';
            html+='<span class="caption"><span>'+photoItems[i].title+'</span></span>';
            html+='</div>';
        }
        $("#gallery-photos").html(html);
    }

    //绑定滚动图片的点击浏览
    $(".gallery-item .caption").on("click", function(e){
        parent.showPhotos($.config.navigatorPhotos);
    });
});