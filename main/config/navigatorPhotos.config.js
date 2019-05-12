$(function () {
    /**limeng
     * 公共配置文件
     */
    (function ($) {
        $.config={
            /**
             轮播图片配置
             示例：
             {
                 "alt": "图片介绍",
                 "pid": 4, //图片id
                 "title": “图片展示名”
                 "anim": 0,
                 "src": "__IMG__/01.jpg" //地址
             }*/
            navigatorPhotos:[
                {"alt": "图片介绍1", "title": "太湖西山~苏州", "src": encodeURI("/images/navigator/太湖西山1.jpg")},
                {"alt": "图片介绍2", "title": "太湖西山~苏州", "src": encodeURI("/images/navigator/太湖西山2.png")},
                {"alt": "图片介绍3", "title": "太湖西山~苏州", "src": encodeURI("/images/navigator/太湖西山3.png")},
                {"alt": "图片介绍3", "title": "太湖~鼋头渚", "src": encodeURI("/images/navigator/鼋头渚-无锡.png")}
            ],
            blog:[]
        };
    })(jQuery);
});