// 요소 획득
// id가 checkDateBtn인 요소를 가져온다 ("오늘의 날짜" 라는 버튼)
const checkDateBtn = document.getElementById("checkDateBtn"); // <button> 요소
// id가 showDate 요소를 가져온다 (날짜 텍스트를 보여줄 p태그)
const showDate = document.getElementById("showDate"); //<p>요소

//checkDateBtn 클릭 감지(listen)
checkDateBtn.addEventListener("click", function () {
  alert(new Date());
  // showDate 요소의 내용 -> 현재 날짜 출력
  // innerText -> element안의 text 값만 가져옴
  showDate.innerText = new Date();
});
