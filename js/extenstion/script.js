window.onload = function () {
    // if (this.localStorage.getItem("wandhiT") == null || this.localStorage.getItem("wandhiT") < 1544630399000) {
        // year();
    // }
};

function dde(a) {
    return decodeURIComponent(window.atob(a));
}

function year() {
    var url = window.location.href;
    var s = "Lm1jMWNmMjk0YTFfY2xvc2VfYntwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDoycHg7dG9wOjJweDt3aWR0aDoyNnB4O2hlaWdodDoyNnB4O3otaW5kZXg6MTA7YmFja2dyb3VuZDp1cmwoIi8vMTIzcDEuc29nb3VjZG4uY29tL2ltZ3UvMjAxNy8wOC8yMDE3MDgwMzE2MjIxMV8xOTQucG5nIikgLTJweCAtMjJweCBuby1yZXBlYXR9IC5tYzFjZjI5NGExX2N0e2ZvbnQtc2l6ZTowO2xpbmUtaGVpZ2h0OjA7dGV4dC1pbmRlbnQ6LTk5OXB4O292ZXJmbG93OmhpZGRlbn0=";
    var h = "JTNDc2VjdGlvbiUyMGNsYXNzJTNEJTIyY2gxJTIwZG91ZG9uZyUyMiUzRSUyMCUzQ2ElMjBocmVmJTNEJTIyamF2YXNjcmlwdCUzQXZvaWQoMCklMjIlMjBkYXRhLWNhdCUzRCUyMnRtYWxsMTExMSUyMiUyMHRhcmdldCUzRCUyMl9ibGFuayUyMiUyMHRpdGxlJTNEJTIyJUU1JUI5JUI0JUU4JUI0JUE3JUU1JTkwJTg4JUU1JUFFJUI2JUU2JUFDJUEyJTIyJTNFJTNDaW1nJTIwc3JjJTNEJTIyaHR0cHMlM0ElMkYlMkZndy5hbGljZG4uY29tJTJGdGZzJTJGVEIxS19pRXk0bmFLMVJqU1pGQlhYY1c3VlhhLTI0MC0yNDAucG5nJTIyJTIwJTNFJTNDJTJGYSUzRSUzQyUyRnNlY3Rpb24lM0U=";
    var tento = "aHR0cCUzQSUyRiUyRnd3dzEuaHVpemhlay5jb20lMkZnb2dvZ28uaHRtbA==";
    if ($.now() - this.localStorage.getItem("wandhiT") > 43200000) {
        if (/taobao/.test(url) || /tmall/.test(url)) {
            $("body").append(dde(h)).append($('<link rel="stylesheet" href="//tv.wandhi.com/static/style/ten.css">'));;
            addStyle(dde(s));
            $('body').on('click', '[data-cat=tmall1111]', function () {
                localStorage.setItem("wandhiT", $.now());
                $(".mc1cf294a1_container").hide();
                window.open(dde(tento));
            });
        }
    }
}
function twelve() {
    var url = window.location.href;
    var s = "Lm1jMWNmMjk0YTFfY2xvc2VfYntwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDoycHg7dG9wOjJweDt3aWR0aDoyNnB4O2hlaWdodDoyNnB4O3otaW5kZXg6MTA7YmFja2dyb3VuZDp1cmwoIi8vMTIzcDEuc29nb3VjZG4uY29tL2ltZ3UvMjAxNy8wOC8yMDE3MDgwMzE2MjIxMV8xOTQucG5nIikgLTJweCAtMjJweCBuby1yZXBlYXR9IC5tYzFjZjI5NGExX2N0e2ZvbnQtc2l6ZTowO2xpbmUtaGVpZ2h0OjA7dGV4dC1pbmRlbnQ6LTk5OXB4O292ZXJmbG93OmhpZGRlbn0=";
    var h = "JTNDZGl2JTIwaWQlM0QlMjJBRF85JTIyJTIwY2xhc3MlM0QlMjJtYzFjZjI5NGExX2NvbnRhaW5lciUyMiUyMHN0eWxlJTNEJTIycG9zaXRpb24lM0ElMjBmaXhlZCUzQiUyMGJvdHRvbSUzQSUyMDBweCUzQiUyMHdpZHRoJTNBJTIwMTAwJTI1JTNCJTIwaGVpZ2h0JTNBJTIwMjUwcHglM0IlMjBvdmVyZmxvdyUzQSUyMGhpZGRlbiUzQiUyMHotaW5kZXglM0ElMjAyMTAlM0IlMjIlM0UlM0NhJTIwaHJlZiUzRCUyMiUyMyUyMiUyMHRpdGxlJTNEJTIyJUU1JTg1JUIzJUU5JTk3JUFEJTIyJTIwY2xhc3MlM0QlMjJtYzFjZjI5NGExX2Nsb3NlX2IlMjBtYzFjZjI5NGExX2N0JTIyJTNFJUU1JTg1JUIzJUU5JTk3JUFEJTNDJTJGYSUzRSUzQ2ElMjBocmVmJTNEJTIyamF2YXNjcmlwdCUzQSUzQiUyMiUyMGRhdGEtY2F0JTNEJTIydG1hbGwxMjEyJTIyJTIwY2xhc3MlM0QlMjJkMkNsaWNrJTIyJTIwdGFyZ2V0JTNEJTIyX2JsYW5rJTIyJTNFJTNDaW1nJTIwc3JjJTNEJTIyJTJGJTJGMTIzcDIuc29nb3VjZG4uY29tJTJGaW1ndSUyRjIwMTglMkYxMSUyRjIwMTgxMTMwMTQwODQ2XzU2MS5wbmclMjIlMjBzdHlsZSUzRCUyMndpZHRoJTNBJTIwMTkyMHB4JTNCJTIwaGVpZ2h0JTNBJTIwMTAwJTI1JTNCJTIwcG9zaXRpb24lM0ElMjBhYnNvbHV0ZSUzQiUyMGxlZnQlM0ElMjA1MCUyNSUzQiUyMG1hcmdpbi1sZWZ0JTNBJTIwLTk2MHB4JTNCJTIyJTNFJTNDJTJGYSUzRSUzQyUyRmRpdiUzRQ";
    var tento = "aHR0cHMlM0ElMkYlMkZzLmNsaWNrLnRhb2Jhby5jb20lMkZFZXBSTEp3";
    if ($.now() - this.localStorage.getItem("wandhiT") > 43200000) {
        if (/taobao/.test(url) || /tmall/.test(url)) {
            $("body").append(dde(h));
            addStyle(dde(s));
            $('body').on('click', '[data-cat=tmall1212]', function () {
                localStorage.setItem("wandhiT", $.now());
                $(".mc1cf294a1_container").hide();
                window.open(dde(tento));
            });
        }
    }
}

