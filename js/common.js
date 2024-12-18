$(function () {
    // 실행문
    $("record_:not(:first)").css("display", "none");
    $("accordion accordion-toggle").click(function () {
      if ($("+record_", this).css("display") === "none") {
        $("record_").slideUp("slow");
        $("+record_", this).slideDown("slow");
      }
    }); 
  });