// 树结构数据初始化

/*
使用json构建jstree里，一种可以使用ajax请求的方式构建, 一种可以使用有父子嵌套关系的json格式的数据构建， 另外一种可以使用非嵌套关系的json格式数据构建(我认为这种最方便)
          如果你不想使用嵌套父子关系的json ,你可以使用这种非嵌套方式的， 每个node只有两个属性是必需的: id 和parent, 其他都是可选的，不需要 children属性，jstree会自动构建层级关系。 可以将node的parent属性设置为"#",表示为一个root节点。
这种方式非常适用于从数据库中加载出来的数据，可以非常方便的构建整个树。
          比如上图这个changed.jstree事件， 这个是官网提供的api,从这个api上看，我还以为是这个event会有4个回调参数，其实并不是，翻看了原代码后才知道，只有2个参数event和data。可以通过data.action、data.selected、data.node 取相应的参数。
      事件	作用	应用场景
      select_node.jstree	当一个node被选用时触发	当点击某个节点时执行一个动作。
      在网上搜索，很多资料写的是绑定click.jstree,其实在官网的api里，click.jstree并没有支持，
       这里应该使用select_node.jstree
      changed.jstree	当selection changes时，或者删除节点、	可以监听jstree的改变，例如jstree改变时可以同步
      更新数据库中的节点情况
      create_node.jstree	当节点被创建时触发
      delete_node.jstree	当节点被删除时触发
      rename_node.jstree	当一个node被重命名时触发
*/

function initProgramTree(id){
    $("#"+id).jstree({
        "plugins" : [ "contextmenu", "dnd", "search","state", "types", "wholerow"],
        'types': {
            //根节点类型
            "#" : {
                "max_children" : 1,
                "max_depth" : 3,
                "valid_children" : ["root"]
            },
            "root" : {
                "icon" : "..",
                "valid_children" : ["default"]
            },
            "default" : {
                "valid_children" : ["default","file"]
            },
            "file" : {
                "icon" : "glyphicon glyphicon-file",
                "valid_children" : []
            }
        },
        'core': {
            "animation" : 0,
            "check_callback" : true,
            "themes" : {
                "variant" : "large",//加大
                "ellipsis" : true, //文字多时省略
                "stripes" : true    //条纹主题
            },
            'data': [
                {
                    "id": "10000",
                    "parent": "#",
                    "text": "java开发"
                }, {
                    "id": "20000",
                    "parent": "#",
                    "text": "计算机网络",
                    'state' : {
                        'selected' : false,
                        'opened' : false
                    }
                }, {
                    "id": "11001",
                    "parent": "10000",
                    "text": "jvm详解",
                    "icon" : "jstree-file"
                }, {
                    "id": "11002",
                    "parent": "10000",
                    "text": "java多线程编程详解",
                    "icon" : "jstree-file"
                },{
                    "id": "20004",
                    "parent": "20000",
                    "text": "OSI网络模型概要",
                    "icon" : "jstree-file"
                }, {
                    "id": "20001",
                    "parent": "20000",
                    "text": "DNS协议详解",
                    "icon" : "jstree-file"
                }, {
                    "id": "20002",
                    "parent": "20000",
                    "text": "RAP/NRAP协议详解",
                    "icon" : "jstree-file"
                }, {
                    "id": "20003",
                    "parent": "20000",
                    "text": "NAT协议详解",
                    "icon" : "jstree-file"
                }
            ]
        }
    });

    $("#"+id).on("select_node.jstree", function (e, data) {
        //console.log(data.node);
        var programerBlogName="programer_blog_"+data.node.id+".html";
        $(top.frames['iframe_main'].document).find("#blogcontext").load("/main/html/menu/programer/blogs/"+programerBlogName);

    }).on('changed.jstree', function(event,data) {
        // console.log("-----------changed.jstree");
        // console.log("action:" + data.action);
        // console.log(data.node);
    });
}



