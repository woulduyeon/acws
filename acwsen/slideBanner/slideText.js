//*************************유의사항**************************//
// 1. "" 큰따옴표 사용불가(작은 따옴표''는 가능)
// 2. 줄바꿈 불가

// 슬라이드 시작
// 첫번째 슬라이드
$(document).ready(function () {
  // 날짜1
  $("#slideDate1").text(""),
    // 제목1
    $("#slideTitle1").text("Race and Gender"),
    // 요약1
    $("#slideSum1").text(
      `Actively promotes and develops feminist knowledge based on the postcolonial epistemology with an interdisciplinary approach; and critically analyzes the globally intersectional dynamics of gender, sexuality, race, class, nationality, ethnicity, and so on.
      Currently, a project 'Race and Gender: Global Korea, Neo-Racialization and Intersectionality' is being carried out.`
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
    $("#slideTitle2").text("AWS"),
    //요약2
    $("#slideSum2").text(
      `Nurtures new generations of feminist experts and activists to engage in research on Women’s Studies in Asia while running the Asian Women's Studies(AWS) program;
      and leads the exploration of creative pedagogical approaches to teaching feminism among higher education institutions in Asia and across the globe.`
    ),
    //링크2
    $(".link2").attr("href", "https://www.instagram.com/womenpathfinder/"),
    //두번째 슬라이드 끝
    // 세번째 슬라이드
    //날짜3
    $("#slideDate3").text(""),
    //제목3
    $("#slideTitle3").text("AJWS"),
    // 요약3
    $("#slideSum3").text(
      "Publishes the Asian Journal of Women’s Studies(AJWS), a journal in English devoted to critical scholarship across contexts and disciplines, and in doing so contributes to building multi-vocal feminist knowledge about Asia; and publishes books so that research knowledge can reach the public and information can be circulated."
    ),
    //링크3
    $(".link3").attr(
      "href",
      "https://cms.ewha.ac.kr/user/indexSub.action?codyMenuSeq=26525355&siteId=acws&menuUIType=top"
    );
  //세번째 슬라이드 끝
});
// 슬라이드 끝
