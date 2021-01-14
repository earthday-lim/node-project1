$(document).ready(function(){
    /* fadeInUp 효과 */
    var scrollY = 0; //윈도우 상단좌표값
    var timer = 0; //한번만 실행시키기 위한 변수

    $(window).on("scroll", function () {
        clearTimeout(timer);

        timer = setTimeout(function () {
            scrollY = $(this).scrollTop();
            console.log(scrollY);

            $(".fade").each(function () {
                if (scrollY > $(this).offset().top - 600) $(this).stop().animate({opacity: 1, top: 0});
                //else $(this).stop().animate({opacity: 0, top: 40});
            });
        }, 100);
    });

    /* 종이 - 아니에요 */
    var $infraEle = $(".infra_list li");
	$infraEle.attr('tabindex', 0);

	//li에 포커스가 가거나 마우스가 진입할 경우 클래스 추가, 포커스와 마우스가 나가면 처음으로 되돌리기
	$infraEle.on({
		'focusin mouseenter' : function () {
			$(this).addClass("on");
		},
		'focusout mouseleave' : function () {
			$(this).removeClass("on");
		}		
    });
    
});

/* indicator 메뉴 슬라이딩 */
var $menu=$("#indicator ul li");
var $cnt=$("article");
var headHei=$("#header").outerHeight();	
//상단으로 100만큼 추가 여백제공, 만약 $cnt 상단에 header가 fixed 속성으로 고정되어 있지 않다면 불필요
//console.log(headHei);

//첫번째 li.list1에 .on 추가
$menu.eq(0).addClass('on');

//1) click
$menu.children().on("click",function  () {
    //class 제어
    $(this).parent().addClass("on").siblings().removeClass("on");
    //animate
    var tg=$(this).attr("href");
    var posY=$(tg).offset().top-headHei-115;
    console.log(tg, posY);

    $(window).off("scroll");
    $("html, body").animate({scrollTop:posY}, 400, function  () {
        $(window).on("scroll", scrollMove);
    });
    
    return false;
});

//2) scroll
$(window).on("scroll", scrollMove);

function scrollMove () {
    var scrollY=$(window).scrollTop();
    //console.log(scrollY);

    $cnt.each(function  (idx) {
        if (scrollY>=$(this).offset().top-headHei-115) $menu.eq(idx).addClass("on").siblings().removeClass("on");
        else if (scrollY == $(document).height()-$(window).height()) $menu.eq(-1).addClass("on").siblings().removeClass("on");
    });
}s