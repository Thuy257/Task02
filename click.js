  $(document).ready(function() {
    $('.step').click(function() {
      $('.step').removeClass('active');
      $(this).addClass('active');
    });

    $('.step').first().addClass('active');
    updateButtons();
  });

  function prevStep() {
    var currentStep = $('.step.active').data('step');
    var prevStep = currentStep - 1;
    if (prevStep >= 1) {
      $('.step').removeClass('active');
      $('.step[data-step="' + prevStep + '"]').addClass('active');
      updateButtons();
    }
  }

  function nextStep() {
    var currentStep = $('.step.active').data('step');
    var nextStep = currentStep + 1;
    if (nextStep <= 5) {
      $('.step').removeClass('active');
      $('.step[data-step="' + nextStep + '"]').addClass('active');
      updateButtons();
    }
  }

  function updateButtons() {
    var currentStep = $('.step.active').data('step');
    if (currentStep === 1) {
      $('#prevBtn').prop('disabled', true);
    } else {
      $('#prevBtn').prop('disabled', false);
    }

    if (currentStep === 5) {
      $('#nextBtn').prop('disabled', true);
    } else {
      $('#nextBtn').prop('disabled', false);
    }
  }

  function toggleElements() {
    var elements = document.querySelectorAll('.element > div');
    for (var i = 4; i < elements.length; i++) {
      elements[i].classList.toggle('hidden');
    }
    var button = document.querySelector('.left');
    if (button.textContent === 'Xem thêm') {
      button.textContent = 'Rút gọn';
    } else {
      button.textContent = 'Xem thêm';
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    const btn1 = document.querySelector(".btn-whatcar1");
    const btn2 = document.querySelector(".btn-whatcar2");
    const btn3 = document.querySelector(".btn-whatcar3");
    const btn4 = document.querySelector(".btn-whatcar4");


    const div1 = document.querySelector(".whatcar1 > div");
    const div2 = document.querySelector(".whatcar2 > div");
    const div3 = document.querySelector(".whatcar3 > div");
    const div4 = document.querySelector(".whatcar4 > div");

    btn1.addEventListener("click", function () {
      div1.style.display = "block";
      div2.style.display = "none";
      div3.style.display = "none";
      div4.style.display = "none";
    });

    btn2.addEventListener("click", function () {
      div1.style.display = "none";
      div2.style.display = "block";
      div3.style.display = "none";
      div4.style.display = "none";
    });

    btn3.addEventListener("click", function () {
      div1.style.display = "none";
      div2.style.display = "none";
      div3.style.display = "block";
      div4.style.display = "none";
    });
    btn4.addEventListener("click", function () {
      div1.style.display = "none";
      div2.style.display = "none";
      div3.style.display = "none";
      div4.style.display = "block";
    });
  });