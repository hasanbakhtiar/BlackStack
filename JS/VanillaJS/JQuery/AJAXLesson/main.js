$(function(){
    $("button").click(function(){
    //   $("p").load("data.txt");
    $.get("data.txt", function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
      });
    });
  });
//   https://www.w3schools.com/jquery/jquery_ajax_get_post.asp