$(function () {
  AOS.init();


  /* gnb */
  $('#hamburgerBtn').on('click', function () {
    $(this).toggleClass('active');         // 햄버거 → X 모양 전환
    $('#mobileMenu').toggleClass('show');  // 모바일 메뉴 토글
  });


  /* main_visual 회전 글씨 */
  /*   const svg = document.querySelector("svg");
    const text = document.getElementById("circleText");
  
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
  
      const scrollRatio = scrollY / maxScroll;
  
      const rotateDeg = scrollRatio * 120; // 회전
      const scale = 0.5 + Math.sin(scrollRatio * Math.PI) * 1; // 중간에 가장 큼
      const opacity = 1 - Math.sin(scrollRatio * Math.PI) * 0.5; // 중간에서 0.5까지 감소
  
      svg.style.transform = `translate(-50%, -50%) scale(${scale}) rotate(${rotateDeg}deg)`;
      text.style.opacity = opacity;
    }); */
  /* main_visual 회전 글씨 */
  const svg = document.querySelector("svg");
  const text = document.getElementById("circleText");
  const con2 = document.getElementById("con2");

  // 요소가 존재할 때만 실행
  if (!svg || !text || !con2) {
    console.warn("svg 또는 text 또는 con2 요소가 존재하지 않습니다.");
    return;
  }

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollRatio = scrollY / maxScroll;

    const rotateDeg = scrollRatio * 120;
    const scale = 0.5 + Math.sin(scrollRatio * Math.PI) * 1;

    let opacity = 1 - Math.sin(scrollRatio * Math.PI) * 0.5;

    const con2Rect = con2.getBoundingClientRect();
    const con2Mid = con2Rect.top + con2Rect.height / 2;
    const windowMid = window.innerHeight / 2;
    const distance = Math.abs(con2Mid - windowMid);
    const fadeRange = 400;

    if (distance < fadeRange) {
      const fadeOpacity = distance / fadeRange;
      opacity = Math.min(opacity, fadeOpacity);
    }

    svg.style.transform = `translate(-50%, -50%) scale(${scale}) rotate(${rotateDeg}deg)`;
    text.style.opacity = opacity;
  });
});