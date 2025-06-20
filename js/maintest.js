$(function () {
  AOS.init();


  /* gnb */
  $('#hamburgerBtn').on('click', function () {
    $(this).toggleClass('active');         // 햄버거 → X 모양 전환
    $('#mobileMenu').toggleClass('show');  // 모바일 메뉴 토글
  });


  /* main_visual 회전 글씨 */
  const svg = document.querySelector("svg");
  const text = document.getElementById("circleText");
  const con2 = document.getElementById("con2");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollRatio = scrollY / maxScroll;

    const rotateDeg = scrollRatio * 360; // 회전 속도 줄임
  const scale = 0.8 + Math.sin(scrollRatio * Math.PI) * 0.5; // 크기 변화 완만하게
  let opacity = 1 - Math.sin(scrollRatio * Math.PI) * 0.5;

    // #con2의 위치를 계산하여 viewport와 겹치는지 판단
    const con2Rect = con2.getBoundingClientRect();
    const isInView = con2Rect.top < window.innerHeight && con2Rect.bottom > 0;

    if (isInView) {
      opacity = 0; // con2 보이면 투명하게
    }

    svg.style.transform = `translate(-50%, -50%) scale(${scale}) rotate(${rotateDeg}deg)`;
    text.style.opacity = opacity;
  });
});