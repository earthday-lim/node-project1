$(document).ready(function(){

    var $arr = ["gallery1","gallery2","gallery3","gallery4","gallery5","gallery7","gallery8","gallery9","gallery10","gallery11","gallery12","gallery13","gallery14","gallery15"]
   

    $(".grid").masonry({
        itemSelector : ".grid_item"  //필수사항이며 그리드를 적용할 대상을 의미
    });

     /* .grid_item each문 */
    $(".grid_item").each(function(index){
        $(this).css("background-image","url(gallery/"+$arr[index]+".jpg)");
       
    });

    /* .grid_item 클릭했을 때 */
    $(".grid_item").click(function(){
        var $index = $(this).index();  //배열 데이터와 연동하여 적용시키키 위함
        $(".popup_img").css("background-image","url(gallery/"+$arr[$index]+".jpg)");
        $(".dark").addClass("active");
        $(".popup").addClass("active");
    });

    $(".close, .dark").click(function(){
        $(".dark").removeClass("active");
        $(".popup").removeClass("active");
    });
});