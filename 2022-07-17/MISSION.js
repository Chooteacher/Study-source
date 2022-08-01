// 텍스트를 추가하는 함수
// 텍스트 입력창의 값을 가져와 텍스트 영역에 추가
function addtext() {
  const text = document.getElementById("text").value;
  const textItem = document.createElement("li");
  textItem.innerText = text;

  document.getElementById("text_list").appendChild(textItem);
}

const addButton = document.getElementById("button");
addButton.addEventListener("click", addtext);
// 버튼 클릭 이벤트리스너
