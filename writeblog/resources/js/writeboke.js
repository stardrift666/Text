$(function () {
    $(".InputOne").keyup(function () {
        var a = $(".InputOne").val();
        var b = a.length;
        if (b > 99) {
            $(this).val($(this).val().substring(0, 100));
            alert("输入超过100个字符");
            $("#Number").text(100);
        } else { 
            $("#Number").text(b);
        }
    });

    $(".ButtonOne").click(function(){
        var title=$.trim($(".InputOne").val());
        var content = $.trim($(".editor").val());
        var mdcontent=$.trim($(".markdown-body").html());
        var userid=1;
        // var converter = new showdown.Converter();
        // var md  = converter.makeHtml(mdcontent); 
        // $(".hhhhhhh").html(htmlcontent);
        // var str={
        //     title:title,
        //     content:content,
        //     mdcontent:mdcontent
        // };
        // alert(mdcontent);
        $.ajax({
            type: "POST",
            url: "http://47.103.10.220:8081/wordstreamupload" ,
            dataType: "text",
            data: {
                
                title:title,
                content:content,
            mdcontent:mdcontent,
            userid:userid},
            // timeout:5000,
            success: function (info) {
                alert(info);
                // if (info) {
                //     alert("提交成功");
                // }
                // else{
                //     alert("hhhhhh");
                // }
            },
            error : function() {
                alert("提交失败");
            }
        });
    });
    $(".ButtonTwo").click(function(){
        draftboke();
    });
    // var content ='${blog.article}'; //使用el表达式获取后台返回的markdown内容
    // var converter = new showdown.Converter(); //初始化转换器
    // var htmlcontent  = converter.makeHtml(content); //将MarkDown转为html格式的内容
    // $("#article .article-entry").html(htmlcontent);//添加到 div 中 显示出来
    function draftboke() {
        $.ajax({
            type: "POST",
            dataType: "json",
            url: "" ,
            data: $('.FormOne').serialize(),
            success: function (msg) {
                if (msg == 0) {
                    alert("成功存入草稿");
                }
            },
            error : function() {
                alert("存入草稿失败");
            }
        });
    }
});