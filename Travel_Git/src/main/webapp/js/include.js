/**
 加载头部和尾部页面
 **/


$(function () {
    $.get({
        url: "header.html",
        success: function (data) {
            $("#header").html(data);
        }
    });

    $.get({
        url: "footer.html",
        success: function (data) {
            $("#footer").html(data);
        }
    });
})