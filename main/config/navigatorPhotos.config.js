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
                {"title": "太湖西山~苏州", "src": encodeURI("/images/navigator/太湖西山1.jpg") ,"alt": "图片介绍1"},
                // {"alt": "图片介绍3", "title": "太湖西山~苏州", "src": encodeURI("/images/navigator/太湖西山3.png")},
                {"alt": "图片介绍3", "title": "东冲半岛~霞浦", "src": encodeURI("/images/navigator/福建霞浦1.jpg")},
                {"alt": "图片介绍3", "title": "东冲半岛~霞浦", "src": encodeURI("/images/navigator/福建霞浦2.jpg")},
                {"alt": "图片介绍3", "title": "东冲半岛~霞浦", "src": encodeURI("/images/navigator/福建霞浦3.jpg")},
                {"alt": "图片介绍3", "title": "东冲半岛~霞浦", "src": encodeURI("/images/navigator/福建霞浦4.jpg")},
                {"alt": "图片介绍3", "title": "太湖鼋头渚~无锡", "src": encodeURI("/images/navigator/鼋头渚-无锡.jpg")},
                {"alt": "图片介绍3", "title": "东冲半岛~霞浦", "src": encodeURI("/images/navigator/福建霞浦5.jpg")},
                {"alt": "图片介绍3", "title": "东冲半岛~霞浦", "src": encodeURI("/images/navigator/福建霞浦6.jpg")},
                {"alt": "图片介绍3", "title": "东冲半岛~霞浦", "src": encodeURI("/images/navigator/福建霞浦7.jpg")},
                {"alt": "图片介绍3", "title": "东冲半岛~霞浦", "src": encodeURI("/images/navigator/福建霞浦8.jpg")},
                {"alt": "图片介绍2", "title": "太湖西山~苏州", "src": encodeURI("/images/navigator/太湖西山2.png")},
                // {"alt": "图片介绍3", "title": "东冲半岛~霞浦", "src": encodeURI("/images/navigator/福建霞浦9.jpg")},
                {"alt": "图片介绍3", "title": "东冲半岛~霞浦", "src": encodeURI("/images/navigator/福建霞浦10.jpg")}
            ],
            blog:[]
        };
    })(jQuery);
});