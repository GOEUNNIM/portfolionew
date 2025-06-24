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
  document.addEventListener("DOMContentLoaded", () => {
    const svgs = document.querySelectorAll(".circle_text svg");
    const text = document.getElementById("circleText");
    const con2 = document.getElementById("con2");

    // 초기 진입 애니메이션
    svgs.forEach((svg) => {
      const randomDeg = (Math.random() - 0.5) * 60; // -30~+30도 회전
      const randomScale = 0.8 + Math.random() * 0.4; // 0.8~1.2배 확대

      svg.classList.add("initial-animate");
      svg.style.transform = `rotate(${randomDeg}deg) scale(${randomScale})`;

      void svg.offsetWidth;

      requestAnimationFrame(() => {
        svg.classList.add("animate-in");
      });

      setTimeout(() => {
        svg.classList.remove("initial-animate", "animate-in");
      }, 1400);
    });

    // 스크롤에 따른 회전/스케일 + 텍스트 투명도
    window.addEventListener("scroll", () => {
      const svgs = document.querySelectorAll(".circle_text svg");
      const text = document.getElementById("circleText");
      const con2 = document.getElementById("con2");

      if (!svgs.length || !text || !con2) return;

      const scrollY = window.scrollY;
      const rotateDeg = scrollY * 0.2; // px당 0.2도 회전

      console.log("스크롤 회전 각도:", rotateDeg); // ✅ 확인

      svgs.forEach((svg) => {
        svg.style.transform = `translate(-50%, -50%) rotate(${rotateDeg}deg)`;
      });

      text.style.opacity = "1"; // 일단 고정
    });

  });






  /* con3 프로젝트 페이지네이션 */
  const fillLine = document.querySelector(".line_fill");
  const steps = document.querySelectorAll(".steps li");

  // 현재 인덱스 설정 (0부터 시작)
  let currentStep = 0;

  function updatePagination(index) {
    steps.forEach((li, i) => {
      if (i <= index) {
        li.classList.add("active");
      } else {
        li.classList.remove("active");
      }
    });

    // 전체 진행도 비율 계산
    const percent = (index) / (steps.length - 1) * 100;
    fillLine.style.width = `${percent}%`;
  }

  // 예시로 1초마다 한 단계씩 진행
  setInterval(() => {
    currentStep = (currentStep + 1) % steps.length;
    updatePagination(currentStep);
  }, 2000);


  /* con4 시계 */
  function setClock() {
    const now = new Date();
    const hour = now.getHours() % 12;
    const minute = now.getMinutes();

    const hourDeg = (hour + minute / 60) * 30; // 360 / 12
    const minuteDeg = minute * 6; // 360 / 60

    document.getElementById('hourHand').style.transform = `translate(-50%, 0) rotate(${hourDeg}deg)`;
    document.getElementById('minuteHand').style.transform = `translate(-50%, 0) rotate(${minuteDeg}deg)`;
  }

  setClock();
  setInterval(setClock, 1000);
});