$(document).ready(function () {
    $("body").attr("style", "background-color: transparent !important;");
    $(".search-input").attr("placeholder", "🔎搜索框，搜索文件(夹)");
    $(".search-input").attr("maxLength", "36");
    $(".mdui-container").attr("Id", "main");
    if (document.getElementsByClassName("mdui-card-media mdui-center")[0]) {
        var mduilist = document.getElementsByClassName("mdui-textfield mdui-textfield-floating-label");
        var erwwma = document.createElement("div");
        erwwma.style.borderRadius = "20px";
        erwwma.style.display = "10px";
        erwwma.style.padding = "10px";
        erwwma.style.display = "block";
        erwwma.style.id = "headContent";
        erwwma.className = "mdui-typo mdui-shadow-2";
        erwwma.innerHTML = '<p style="text-align: center; margin-bottom: 2px;" >文件夹密码加入紫缘社QQ群<a style="color:#ff4081;" onclick="copyInnerTextOfCell(event)"href="https://qm.qq.com/cgi-bin/qm/qr?k=K-3l8LNnZmFpzBTdLy1RN6W2U5Q_vonG&authKey=qnJJRW%2B8aKACixy7SuSfeFGKXB41ycA0rTW27TkF4m3lHk0HhRv23EWVUkrAFRHj&noverify=0&group_code=545760620">545760620</a>｜<a style="color:#ff4081;" onclick="copyInnerTextOfCell(event)"href="https://qm.qq.com/cgi-bin/qm/qr?k=dxOiqvfXZRO3ZdAOoi4UV12RRMit63nJ&authKey=CtBBN8IzO4ZvVH54VApSnERVn9Bu%2FKxecOda3JVZztj7lPaaygQEpLcqvbLFHJlE&noverify=0&group_code=644154683">644154683</a>或<a style="color:#ff4081;" onclick="copyInnerTextOfCell(event)"href="https://qun.qq.com/qqweb/qunpro/share?_wv=3&_wwv=128&appChannel=share&inviteCode=9MaCN&businessType=9&from=246610&biz=ka">频道</a>获取</p><img src="https://s3.bmp.ovh/imgs/2022/08/04/a4d5b3b359a9b330.webp" alt="图片加载失败" style="border-radius: 20px;">';
        document.getElementsByClassName("mdui-card-media mdui-center")[0].insertBefore(erwwma, mduilist.insertBefore)
    }
    window.oncontextmenu = function () {
        return false
    };
    $(document).keydown(function (event) {
        if (event.keyCode == 123) {
            return false
        } else {
            if ((event.ctrlKey && event.shiftKey && event.keyCode == 73) || (event.ctrlKey && event.shiftKey && event.keyCode == 74)) {
                return false
            }
        }
    })
});