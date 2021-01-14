$(document).ready(function(){
	var $result_arr = [
		["paper2.jpg", "종이 쓰레기","PAPER ","납작하게 펼쳐서 흩날리지 않도록 묶음 배출하세요."],
		["plastic_1.jpeg","플라스틱 쓰레기","PLASTIC","발로 납작하게 밟아서 배출하세요. \n 투명 페트병은 따로 분리배출하세요. "],
		["can.jpg", "캔 쓰레기","CAN","발로 납작하게 밟아서 배출하세요."],
		["bottle2.jpg","병 쓰레기","GLASS","유리병이 깨지지 않도록 주의하여 배출하세요. \n 소주, 맥주 등은 빈용기보증금 반납하여 보증금을 환급받을 수 있어요!" ],
		["plastic_bag.jpg", "비닐 쓰레기","VINYL","흩날리지 않도록 투명한 봉투에 담아 배출하세요."],
		["stiroform.jpg","스티로폼 쓰레기","STYROFORM","이물질을 모두 제거 후 배출하세요."],  
		["food2.jpg","음식물쓰레기","FOOD WASTE","길이가 큰 덩어리는 잘라서 부피를 줄이고, 물기를 짜서 수분 제거 후 배출하세요."],  
		["waste.jpg","일반쓰레기","WASTE","종량제 봉투에 담아 배출하세요. \n 소각할 수 없는 쓰레기는 특수 종량제 봉투에 담아 배출하세요."]
	];

	$(".q_cont01 button.prev").hide();  //일단 첫번째 양식 중 이전 버튼을 숨긴다.

	/*초기값 세팅 : 지역함수에서 가져올 변수의 초기값 세팅(문자형 데이터)*/
	var $q_01 = "";
	var $q_02 = "";
	var $q_03 = "";
	var $q_04 = "";

	/*변경된 상태(이벤트)를 각 항목마다 value 값을 가져와서 저장*/
	$(".q_cont01 input").change(function(){
		$q_01 = $(this).val();
		console.log($q_01);
	});

	$(".q_cont02 input").change(function(){
		$q_02 = $(this).val();
		console.log($q_02);
	});
		
	$(".q_cont03 input").change(function(){
		$q_03 = $(this).val();
		console.log($q_03);
	});

	$(".q_cont04 input").change(function(){
		$q_04 = $(this).val();
		console.log($q_04);
	});

	/*각 페이지별 버튼을 클릭했을 때 진행 상태에 대한 유무를 판단(is()메서드)*/
	$(".q_cont01 .next").click(function(){
		var $q__chk01 = $(".q_cont01 input").is(":checked");
		if( $q__chk01 == true){
			$(".q_cont01").hide();
			$(".q_cont02").fadeIn();
		}else{
			$(".alert_01").slideDown();
		}
	});

	$(".q_cont02 .next").click(function(){
		var $q__chk02 = $(".q_cont02 input").is(":checked");
		console.log($q__chk02);
		if($q__chk02 == true ){
			$(".q_cont02").hide();
			$(".q_cont03").fadeIn();
		}else{
			$(".alert_02").slideDown();
		}
	});
	$(".q_cont03 .next").click(function(){
		var $q__chk03 = $(".q_cont03 input").is(":checked");

	if($q__chk03 == true ){
		$(".q_cont03").hide();
		$(".q_cont04").fadeIn();
	}else{
		$(".alert_03").slideDown();
	}
	});

	
	$(".q_cont04 .next").click(function(){
		var $q__chk04 = $(".q_cont04 input").is(":checked");

		if($q__chk04 == true){
			$(".q_cont04").hide();
			$(".q_result").fadeIn();
		}else{
			$(".alert_04").slideDown();
		}
		final_result(); 
	});


	$(".q_cont02 .prev").click(function(){
		$(".q_cont02").hide();
		$(".q_cont01").fadeIn();
	});
	$(".q_cont03 .prev").click(function(){
		$(".q_cont03").hide();
		$(".q_cont02").fadeIn();
	});
	$(".q_cont04 .prev").click(function(){
		$(".q_cont04").hide();
		$(".q_cont03").fadeIn();
	});



	/*결과에 대한 함수 호출문 정의*/
	function final_result(){
		// if($q_01=="male" && $q_02=="10" && $q_03=="dry" && $q_04=="skin"){
		// 	$(".q_result img").attr("src", "img/"+$result_arr[0]);
		// 	$(".q_result a").attr("href", $link_arr[0]);
		// }else if($q_01=="male" && $q_02=="10" && $q_03=="dry" && $q_04=="lotion"){
		// 	$(".q_result img").attr("src", "img/"+$result_arr[1]);
		// }else if($q_01=="female" && $q_02=="20" && $q_03=="oil" && $q_04=="lotion"){
		// 	$(".q_result img").attr("src", "img/"+$result_arr[2]);
		// }
		// /*경우의 수에 따라 else if(조건식) 문을 구성하여 추가적으로 작성하면된다.*/

		
		// 종이쓰레기
		if($q_01 =="unpolluted" && $q_02 == "unmixed" && $q_03 =="uncoated" && $q_04 =="paper"){
			$(".q_result img").attr("src", "../img/trashes/"+$result_arr[0][0]);
			$(".q_result h3").text($result_arr[0][1]);
			$(".q_result h4").text($result_arr[0][2]);
			$(".q_result p").text($result_arr[0][3]);
		}else{
			$(".q_result img").attr("src", "../img/trashes/"+$result_arr[7][0]);
			$(".q_result h3").text($result_arr[7][1]);
			$(".q_result h4").text($result_arr[7][2]);
			$(".q_result p").text($result_arr[7][3]);
		} //일반쓰레기
	}


	function footer_control(){ 
        var $win_h = $(window).height();
        var $header_h = $("#header").height();
        var $content_h = $(".q_total").height();
        var $footer_h = $("footer").height();

        if($win_h > $header_h + $content_h + $footer_h){
            $("footer").addClass("sticky");
        }else{
            $("footer").removeClass("sticky");
        }
    }

    footer_control();

    $(window).resize(function(){
        footer_control();
    });

});