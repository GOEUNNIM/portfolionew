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



  /* section__4 시계 */
  const section__4_tl = gsap.timeline();
  section__4_tl
    .to('.section__4', {
      duration: 1, opacity: 1, stagger: { each: 0.15 },
      onComplete() {
        gsap.to('.clock-area .hour', { duration: 1.3, rotate: '45deg' },)
        gsap.to('.clock-area .minute', { duration: 1.3, rotate: '300deg' }, '<')
      },
    })
    .to('.section__4 .section__4_bg', { duration: 3, scale: 1 })

  ScrollTrigger.create({
    trigger: '.section__4',
    start: 'top center',
    end: 'center center',
    animation: section__4_tl,
  })

  function initSwipers() {
    $('.section__4 .swiper-container').mouseenter(function () {
      $('#cursor').addClass('pointer')
    })

    $('.section__4 .swiper-container').mouseleave(function () {
      $('#cursor').removeClass('pointer')
    })

    var sec01Swiper = new Swiper('.section__4 .slide-bx01 .swiper-container', {
      loop: true,
      observer: true,
      observeParents: true,
      resizeObserver: true,
      speed: 800,
      effect: 'fade',
      // freeMode: true,
      // watchSlidesProgress: true,
      fadeEffect: {
        crossFade: true,
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      // autoHeight: true,
      pagination: {
        el: '.section__4 .slide-bx01 .swiper-pagination',
        type: "fraction",
        renderFraction: function (currentClass, totalClass) {
          return '<div class="flexDiv"><span class="' + currentClass + '"></span>' + '<div class="line">/</div>' + '<span class="' + totalClass + '"></span><div>';
        },
      },
      navigation: {
        nextEl: '.section__4 .slide-bx01 .swiper-button-next',
        prevEl: '.section__4 .slide-bx01 .swiper-button-prev',
      },
      on: {
        init: function () {

        },
        realIndexChange: function () {
          if (this.realIndex === 0) {
            gsap.to('.clock-area .hour', { duration: 1, rotate: '45deg' })
            gsap.to('.clock-area .minute', { duration: 1, delay: 0.2, rotate: '450deg' })
            // gsap.to('.clock-area .minute', {rotate:'450deg'})
            // gsap.to('.clock-area .hour', {delay:0.2, rotate:'45deg'})

          } else if (this.realIndex === 1) {
            gsap.to('.clock-area .minute', { duration: 1, rotate: '540deg' })
            gsap.to('.clock-area .hour', { duration: 1, delay: 0.2, rotate: '90deg' })

          } else if (this.realIndex === 2) {
            gsap.to('.clock-area .minute', { duration: 1, rotate: '630deg' })
            gsap.to('.clock-area .hour', { duration: 1, delay: 0.2, rotate: '135deg' })

          } else if (this.realIndex === 3) {
            gsap.to('.clock-area .minute', { duration: 1, rotate: '720deg' })
            gsap.to('.clock-area .hour', { duration: 1, delay: 0.2, rotate: '180deg' })
          }
        }
      },
    });

    var sec01Swiper02 = new Swiper('.section__4 .slide-bx02 .swiper-container', {
      loop: true,
      observer: true,
      observeParents: true,
      resizeObserver: true,
      speed: 800,
      touchRatio: 0,
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      // autoplay: {
      //     delay: 5000,
      //     disableOnInteraction: false,
      // },
    });

    sec01Swiper02.controller.control = sec01Swiper;
    sec01Swiper.controller.control = sec01Swiper02;
  }

  // Call the swiper initialization function
  initSwipers();
});
