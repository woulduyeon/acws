



$(document).ready(function(){

	//////// Top ///////////////////////////////////////////////////////////////////////////
	var lastEvent = null;
	var slide  = "#menuTopUI ul#k2wiz_GNB > li > div";
	var alink  = "#menuTopUI ul#k2wiz_GNB > li > a";
	var alink2  = "#menuTopUI ul#k2wiz_GNB > li > div > ul > li >a.a2";
	var slide2  = "#menuTopUI ul#k2wiz_GNB > li > div > ul > li > div";


	function k2menu(){
		if (this == lastEvent) return false;
		lastEvent = this;
		setTimeout(function() {lastEvent = null}, 200);
		
		
		if ($(this).attr('class') != 'active') {
			$(slide).hide();
			$(this).next(slide).slideDown();
			$(alink).removeClass('active');
			$(this).addClass('active');
		} else if ($(this).next(slide).is(':hidden')) {
			$(slide).hide();
			$(this).next(slide).slideDown();
		} else {
			$(this).next(slide).hide();
		}
		
	}
	
	function k2menu2(){
		if (this == lastEvent) return false;
		lastEvent = this;
		setTimeout(function() {lastEvent = null}, 200);

		if ($(this).attr('class') != 'active') {
			$(slide2).hide();
			$(this).next(slide2).slideDown();
			$(alink2).removeClass('active');
			$(this).addClass('active');
		} else if ($(this).next(slide2).is(':hidden')) {
			$(slide2).hide();
			$(this).next(slide2).slideDown();
		} else {
			$(this).next(slide2).hide();
		}
	}
	
	
	
	$(alink).mouseenter(k2menu).focus(k2menu);
	$(alink2).mouseenter(k2menu2).focus(k2menu2);
	
	
	
	
	
	//*** 선택된 영역 보여주기 **********************************//
	/*
	if($("#selectTopMenuSeq").val() != ""){
		var selectTopMenuSeq = $("#selectTopMenuSeq").val();
		$("#menuTopUI a#k2wiz_GNB_"+selectTopMenuSeq).closest("li").closest("ul").closest("div").closest("li").closest("ul").closest("div").show();		
		$("#menuTopUI a#k2wiz_GNB_"+selectTopMenuSeq).closest("li").closest("ul").closest("div").show();		
	}
	*/
	//*** 선택된 영역 보여주기 **********************************//
	
	
	//////// Sub ///////////////////////////////////////////////////////////////////////////
	var s_lastEvent = null;
	var s_slide  = "#menuSubUI ul#k2wiz_GNB > li > div";
	var s_alink  = "#menuSubUI ul#k2wiz_GNB > li > a";
	var s_alink2  = "#menuSubUI ul#k2wiz_GNB > li > div > ul > li >a";
	var s_slide2  = "#menuSubUI ul#k2wiz_GNB > li > div > ul > li > div";

	function s_k2menu(){
		if ($(this).attr('class') != 'active'&&$(this).next().attr("tagName")!=undefined) {
			if (this == s_lastEvent) return false;
		}
		s_lastEvent = this;
		setTimeout(function() {s_lastEvent = null}, 200);

		if ($(this).attr('class') != 'active') {
			$(s_slide).slideUp();
			$(this).next(s_slide).slideDown();
			$(s_alink).removeClass('active');
			$(this).addClass('active');
		} else if ($(this).next(s_slide).is(':hidden')) {
			$(s_slide).slideUp();
			$(this).next(s_slide).slideDown();
		} else {
			$(this).next(s_slide).slideUp();
		}
	}
	
	function s_k2menu2(){
		if ($(this).attr('class') != 'active'&&$(this).next().attr("tagName")!=undefined) {
			if (this == s_lastEvent) return false;
		}
		s_lastEvent = this;
		setTimeout(function() {s_lastEvent = null}, 200);

		if ($(this).attr('class') != 'active') {
			$(s_slide2).slideUp();
			$(this).next(s_slide2).slideDown();
			$(s_alink2).removeClass('active');
			$(this).addClass('active');
		} else if ($(this).next(s_slide2).is(':hidden')) {
			$(s_slide2).slideUp();
			$(this).next(s_slide2).slideDown();
		} else {
			$(this).next(s_slide2).slideUp();
		}
	}
	
	
	$(s_alink).click(s_k2menu).focus(s_k2menu);
	$(s_alink2).click(s_k2menu2).focus(s_k2menu2);
	
	
	
	//*** 선택된 영역 보여주기 **********************************//
	/*
	if($("#selectSubMenuSeq").val() != ""){
		var selectSubMenuSeq = $("#selectSubMenuSeq").val();
		$("#menuSubUI a#k2wiz_GNB_"+selectSubMenuSeq).closest("li").closest("ul").closest("div").closest("li").closest("ul").closest("div").show();		
		$("#menuSubUI a#k2wiz_GNB_"+selectSubMenuSeq).closest("li").closest("ul").closest("div").show();
		$("#menuSubUI div#div_"+selectSubMenuSeq).show();		

	}
	*/
	//*** 선택된 영역 보여주기 **********************************//
	
	//*** 선택된 영역 보여주기 **********************************//
	/*
	if($("#selectSubMenuParentSeq").val() != ""){
		var selectSubMenuParentSeq = $("#selectSubMenuParentSeq").val();
        $("#menuSubUI a#k2wiz_GNB_"+selectSubMenuParentSeq).closest("li").closest("ul").closest("div").closest("li").closest("ul").closest("div").show(); 
        $("#menuSubUI a#k2wiz_GNB_"+selectSubMenuParentSeq).closest("li").closest("ul").closest("div").show();
        $("#menuSubUI div#div_"+selectSubMenuParentSeq).show();

	}
	*/
	//*** 선택된 영역 보여주기 **********************************//
	
	//////// Tab ///////////////////////////////////////////////////////////////////////////
	var t_lastEvent = null;
	var t_slide  = "#menuTabUI ul#k2wiz_GNB > li > div";
	var t_alink  = "#menuTabUI ul#k2wiz_GNB > li > a";
	var t_alink2  = "#menuTabUI ul#k2wiz_GNB > li > div > ul > li >a";
	var t_slide2  = "#menuTabUI ul#k2wiz_GNB > li > div > ul > li > div";

	function t_k2menu(){
		if (this == t_lastEvent) return false;
		t_lastEvent = this;
		setTimeout(function() {t_lastEvent = null}, 200);

		if ($(this).attr('class') != 'active') {
			$(t_slide).slideUp();
			$(this).next(t_slide).slideDown();
			$(t_alink).removeClass('active');
			$(this).addClass('active');
		} else if ($(this).next(t_slide).is(':hidden')) {
			$(t_slide).slideUp();
			$(this).next(t_slide).slideDown();
		} else {
			$(this).next(t_slide).slideUp();
		}
	}
	
	function t_k2menu2(){
		if (this == t_lastEvent) return false;
		t_lastEvent = this;
		setTimeout(function() {t_lastEvent = null}, 200);

		if ($(this).attr('class') != 'active') {
			$(t_slide2).slideUp();
			$(this).next(t_slide2).slideDown();
			$(t_alink2).removeClass('active');
			$(this).addClass('active');
		} else if ($(this).next(t_slide2).is(':hidden')) {
			$(t_slide2).slideUp();
			$(this).next(t_slide2).slideDown();
		} else {
			$(this).next(t_slide2).slideUp();
		}
	}

	
	$(t_alink).click(t_k2menu).focus(t_k2menu);
	$(t_alink2).click(t_k2menu2).focus(t_k2menu2);
	
			
	
	
	//*** 선택된 영역 보여주기 **********************************//
	/*
	if($("#selectTabMenuSeq").val() != ""){
		var selectTabMenuSeq = $("#selectTabMenuSeq").val();
		$("#menuTabUI a#k2wiz_GNB_"+selectTabMenuSeq).closest("li").closest("ul").closest("div").closest("li").closest("ul").closest("div").show();		
		$("#menuTabUI a#k2wiz_GNB_"+selectTabMenuSeq).closest("li").closest("ul").closest("div").show();		
	}
	*/
	//*** 선택된 영역 보여주기 **********************************//

	jf_menuUIOpenInit();
});		




