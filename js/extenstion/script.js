window.onload = function () {
    // if (this.localStorage.getItem("wandhiT") == null || this.localStorage.getItem("wandhiT") < 1544630399000) {
        // year();
    // }
};

function dde(a) {
    return decodeURIComponent(window.atob(a));
}
function addStyle(css) {
    var pi = document.createProcessingInstruction(
        'xml-stylesheet',
        'type="text/css" href="data:text/css;utf-8,' + encodeURIComponent(css) + '"'
    );
    return document.insertBefore(pi, document.documentElement);
}