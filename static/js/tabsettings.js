var set_tab_colors = function(curTabId){
  var tabIds = [ "top", "portfolio", "artifact", "personal", "goal" ];
  tabIds.forEach(function (ti) {
    $('#' + ti).css('backgroundColor', ti == curTabId ? "#dcdcdc" : "#888");
  });


/*タブの移動*/
/*その場しのぎしてます*/
$("#move_tab").css("margin-left", "235px");
$("#move_tab").css("margin-top", "-125px");

/*タブの文字の色*/
tabIds.forEach(function (ti) {
  $('#' + ti + 'color').css("color", ti == curTabId ? "#666" : "#fff");
});

/*mouseover*/
  /*ポートフォリオ*/
 tabIds.forEach(function (ti) {
  $("li#" + ti).mouseover(function(){
    $("#" + ti).css("backgroundColor","#c0c0c0");
    $("#" + ti + "color").css("color", "#666");
  });
  $("li#" + ti).mouseout(function(){
    $("#" + ti).css("backgroundColor","#888");
    $("#" + ti + "color").css("color", "#fff");
  });
 });

  /*border- riadius*/
  $("#top").css("border-radius","5px 5px 0px 0px");
  $("#portfolio").css("border-radius","5px 5px 0px 0px");
  $("#artifact").css("border-radius","5px 5px 0px 0px");
  $("#personal").css("border-radius","5px 5px 0px 0px");
  $("#goal").css("border-radius","5px 5px 0px 0px");
 

  /*padding*/
  $("#top").css("padding","5px");
  $("#portfolio").css("padding","5px");
  $("#artifact").css("padding","5px");
  $("#personal").css("padding","5px");
  $("#goal").css("padding","5px");
};
