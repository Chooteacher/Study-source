const imgArr = [
  "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/925.png",
  "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/902.png",
  "https://s.pstatic.net/static/newsstand/2020/logo/light/0604/422.png",
  "https://s.pstatic.net/static/newsstand/up/2020/0708/nsd94830278.png",
];

for (let i = 0; i < imgArr.length; i++) {
  // li 요소 생성
  const newsList = document.createElement("li");
  // img 요소 생성하고 src 속성 값 세팅
  const newsImg = document.createElement("img");

  // 만든 li요소에 img요소 추가
  newsList.appendChild(newsImg);

  // 만든 뉴스목록 ul태그에 추가
  document.getElementsByClassName("NEWS_STAND")[0].appendChild(newsList);

  newsImg.src = imgArr[i];
}
