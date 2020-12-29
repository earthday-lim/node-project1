$(document).ready(function(){
	var $result_arr = [
		["img_1.PNG", "논리적인 사색가","INTP-A / INTp-T","끊임없이 새로운 지식에 목말라 하는 혁신가형."],
		["img_3.PNG","용의주도한 전략가","INTJ-A / INTJ-T","풍부하며 철두철미한 계획을 세우는 전략가형."],
		["img_5.PNG", "자유로운 영혼의 연예인","ESFP-A / ESFP-T","인생이 지루할 새가 없을 정도로 즉흥적이며 열정과 에너지가 넘치는 연예인형"],
		["img_7.PNG","사교적인 외교관","ESFJ-A / ESFJ-T","세심한 관심과 사교적인 성향으로 사람들 내에서 인기가 많으며 타인을 돕는데 열성적인 세심형" ],
		["img_9.PNG", "민능 재주꾼","ISTP-A / ISTP-T","대담하고 현실적인 성향으로 다향한 도구 사용에 능숙한 탐험형."],
		["img_11.PNG","호기심 많은 예술가","ISFP-A / ISFP-T","항시 새로운 것을 찾아 시도하거나 도전할 준비가 되어 있는 융통성 있는 성격의 매력 넘치는 예술가형"],  
		["img_13.PNG","재기발랄한 활동가","ENFP-A / ENFP-T","창의적이며 항상 웃을 거리를 찾아다니는 활발한 성격으로 사람들과 자유롭게 어울리기를 좋아하는 넘치는 열정의 소유자."],  
		["img_15.PNG","모험을 즐기는 사업가","ESTP-A / ESTP-T","벼랑 끝의 아슬아슬한 삶을 진정으로 즐길 줄 아는 이들로 명석한 두뇌와 에너지, 그리고 뛰어난 직관력을 가지고 있는 유형."]
	];
	// var $link_arr = ['"class.php?filter=1"', '"class.php?filter=2"',"class.php?filter=3","class.php?filter=4","class.php?filter=5","class.php?filter=6","class.php?filter=7","class.php?filter=8","class.php?filter=9","class.php?filter=10","class.php?filter=11","class.php?filter=12",,"class.php?filter=13","class.php?filter=14","class.php?filter=15","class.php?filter=16"]

	var $link_arr = [];

	for(var i=1;i<=$result_arr.length*2;i++){
		$link_arr[i-1]= 'class.php?filter=' +i
	}

	console.log($link_arr);




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

		
		// 활동적인 성격
		if($q_01 =="activity" && $q_02 == "alone" && $q_03 =="creative" && $q_04 =="long"){
			$(".q_result img").attr("src", "img/"+$result_arr[0][0]);
			$(".q_result h3").text($result_arr[0][1]);
			$(".q_result h4").text($result_arr[0][2]);
			$(".q_result p").text($result_arr[0][3]);
			$(".q_result a").attr("href", $link_arr[0]); //$link_arr[0]
		}else if($q_01 =="activity" && $q_02 =="alone" && $q_03 == "creative" && $q_04 == "short"){
			$(".q_result img").attr("src", "img/"+$result_arr[0][0]);
			$(".q_result h3").text($result_arr[0][1]);
			$(".q_result h4").text($result_arr[0][2]);
			$(".q_result p").text($result_arr[0][3]);
			$(".q_result a").attr("href", $link_arr[1]);
		} //혼자 + 창의적
		
		else if($q_01 == "activity" && $q_02 =="alone" && $q_03 == "reality" && $q_04 =="long"){
			$(".q_result img").attr("src", "img/"+$result_arr[1][0]);
			$(".q_result h3").text($result_arr[1][1]);
			$(".q_result h4").text($result_arr[1][2]);
			$(".q_result p").text($result_arr[1][3]);
			$(".q_result a").attr("href", $link_arr[2]);
		}else if($q_01 =="activity" && $q_02 =="alone" && $q_03 == "reality" && $q_04 == "short"){
			$(".q_result img").attr("src", "img/"+$result_arr[1][0]);
			$(".q_result h3").text($result_arr[1][1]);
			$(".q_result h4").text($result_arr[1][2]);
			$(".q_result p").text($result_arr[1][3]);
			$(".q_result a").attr("href", $link_arr[3]);
		}//혼자 + 현실적
		
		else if($q_01 =="activity" && $q_02 == "together" && $q_03 =="creative" && $q_04 =="long"){
			$(".q_result img").attr("src", "img/"+$result_arr[2][0]);
			$(".q_result h3").text($result_arr[2][1]);
			$(".q_result h4").text($result_arr[2][2]);
			$(".q_result p").text($result_arr[2][3]);
			$(".q_result a").attr("href", $link_arr[4]);
		}else if($q_01 =="activity" && $q_02 == "together" && $q_03 =="creative" && $q_04 =="short"){
			$(".q_result img").attr("src", "img/"+$result_arr[2][0]);
			$(".q_result h3").text($result_arr[2][1]);
			$(".q_result h4").text($result_arr[2][2]);
			$(".q_result p").text($result_arr[2][3]);
			$(".q_result a").attr("href", $link_arr[5]);
		} //함께 + 창의적
		
		else if($q_01 =="activity" && $q_02 == "together" && $q_03 =="reality" && $q_04 =="long"){
			$(".q_result img").attr("src", "img/"+$result_arr[3][0]);
			$(".q_result h3").text($result_arr[3][1]);
			$(".q_result h4").text($result_arr[3][2]);
			$(".q_result p").text($result_arr[3][3]);
			$(".q_result a").attr("href", $link_arr[6]);
		}else if($q_01 =="activity" && $q_02 == "together" && $q_03 =="reality" && $q_04 =="short"){
			$(".q_result img").attr("src", "img/"+$result_arr[3][0]);
			$(".q_result h3").text($result_arr[3][1]);
			$(".q_result h4").text($result_arr[3][2]);
			$(".q_result p").text($result_arr[3][3]);
			$(".q_result a").attr("href", $link_arr[7]);
		} //함께 + 현실적

		//차분한 성격
		if($q_01 =="quiet" && $q_02 == "alone" && $q_03 =="creative" && $q_04 =="long"){
			$(".q_result img").attr("src", "img/"+$result_arr[4][0]);
			$(".q_result h3").text($result_arr[4][1]);
			$(".q_result h4").text($result_arr[4][2]);
			$(".q_result p").text($result_arr[4][3]);
			$(".q_result a").attr("href", $link_arr[8]);
		}else if($q_01 =="quiet" && $q_02 =="alone" && $q_03 == "creative" && $q_04 == "short"){
			$(".q_result img").attr("src", "img/"+$result_arr[4][0]);
			$(".q_result h3").text($result_arr[4][1]);
			$(".q_result h4").text($result_arr[4][2]);
			$(".q_result p").text($result_arr[4][3]);
			$(".q_result a").attr("href", $link_arr[9]);
		} //혼자 + 창의적
		
		else if($q_01 == "quiet" && $q_02 =="alone" && $q_03 == "reality" && $q_04 =="long"){
			$(".q_result img").attr("src", "img/"+$result_arr[5][0]);
			$(".q_result h3").text($result_arr[5][1]);
			$(".q_result h4").text($result_arr[5][2]);
			$(".q_result p").text($result_arr[5][3]);
			$(".q_result a").attr("href", $link_arr[10]);
		}else if($q_01 =="quiet" && $q_02 =="alone" && $q_03 == "reality" && $q_04 == "short"){
			$(".q_result img").attr("src", "img/"+$result_arr[5][0]);
			$(".q_result h3").text($result_arr[5][1]);
			$(".q_result h4").text($result_arr[5][2]);
			$(".q_result p").text($result_arr[5][3]);
			$(".q_result a").attr("href", $link_arr[11]);
		} //혼자 + 현실적
		else if($q_01 =="quiet" && $q_02 == "together" && $q_03 =="creative" && $q_04 =="long"){
			$(".q_result img").attr("src", "img/"+$result_arr[6][0]);
			$(".q_result h3").text($result_arr[6][1]);
			$(".q_result h4").text($result_arr[6][2]);
			$(".q_result p").text($result_arr[6][3]);
			$(".q_result a").attr("href", $link_arr[12]);
		}else if($q_01 =="quiet" && $q_02 == "together" && $q_03 =="creative" && $q_04 =="short"){
			$(".q_result img").attr("src", "img/"+$result_arr[6][0]);
			$(".q_result h3").text($result_arr[6][1]);
			$(".q_result h4").text($result_arr[6][2]);
			$(".q_result p").text($result_arr[6][3]);
			$(".q_result a").attr("href", $link_arr[13]);
		}//함께 + 창의적
		
		else if($q_01 =="quiet" && $q_02 == "together" && $q_03 =="reality" && $q_04 =="long"){
			$(".q_result img").attr("src", "img/"+$result_arr[7][0]);
			$(".q_result h3").text($result_arr[7][1]);
			$(".q_result h4").text($result_arr[7][2]);
			$(".q_result p").text($result_arr[7][3]);
			$(".q_result a").attr("href", $link_arr[14]);
		}else if($q_01 =="quiet" && $q_02 == "together" && $q_03 =="reality" && $q_04 =="short" ){
			$(".q_result img").attr("src", "img/"+$result_arr[7][0]);
			$(".q_result h3").text($result_arr[7][1]);
			$(".q_result h4").text($result_arr[7][2]);
			$(".q_result p").text($result_arr[7][3]);
			$(".q_result a").attr("href", $link_arr[15]);
		}//함께 + 현실적
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