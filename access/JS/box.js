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

// 一言
var xhr = new XMLHttpRequest();
xhr.open('get', 'https://v1.hitokoto.cn');
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        var data = JSON.parse(xhr.responseText);
        var hitokoto = document.getElementById('hitokoto_text');
        hitokoto.href = 'https://hitokoto.cn/?uuid=' + data.uuid
        hitokoto.innerText = data.hitokoto;
    }
}
xhr.send();


// pjax
$(function () {
    $(document).pjax('#pjax-a', '#main', {
        fragment: '#main',
        timeout: 8000
    });
    $(document).pjax('#pjax-b', '#helpmain', {
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
    // showTime();
    $(document).on('ready pjax:end', function (event) {
        $(event.target).fetch()
    })
})

// 灯箱初始化
function lightGalleryiuui() {
    lightGallery(document.getElementById('lightgallery'), {
        plugins: [lgZoom, lgThumbnail],
        licenseKey: 'your_license_key',
        speed: 500,
        // ... other settings
    });
    lightGallery(document.getElementById('selector1'), {
        selector: '.item',
        selector: '.item2',
    });
}

// 通过 JavaScript 调用tab组件
function pjax_reload() {
    var tab = new mdui.Tab('#tab');
    var tab2 = new mdui.Tab('#tab2');
    var Panel = new mdui.Panel('#mdui-panel');
}
pjax_reload();
lightGalleryiuui();
// pjax后重载
$(document).on('pjax:complete', function () {
    pjax_reload();
    lightGalleryiuui();
});