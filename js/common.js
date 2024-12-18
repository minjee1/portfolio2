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
  $("#accordion .accordion-toggle").click(function () {        
    console.log($("+div",this).css('display'));
      if($("+div",this).css('display') === "none"){
        $(".accordion_cont").slideUp("slow");
        $("+div", this).slideDown("slow");
      }
  }); 
});

