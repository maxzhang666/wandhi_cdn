document.write("<div class=\"container\"><iframe src='//fk.wandhi.com' id='online' name='online' scrolling='yes' frameborder='no' marginwidth='0' marginheight='0' allowtrancparency='true'></iframe></div>");
if (!jQuery) { 
    location.reload()
}
$(function () {
    history.pushState({}, $('title').html(), ''); //浏览器地址改变
    setparam();
    $('.nav a').click(function () {
        loadurl($(this).data('url'));
        history.pushState({}, $('title').html(), '#' + $(this).data('url')); //浏览器地址改变
    });
    
    //针对浏览器前进、后退的处理
    window.addEventListener("popstate", function() {
        var currentState = history.state;
        setparam();
    });
});
show_date_time();
function setparam(){
    var paramid = document.URL.split('#')[1];
    console.log("id=" + paramid);
    if(paramid === undefined)
    {
        loadurl('faka');
    }else{
        loadurl(paramid);
    }
    return false;
}
function loadurl(url){
    $('#nav a').removeClass('on');
    $("a[data-url='" + url + "']").addClass('on');
    $('#online').attr('src', $("a[data-url='" + url + "']").attr('data'));
    $('title').html($("a[data-url='" + url + "']").html() + ' - 玩的嗨工具箱');
}
function show_date_time(){
window.setTimeout("show_date_time()", 1000);
BirthDay=new Date("08-23-2019 12:12:12");//建站日期
today=new Date();
timeold=(today.getTime()-BirthDay.getTime());
sectimeold=timeold/1000
secondsold=Math.floor(sectimeold);
msPerDay=24*60*60*1000
e_daysold=timeold/msPerDay
daysold=Math.floor(e_daysold);
e_hrsold=(daysold-e_daysold)*-24;
hrsold=Math.floor(e_hrsold);
e_minsold=(hrsold-e_hrsold)*-60;
minsold=Math.floor((hrsold-e_hrsold)*-60);
seconds=Math.floor((minsold-e_minsold)*-60);
momk.innerHTML=daysold+"天"+hrsold+"小时"+minsold+"分"+seconds+"秒" ;
}