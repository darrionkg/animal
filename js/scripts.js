$(document).ready(function() {
  $("#tiger").click(function() {
    $("#showTiger").show();
    $("#showSloth").hide();
    $("#showPython").hide();

  });
  $("#sloth").click(function() {
    $("#showSloth").show();
    $("#showTiger").hide();
    $("#showPython").hide();
  });
  $("#python").click(function() {
    $("#showPython").show();
    $("#showSloth").hide();
    $("#showTiger").hide();
  });
});
