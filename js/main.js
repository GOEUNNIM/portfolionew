$(function () {
  AOS.init();


  /* gnb */
  $('#hamburgerBtn').on('click', function () {
    $(this).toggleClass('active');         // 햄버거 → X 모양 전환
    $('#mobileMenu').toggleClass('show');  // 모바일 메뉴 토글
  });


  /* con2 프로필 이미지 확대 */
  window.addEventListener("scroll", () => {
    const profileImg = document.querySelector(".profile_image img");
    const section = document.querySelector("#con2");
    const sectionTop = section.getBoundingClientRect().top;

    // 화면 아래에서 60%쯤 보이기 시작하면 커짐
    if (sectionTop < window.innerHeight * 0.6) {
      profileImg.classList.add("active");
    } else {
      profileImg.classList.remove("active");
    }
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
  function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDeg = (hours + minutes / 60) * 30;     // 360 / 12 = 30도
    const minuteDeg = (minutes + seconds / 60) * 6;  // 360 / 60 = 6도

    const hourEl = document.querySelector('.clock_area .hour');
    const minuteEl = document.querySelector('.clock_area .minute');

    hourEl.style.transform = `translate(-50%, 0) rotate(${hourDeg}deg)`;
    minuteEl.style.transform = `translate(-50%, 0) rotate(${minuteDeg}deg)`;
  }

  setInterval(updateClock, 1000); // 매초 갱신
  updateClock(); // 초기 실행
});