$(function () {
  $("#accordion .accordion-toggle").click(function () {        
    console.log($("+div",this).css('display'));
      if($("+div",this).css('display') === "none"){
        $(".accordion_cont").slideUp("slow");
        $("+div", this).slideDown("slow");
      }
  });
});

$(function () {
  $(".account .accordion-toggle_01").click(function () {        
    console.log($("+div",this).css('display'));
      if($("+div",this).css('display') === "none"){
        $(".accordion_cont_01").slideUp("slow");
        $("+div", this).slideDown("slow");
      }
  });
});

$(function () {
  $(".right_gnb .language").click(function () {
    if($("+ul",this).css('display') === "none"){
      $(".sublanguage li").addClass('display:block;')
    }
  });
});

