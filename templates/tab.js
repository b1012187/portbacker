$(function(){

/*タブの移動*/
  $("#move_tab").css("float", "right");
/*-----------------------Top-------------------------*/
 /*最初のタブの背景色*/
$("#Top").css("backgroundColor","#dcdcdc");
$("#Portfolio").css("backgroundColor","#666");
$("#Artifact").css("backgroundColor","#666"); 
$("#Goal").css("backgroundColor","#666");

/*タブの文字の色*/
$("#topcolor").css("color", "#666");
$("#portcolor").css("color", "#fff");
$("#artcolor").css("color", "#fff");
$("#goalcolor").css("color", "#fff");

/*mouseover*/
  /*ポートフォリオ*/
  $("li#Portfolio").mouseover(function(){
    $("#Portfolio").css("backgroundColor","#dcdcdc");
    $("#portcolor").css("color", "#666");
  });
  $("li#Portfolio").mouseout(function(){
    $("#Portfolio").css("backgroundColor","#666");
    $("#portcolor").css("color", "#fff");
  });

  /*成果物管理*/
  $("li#Artifact").mouseover(function(){
    $("#Artifact").css("backgroundColor","#dcdcdc");
    $("#artcolor").css("color", "#666");
  });
  $("li#Artifact").mouseout(function(){
    $("#Artifact").css("backgroundColor","#666");
    $("#artcolor").css("color", "#fff");
  });

  /*ゴール*/
  $("li#Goal").mouseover(function(){
    $("#Goal").css("backgroundColor","#dcdcdc");
    $("#goalcolor").css("color", "#666");
  });
  $("li#Goal").mouseout(function(){
    $("#Goal").css("backgroundColor","#666");
    $("#goalcolor").css("color", "#fff");
  });
/*---------------------Portfolio------------------------*/

$(function(){ 
/*最初のタブの背景色*/
$("#Top").css("backgroundColor","#666");
$("#Portfolio").css("backgroundColor","#dcdcdc");
$("#Artifact").css("backgroundColor","#666"); 
$("#Goal").css("backgroundColor","#666");

/*タブの移動*/
$("#move_tab").css("float", "right");

/*タブの文字の色*/
$("#topcolor").css("color", "#fff");
$("#portcolor").css("color", "#666");
$("#artcolor").css("color", "#fff");
$("#goalcolor").css("color", "#fff");

/*mouseover*/
  /*トップ*/
  $("#Portfolio").click(
  $("li#Top").mouseover(function(){
    $("#Top").css("backgroundColor","#dcdcdc");
    $("#topcolor").css("color", "#666");
  });
  $("li#Top").mouseout(function(){
    $("#Top").css("backgroundColor","#666");
    $("#topcolor").css("color", "#fff");
  });

  /*成果物管理*/
  $("li#Artifact").mouseover(function(){
    $("#Artifact").css("backgroundColor","#dcdcdc");
    $("#artcolor").css("color", "#666");
  });
  $("li#Artifact").mouseout(function(){
    $("#Artifact").css("backgroundColor","#666");
    $("#artcolor").css("color", "#fff");
  });

  /*ゴール*/
  $("li#Goal").mouseover(function(){
    $("#Goal").css("backgroundColor","#dcdcdc");
    $("#goalcolor").css("color", "#666");
  });
  $("li#Goal").mouseout(function(){
    $("#Goal").css("backgroundColor","#666");
    $("#goalcolor").css("color", "#fff");
  });


});

/*------------------------Goal-------------------------*/


$(function(){
  
 /*最初のタブの背景色*/
$("#Top").css("backgroundColor","#666");
$("#Portfolio").css("backgroundColor","#666");
$("#Artifact").css("backgroundColor","#666"); 
$("#Goal").css("backgroundColor","#dcdcdc");

/*タブの移動*/
$("#move_tab").css("float", "right");

/*タブの文字の色*/
$("#topcolor").css("color", "#fff");
$("#portcolor").css("color", "#fff");
$("#artcolor").css("color", "#fff");
$("#goalcolor").css("color", "#666");

/*mouseover*/
  /*トップ*/
  $("li#Top").mouseover(function(){
    $("#Top").css("backgroundColor","#dcdcdc");
    $("#topcolor").css("color", "#666");
  });
  $("li#Top").mouseout(function(){
    $("#Top").css("backgroundColor","#666");
    $("#topcolor").css("color", "#fff");
  });

  /*ポートフォリオ*/
  $("li#Portfolio").mouseover(function(){
    $("#Portfolio").css("backgroundColor","#dcdcdc");
    $("#portcolor").css("color", "#666");
  });
  $("li#Portfolio").mouseout(function(){
    $("#Portfolio").css("backgroundColor","#666");
    $("#portcolor").css("color", "#fff");
  });

  /*成果物管理*/
  $("li#Artifact").mouseover(function(){
    $("#Artifact").css("backgroundColor","#dcdcdc");
    $("#artcolor").css("color", "#666");
  });
  $("li#Artifact").mouseout(function(){
    $("#Artifact").css("backgroundColor","#666");
    $("#artcolor").css("color", "#fff");
  });
});

/*--------------------------Artifact---------------------------*/
$(function(){
var TabColors = ["#666","#dcdcdc","#fff"];
/*最初のタブの背景色*/
$("#Top").css("backgroundColor",TabColors[0]);
$("#Portfolio").css("backgroundColor",TabColors[0]);
$("#Artifact").css("backgroundColor",TabColors[1]); 
$("#Goal").css("backgroundColor",TabColors[0]);

/*タブの移動*/
$("#move_tab").css("float", "right");

/*タブの文字の色*/
$("#topcolor").css("color", TabColors[2]);
$("#portcolor").css("color", TabColors[2]);
$("#artcolor").css("color", TabColors[0]);
$("#goalcolor").css("color", TabColors[2]);

/*mouseover*/
  /*トップ*/
  $("li#Top").mouseover(function(){
    $("#Top").css("backgroundColor",TabColors[1]);
    $("#topcolor").css("color", TabColors[0]);
  });
  $("li#Top").mouseout(function(){
    $("#Top").css("backgroundColor",TabColors[0]);
    $("#topcolor").css("color", TabColors[2]);
  });

  /*成果物管理*/
  $("li#Portfolio").mouseover(function(){
    $("#Portfolio").css("backgroundColor",TabColors[1]);
    $("#portcolor").css("color", TabColors[0]);
  });
  $("li#Portfolio").mouseout(function(){
    $("#Portfolio").css("backgroundColor",TabColors[0]);
    $("#portcolor").css("color", TabColors[2]);
  });

  /*ゴール*/
  $("li#Goal").mouseover(function(){
    $("#Goal").css("backgroundColor",TabColors[1]);
    $("#goalcolor").css("color", TabColors[0]);
  });
  $("li#Goal").mouseout(function(){
    $("#Goal").css("backgroundColor",TabColors[0]);
    $("#goalcolor").css("color", TabColors[2]);
  });


  /*border- riadius*/
  $("#Top").css("border-radius","5px 5px 0px 0px");
  $("#Portfolio").css("border-radius","5px 5px 0px 0px");
  $("#Artifact").css("border-radius","5px 5px 0px 0px");
  $("#Goal").css("border-radius","5px 5px 0px 0px");
 
  /*padding*/
  $("#Top").css("padding","5px");
  $("#Portfolio").css("padding","5px");
  $("#Artifact").css("padding","5px");
  $("#Goal").css("padding","5px");
});
/*-----------------------new----------------------------*/
/*タブの文字の色*/
$("#topcolor").css("color", "#fff");
$("#portcolor").css("color", "#666");
$("#artcolor").css("color", "#fff");
$("#goalcolor").css("color", "#fff");

/*mouseover*/
  /*トップ*/
  $("li#Top").mouseover(function(){
    $("#Top").css("backgroundColor","#fff");
    $("#topcolor").css("color", "#666");
  });
  $("li#Top").mouseout(function(){
    $("#Top").css("backgroundColor","#666");
    $("#topcolor").css("color", "#fff");
  });

  /*成果物管理*/
  $("li#Artifact").mouseover(function(){
    $("#Artifact").css("backgroundColor","#fff");
    $("#artcolor").css("color", "#666");
  });
  $("li#Artifact").mouseout(function(){
    $("#Artifact").css("backgroundColor","#666");
    $("#artcolor").css("color", "#fff");
  });

  /*ゴール*/
  $("li#Goal").mouseover(function(){
    $("#Goal").css("backgroundColor","#fff");
    $("#goalcolor").css("color", "#666");
  });
  $("li#Goal").mouseout(function(){
    $("#Goal").css("backgroundColor","#666");
    $("#goalcolor").css("color", "#fff");
  });
});