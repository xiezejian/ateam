// JavaScript Document
$(document).ready(function(){
//**************导航**************//
  $("#menu li.pli").mouseenter(function(){
    $("#menu li.pli .sub").hide();
	$(this).find(".sub").show();
	$("#menu li.pli").removeClass("curt");	
	$(this).addClass("curt");
  });
  $("#menu li.pli ul.sub").mouseleave(function(){
	$(this).fadeOut();
  });
//**************正文字体大小**************//
  $("#s").click(function(){
	$(".b").css("font-size","14px");
	$("#s").css("font-weight","bold");
	$("#b").css("font-weight","normal");
	$("#m").css("font-weight","normal"); 
  });
  $("#m").click(function(){
	$("#m").css("font-weight","bold");
	$("#s").css("font-weight","normal");
	$("#b").css("font-weight","normal");  
	$(".b").css("font-size","16px");
  });
  $("#b").click(function(){
	$("#b").css("font-weight","bold");
	$(".b").css("font-size","18px");
	$("#m").css("font-weight","normal");
	$("#s").css("font-weight","normal");
  });
//**************主页右边栏**************// 
  $("#deptul3").mouseenter(function(){
	$("#deptul4").addClass("ho");
	$("#deptul3").removeClass("ho");
  });
  $("#deptul4").mouseenter(function(){
	$("#deptul3").addClass("ho");
	$("#deptul4").removeClass("ho");
  });
//**************返回顶部**************//
  var $backToTopTxt = "", $backToTopEle = $('<div class="backToTop"></div>').appendTo($("body"))
        .text($backToTopTxt).click(function() {
            $("html, body").animate({ scrollTop: 0 }, 120);
    }), $backToTopFun = function() {
        var st = $(document).scrollTop(), winh = $(window).height();
        (st > 0)? $backToTopEle.fadeIn(): $backToTopEle.fadeOut();    
        //IE6下的定位
        if (!window.XMLHttpRequest) {
            $backToTopEle.css("top", st + winh - 80);    
        }
    };
    $(window).bind("scroll", $backToTopFun);
    $(function() { $backToTopFun(); });	
	$(".backToTop").mouseenter(function(){
	$(".backToTop").css("background-position","-35px 0");
	});
	$(".backToTop").mouseleave(function(){
	$(".backToTop").css("background-position","0 0");
	});
});

//**************滚动图片**************//
$(function(){
     var len  = $(".num > li").length;
	 var index = 0;
	 var adTimer;
	 $(".num li").mouseover(function(){
		index  =   $(".num li").index(this);
		showImg(index);
	 }).eq(0).mouseover();	
	 //滑入 停止动画，滑出开始动画.
	 $('.ad').hover(function(){
			 clearInterval(adTimer);
		 },function(){
			 adTimer = setInterval(function(){
			    showImg(index)
				index++;
				if(index==len){index=0;}
			  } , 5000);
	 }).trigger("mouseleave");
})
// 通过控制top ，来显示不同的幻灯片
function showImg(index){
        var adWidth = $(".slie .ad").width();
var lilen=$(".slider li").length;
var sliderlen=$(".slie .ad").width()*lilen;
$(".slider").width(sliderlen);
$(".slider").stop(true,false).animate({left : -adWidth*index},500);
		$(".num li").removeClass("on")
			.eq(index).addClass("on");
};
//**************加入收藏**************// 
function AddFavorite(sURL, sTitle){
  try {window.external.addFavorite(sURL, sTitle);}
  catch (e) {
  	try {window.sidebar.addPanel(sTitle, sURL, "");}
    catch (e) {alert("加入收藏失败，请使用Ctrl+D进行添加");}
  }
};