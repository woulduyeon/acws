//*************************유의사항**************************//
// 1. "" 큰따옴표 사용불가(작은 따옴표''는 가능)
// 2. 줄바꿈 불가

// 슬라이드 시작
// 첫번째 슬라이드
$(document).ready(function () {
  // 날짜1
  $("#slideDate1").text("2022.11.11(금) 10:00~12:00(KST)"),
    // 제목1
    $("#slideTitle1").text("초청 강연: 인종과 젠더"),
    // 요약1
    $("#slideSum1").text(
      "Defining “Mixed Blood”: (Re)making Koreanness at the Crossroads of Race and Gender"
    ),
    // 링크1
    $(".link1").attr(
      "href",
      "http://cms.ewha.ac.kr/user/indexSub.action?codyMenuSeq=59015433&siteId=acws&menuUIType=sub&dum=dum&boardId=59010723&page=1&command=albumView&boardSeq=59297667&chkBoxSeq=&categoryDepth="
    ),
    // 첫번째 슬라이드 끝
    // 두번째 슬라이드
    //날짜2
    $("#slideDate2").text(""),
    //제목2
    $("#slideTitle2").text("'새 장을 열다: 문화 분야 여성 개척자들'카드뉴스"),
    //요약2
    $("#slideSum2").text(
      "문화 분야의 새로운 장을 개척한 근현대 여성 인물을 발굴하고 소개합니다."
    ),
    //링크2
    $(".link2").attr("href", "https://www.instagram.com/womenpathfinder/"),
    //두번째 슬라이드 끝
    // 세번째 슬라이드
    //날짜3
    $("#slideDate3").text(""),
    //제목3
    $("#slideTitle3").text("이화여자대학교 아시아여성학센터 소개"),
    // 요약3
    $("#slideSum3").text(
      "아시아여성학의 비판적인 이론화 작업에 기반한 연구, 교육, 출판, 협력 사업을 진행하고 있습니다."
    ),
    //링크3
    $(".link3").attr(
      "href",
      "https://cms.ewha.ac.kr/user/indexSub.action?codyMenuSeq=26525355&siteId=acws&menuUIType=top"
    );
  //세번째 슬라이드 끝
});
// 슬라이드 끝