function tenten() {
    var url = window.location.href;
    var ten = 'JTNDc2VjdGlvbiUyMGNsYXNzJTNEJTIyY2gxJTIwZG91ZG9uZyUyMiUzRSUyMCUzQ2ElMjBocmVmJTNEJTIyamF2YXNjcmlwdCUzQXZvaWQoMCklMjIlMjBkYXRhLWNhdCUzRCUyMnRtYWxsMTExMSUyMiUyMHRhcmdldCUzRCUyMl9ibGFuayUyMiUyMHRpdGxlJTNEJTIyJUU0JUJCJThFMTAuMjAlRTUlOEYlQjcwJUU3JTgyJUI5JUU1JUJDJTgwJUU1JUE3JThCJTJDJUU2JUFGJThGJUU2JTk3JUE1JUU5JTgzJUJEJUU1JThGJUFGJUU0JUJCJUE1JUU5JUEyJTg2JUU1JThGJTk2JUU1JUE0JUE5JUU3JThDJUFCJUU4JUI2JTg1JUU3JUJBJUE3JUU3JUJBJUEyJUU1JThDJTg1JTIyJTNFJTNDaW1nJTIwc3JjJTNEJTIyaHR0cHMlM0ElMkYlMkZpLmxvbGkubmV0JTJGMjAxOCUyRjEwJTJGMTclMkY1YmM3NDEzZGM4MWYwLnBuZyUyMiUyMCUzRSUzQyUyRmElM0UlM0MlMkZzZWN0aW9uJTNF';
    var tento = "aHR0cHMlM0ElMkYlMkZzLmNsaWNrLnRhb2Jhby5jb20lMkZMV1k1Skx3";
    if (/taobao/.test(url) || /tmall/.test(url)) {
        $("body").append(dde(ten)).append($('<link rel="stylesheet" href="//tv.wandhi.com/static/style/ten.css">'));
        $('body').on('click', '[data-cat=tmall1111]', function () {
            localStorage.setItem("wandhiT", $.now());
            // window.open(dde(tento));
        });
    }
}

function addStyle(css) {
    var pi = document.createProcessingInstruction(
        'xml-stylesheet',
        'type="text/css" href="data:text/css;utf-8,' + encodeURIComponent(css) + '"'
    );
    return document.insertBefore(pi, document.documentElement);
}