/*신규 메뉴 오픈 스크립트 div3_1.jsp...  에서 스크립트 실행!*/
function jf_menuUIOpenInit(){


 //*** 선택 메뉴 영역 열기(신규 통합) ***********//
 //*** 메뉴 오픈시 하위 메뉴가 있으면 무조건 오픈 **//

var menuDepth = "";
$(".menuDepth").each(function(){
	if( $(this).val() != "" ){
		menuDepth =  $(this).val();
	}
});

 if(menuDepth != null && menuDepth != ""){
  var depth = menuDepth.split("_");
  var d1 = 0;
  var d2 = 0;
  var d3 = 0;
  var d4 = 0;
  var d5 = 0;
  var d6 = 0;
  if(depth != null && depth.length > 0){
   for(var i=0;i<depth.length;i++){
    if(i==0){d1=depth[i];}
    if(i==1){d2=depth[i];}
    if(i==2){d3=depth[i];}
    if(i==3){d4=depth[i];}
    if(i==4){d5=depth[i];}
    if(i==5){d6=depth[i];}
   }
   
   var temp = "";
   if(d1 != 0){
    temp = d1+"_0_0_0_0_0";
    jf_menuUIOpen(temp);
    //jf_menuUIOpenDiv(d1+"_1_0_0_0_0");
   }
   if(d2 != 0){
    temp = d1+"_"+d2+"_0_0_0_0";
    jf_menuUIOpen(temp);
    //jf_menuUIOpenDiv(d1+"_"+d2+"_1_0_0_0");
   }
   if(d3 != 0){
    temp = d1+"_"+d2+"_"+d3+"_0_0_0";
    jf_menuUIOpen(temp);
    //jf_menuUIOpenDiv(d1+"_"+d2+"_"+d3+"_1_0_0");
   }
   if(d4 != 0){
    temp = d1+"_"+d2+"_"+d3+"_"+d4+"_0_0";
    jf_menuUIOpen(temp);
    //jf_menuUIOpenDiv(d1+"_"+d2+"_"+d3+"_"+d4+"_1_0");
   }
   if(d5 != 0){
    temp = d1+"_"+d2+"_"+d3+"_"+d4+"_"+d5+"_0";
    jf_menuUIOpen(temp);
    //jf_menuUIOpenDiv(d1+"_"+d2+"_"+d3+"_"+d4+"_"+d5+"_1");
   }
   if(d6 != 0){
    temp = d1+"_"+d2+"_"+d3+"_"+d4+"_"+d5+"_"+d6;
    jf_menuUIOpen(temp);
   }
  }
 }
  
 //try{ jf_menuHide(); }catch(e){}//코더 요청값
}
function jf_menuUIOpen(temp){

 $(".menu_"+temp).addClass("active");
 var openDiv = $(".menu_"+temp).closest("li").closest("ul").closest("div");
 $(openDiv).show(); 
 
 
 //내 밑에 메뉴가 있으면 오픈함..
 $(".menu_"+temp).closest("li").find(" > div").show();
} 



function jf_menuuiPopUp(url,width,height,top,left){
	 window.open(url,"menuUIPopup","width="+width+",height="+height+",toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,left="+left+",top="+top);
	 return false;
}
