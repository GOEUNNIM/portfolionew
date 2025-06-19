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

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;

    const scrollRatio = scrollY / maxScroll;

    const rotateDeg = scrollRatio * 1000; // 회전
    const scale = 0.5 + Math.sin(scrollRatio * Math.PI) * 1; // 중간에 가장 큼
    const opacity = 1 - Math.sin(scrollRatio * Math.PI) * 0.5; // 중간에서 0.5까지 감소

    svg.style.transform = `translate(-50%, -50%) scale(${scale}) rotate(${rotateDeg}deg)`;
    text.style.opacity = opacity;
  });
});