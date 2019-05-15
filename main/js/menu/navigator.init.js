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

    $(".toggle-btn").click(function () {
        const status = $(this).attr("status");
        $("#navigator-gallery").slideToggle(500);
        if (status == "on") {
            $(top.document.getElementById("iframe_navigator")).animate({"height": "150px"}, 500);
            $(".toggle-btn .pack-up").css("transform", "rotate(-180deg)");
            $(this).attr("status", "off")
        } else {
            $(top.document.getElementById("iframe_navigator")).animate({"height": "592px"}, 500);
            $(".toggle-btn .pack-up").css("transform", "rotate(0deg)");
            $(".slick-next").trigger("click");
            $(this).attr("status", "on")
        }
    })

});