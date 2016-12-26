function resize(Origin,type){
    var widths=document.documentElement.clientWidth;
    var heights=document.documentElement.clientHeight;
    var type=type||"x";
    if(type=="x"){
       var scale=widths/Origin*100;
    }else if(type=="y"){
        var scale=heights/Origin*100;
    }
    document.getElementsByTagName("html")[0].style.fontSize=scale+"px";
}
   resize(750,"y");

$(function(){
    var mySwiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        scrollbar: '.swiper-scrollbar'

    })
})
