$(function () {
  $("#accordion .accordion-toggle").click(function () {        
      if($("+div",this).css('display') === "none"){
        $(".accordion_cont").slideUp("slow");
        $("+div", this).slideDown("fast");
      }else{
        $(".accordion_cont").slideUp("fast");
      }
  });

  $(".account .accordion-toggle_01").click(function () {        
      if($("+div",this).css('display') === "none"){
        $(".accordion_cont_01").slideUp("slow");
        $("+div", this).slideDown("fast");
      }else{
        $(".accordion_cont_01").slideUp("fast");
      }
  });

  $(".right_gnb .language").click(function () {
    $(this).toggleClass('selected');
  });
});

