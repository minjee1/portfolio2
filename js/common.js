$(function () {
  $("#accordion .accordion-toggle").click(function () {        
      if($("+div",this).css('display') === "none"){
        $(".accordion_cont").slideUp("slow");
        $("+div", this).slideDown("fast");
      }
  });
});

$(function () {
  $(".account .accordion-toggle_01").click(function () {        
      if($("+div",this).css('display') === "none"){
        $(".accordion_cont_01").slideUp("slow");
        $("+div", this).slideDown("fast");
      }
  });
});

$(function () {
  $(".right_gnb .language").click(function () {
    if($("+ul",this).css('display') === "none"){
      $(".sublanguage li").addClass('')
    }
  });
});

