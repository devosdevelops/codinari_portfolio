$(document).ready(function(){
    $("#main-header__hb").click(function(){
        let src = $(this).attr("src");
        if(src == "../img/menu/menu_hb.svg"){
            $(this).attr("src","../img/menu/menu_exit.svg");
        }else{
            $(this).attr("src","../img/menu/menu_hb.svg");
        }
        $(".main-header__menu").stop().slideToggle(500);
    });
});