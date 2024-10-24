$(function(){
  $("h1").hover(function(){
  $(this).animate({
    "font-size":"3em"
  },500);
},
function(){
  $(this).animate({
    "font-size":"2.5em"
  },500);
}
);

$(".submit").click(function(){
  var option=$("#select").val();
  $(".active").removeClass("active");
  $(".ecology").eq(option).addClass("active")

});

$(".formsubmit").click(function(){
  var name=$(".namefield").val();
  var advise=$(".advisearea").val();
  $(".active").remove("active");
 if(advise==''||name==''){
   $(".error").text("空白です。入力おねがいね");
 } else{
   $(".name").text(name+"さん");
   $(".advise").text("advise"+advise);
   $(".message").addClass("active");
   $(".namefield").val('');
   $(".advisearea").val('');
 }
});

$(".home").click(function(){
    $("html,body").animate({
      scrollTop:0
  },500)
});
});




