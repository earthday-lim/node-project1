function onDelete(id) {
	confirm('정말로 삭제하시겠습니까?') ? location.href='/board/delete/'+id : "";
}

function fileRemove(id) {
	if(confirm('첨부파일을 삭제하시겠습니까? 삭제시 영구삭제 됩니다.')) {
		$.get('/board/fileRemove/'+id, function(r) {
			if(r.code == 200){
				$(".file-wrap").remove();
				alert('첨부파일이 삭제되었습니다.');
			}
			else {
				console.log(r.err);
				alert('삭제에 실패하였습니다. 관리자에게 문의하세요');
			}
		});
	}
}

$(document).ready(function(){

	//이차배열패턴 = ["이미지 파일", "타이틀", "텍스트", "가격", "업데이트 날짜", "좋아요 횟수"];
    var $pd_arr = [
        [`${savefile}`, `${title}`, `${content}`, `${writer}`, `${wdate}`, `${id}`]
    ];

    
    var $btn_index;//active를 공통 함수문에 선언해주기 위한(this를 바꿔야 함) 전역변수 어짜피 매 버튼 클릭시 마다 그곳의 인덱스를 받아올 것이므로 값은 없어도 됨 비어있는 변수 선언
    //메모리로 저장 호출 전까진 저장만 돼있는 상태
    function pd_box(){
        //버튼 클릭 시 active부여
        $(".sort_button button").removeClass("active");//모든 버튼으로부터 active 모두 제거
        $(".sort_button button").eq($btn_index).addClass("active");//클릭한 곳에 active 부여
        
        //button 클릭 시 select box 연동
        $(".sort_sel option").prop("selected", false);//모든 옵션에 selected제거
        $(".sort_sel option").eq($btn_index+1).prop("selected", true);//버튼클릭한 곳의 인덱스보다 하나 큰 옵션 인덱스에 selected추가
        //클릭시 셀렉트박스를 바꾸게 하려면 클릭한 곳과 동일한 인덱스의 옵션에 selected를 추가해주면 됨 
        
    };
    pd_box(); //호출 -> 일단 뿌려놓음


    //최신순이라는 버튼을 클릭 시 
    $(".date_sort").click(function(){
        //sort() 메서드 : 순차적으로 나열을 시키는 메서드. 오름차순(작은 숫자부터 올라감)으로 나열
        $pd_arr.sort(function(a,b){
            
            //return b[4] - a[4];//큰 순으로 차례대로 정렬, reverse()하는 것과 같은 효과
            return a[4] - b[4];//작은 순으로 차례대로 정렬 

            //얖옆에 있는 두개(a,b)가 짝이 되어 서로의 크기를 비교해서 작은 숫자부터 나열됨 ab는 계속 바뀌고 1차비교 한바퀴 돌고 다시 2차비교 한바퀴 돌고... 계속 abab...abab비교해서 완성된 순서는 고정
            //[비교하고싶은 인덱스번호]를 적으므로 a의 4번째 인덱스 값과 b의 4번째 인덱스 값을 비교하는 것
        });
        console.log($pd_arr);//날짜가 가장 오래된순으로 정렬, 배열 순서 변경
        $pd_arr.reverse(); //reverse() : 배열을 역순으로 정렬 -> 큰 순으로 차례대로 정렬
        console.log($pd_arr);//날짜가 가장 최신순으로 정렬, 배열 순서 변경

        //조건(최신날짜순)에 맞게 재정렬한 값을 다시 뿌림
        $btn_index = $(this).index();//함수 안에 있는 $btn_index의 값을 현재 인덱스값으로 바꿔준 후 함수 호출
        pd_box();
        /* $(".sort_button button").removeClass("active");
        $(this).addClass("active"); */

    });

    //인기순이라는 버튼 클릭 시
    $(".fav_sort").click(function(){
        $pd_arr.sort(function(a,b){

            return b[5] - a[5]; //좋아요가 많은 순으로 재정렬해야 하므로 reverse값
        });
        console.log($pd_arr);

        //조건(인기순)에 맞게 재정렬한 값을 다시 뿌림
        $btn_index = $(this).index();
        pd_box();
        /* $(".sort_button button").removeClass("active");
        $(this).addClass("active"); */
    });


    $(".sort_sel").change(function(){ //부모를 선택자로 불러와서 그 안에 요소들이 변경될 때마다 function적용
        var $sel_val = $(this).val();
        console.log($sel_val);
        

        if($sel_val == "date"){//최신순
            $pd_arr.sort(function(a,b){
                return b[4] - a[4];
            });
            pd_box();
            
        }else if($sel_val == "fav"){//인기순
            //else로 끝내면 안되는 이유 : 선택했을 때라는 조건이 있을 때 실행해야 하므로 else if를 써줘야 함
            $pd_arr.sort(function(a,b){
                return b[5] - a[5];
            });
            pd_box();
            
        }else{
            $(".sort_button button").removeClass("active");

        }
        //셀렉트 박스가 change될 때마다(=옵션 클릭 시) 버튼과 연동
        $(".sort_button button").removeClass("active");//셀렉트 박스에서 선택을 바꿔서 다른 곳에 active가 들어와 있을 때 모든 active제거 세팅
        $(".sort_button button[class^='"+$sel_val+"']").addClass("active");//value값이 클래스 명에 들어있는 버튼에 active추가
        //다시 버튼 클릭시 셀렉스 박스 연동
        $(".sort_sel option").prop("selected", false);//모든 선택된 옵션 리셋
        $(".sort_sel option[value='"+$sel_val+"']").prop("selected", true);//change가 돌 때마다 바뀐 this의 value를 가진 곳에 selected추가

    });

    var $ea_item = 4;//각 페이지 별로 4개의 item을 보여주겠다 각 페이지 별로 보여주고 싶은 개수
    if($pd_arr.length % $ea_item == 0){//"$pd_arr.length % 4 == 0" = "4의 배수라면" 아래의 for문(li 2개)을 실행
        for(k=0; k < $pd_arr.length/$ea_item; k++){//k=0,1 <- k < $pd_arr.length/4하면 몫이 2이므로
            $(".pager").append("<li>"+(k+1)+"</li>")//k=0,..k=1
        }
    }else{// = if($pd_arr.length % 4 != 0)
        for(k=0; k <= parseInt($pd_arr.length/$ea_item); k++){//"$pd_arr.length % 4 != 0" = "4의 배수가 아니라면" 아래의 for문(li 3개)을 실행   //parseInt() 나머지는 절삭하고 정수값을 받아와 빼도 상관없음
            $(".pager").append("<li>"+(k+1)+"</li>")//k=0,..k=1,..k=2
        }
    }

    $(".pager li").eq(0).addClass("active");
    //$(".pd_box").show(); display: none;한 적이 없으므로 필요없음
    $(".pd_box").eq($ea_item - 1).nextAll().hide();//한 페이지에 4개까지(인덱스 3번까지)만 보여주고 나머진 감춰라

    $(".pager li").click(function(){
        $(".pager li").removeClass("active");
        $(this).addClass("active");
        var $pager_txt = $(this).text();//인덱스 뽑아와서 1더해도 상관없음
        $(".pd_box").show(); //일단 다 보여진 상태해서 선택한 것만 감추는 방식으로 진행
        $(".pd_box").eq($ea_item * ($pager_txt - 1)).prevAll().hide();//인덱스 4번 이전의 모든 상품은 감춰라
        $(".pd_box").eq($ea_item * $pager_txt - 1).nextAll().hide();
    });

});