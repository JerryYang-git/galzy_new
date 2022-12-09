$(function () {
    /**
     * 方式一 按钮父节点监听事件
     *
     * @param selector  触发点击事件的按钮
     * @param container 展示刷新内容的容器，也就是会被替换的部分
     * @param options   参数
     */
    // pjax
    $(document).pjax('#pjax-a', '#main',
        {
            fragment: '#main',
            timeout: 8000
        });
    $(document)
        .on(
            'pjax:start', NProgress.start
        )
        .on(
            'pjax:end', NProgress.done
        );
    showTime();
    $(document).on('ready pjax:end', function (event) {
        $(event.target).fetch()
    })

})
$(function () {
    /**
     * 方式一 按钮父节点监听事件
     *
     * @param selector  触发点击事件的按钮
     * @param container 展示刷新内容的容器，也就是会被替换的部分
     * @param options   参数
     */
    // pjax
    $(document).pjax('#pjax-b', '#helpmain',
        {
            fragment: '#helpmain',
            timeout: 8000
        });
    $(document)
        .on(
            'pjax:start', NProgress.start
        )
        .on(
            'pjax:end', NProgress.done
        );
    showTime();
    $(document).on('ready pjax:end', function (event) {
        $(event.target).fetch()
    })

})
// iframe加载动画
function stateChangeIE(_frame) {
    if (_frame.readyState == "interactive") {
        var loader = document.getElementById("loading");
        loader.innerHTML = "";
        loader.style.display = "none";
        _frame.style.visibility = "visible";
    }
}
function stateChangeFirefox(_frame) {
    var loader = document.getElementById("loading");
    var f = document.getElementById("whpj-box");
    f.height = "512";
    loader.innerHTML = "";
    loader.style.display = "none";
    _frame.style.visibility = "visible";
}

// 回到顶部


window.onscroll = function () {
    var currentHeight =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;
    console.log(currentHeight, "currentHeight");
    if (currentHeight > 300) {
        document.getElementById('backtop').style.display = 'block'
    } else {
        document.getElementById('backtop').style.display = 'none'
    }
}

function scrollToTop() {
    var topHeight =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;
    var speed = topHeight / 10 > 100 ? topHeight / 10 : 100;
    scrollBy(0, -speed);
    // 模拟鼠标向上滚动事件
    scrolldelay = setTimeout('scrollToTop()', 50);
    // 清除滚动事件，避免无法向下移动
    if (topHeight === 0) {
        clearTimeout(scrolldelay);
        scrolldelay = null;
    }
}
function scrollLis() {

    var toTop = offs.top - $(window).scrollTop();

    if (toTop == 0 || toTop < 0) {

        if (!$('#fixed').hasClass('ab')) $('#fixed').addClass('ab');

    } else {

        $('#fixed').removeClass('ab');

    }

}

var offs = $('#fixed').offset();

$(window).scroll(function () {

    scrollLis();

});