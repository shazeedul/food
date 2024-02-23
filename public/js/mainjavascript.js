document.addEventListener("DOMContentLoaded", function () {
  ("use strict");

  //======menu fix js======
  var mainMenu = document.querySelector(".main_menu");
  if (mainMenu) {
    var navoff = mainMenu.offsetTop;
    window.addEventListener("scroll", function () {
      var scrolling = window.scrollY;

      if (scrolling > navoff) {
        mainMenu.classList.add("menu_fix");
      } else {
        mainMenu.classList.remove("menu_fix");
      }
    });
  }

  //=======MENU CART======
  var cartIcon = document.querySelector(".cart_icon");
  var cartArea = document.querySelector(".fp__menu_cart_area");

  if (cartIcon && cartArea) {
    cartIcon.addEventListener("click", function () {
      cartArea.classList.add("show_mini_cart");
    });

    var closeCart = document.querySelector(".close_cart");
    closeCart.addEventListener("click", function () {
      cartArea.classList.remove("show_mini_cart");
    });
  }

  //=======MENU SEARCH======
  var menuSearch = document.querySelector(".menu_search");
  var searchForm = document.querySelector(".fp__search_form");

  if (menuSearch && searchForm) {
    menuSearch.addEventListener("click", function () {
      searchForm.classList.add("show");
    });

    var closeSearch = document.querySelector(".close_search");
    closeSearch.addEventListener("click", function () {
      searchForm.classList.remove("show");
    });
  }

  //=========NICE SELECT=========
  var selectElements = document.querySelectorAll(".nice-select");

  selectElements.forEach(function (element) {
    new NiceSelect(element);
  });

  //=======BANNER SLIDER======
  $(".banner_slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    dots: true,
    arrows: false,
  });

  //=======OFFER ITEM SLIDER======
  $(".offer_item_slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    arrows: false,
    // nextArrow: '<i class="far fa-long-arrow-right nextArrow"></i>',
    // prevArrow: '<i class="far fa-long-arrow-left prevArrow"></i>',

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  //*==========ISOTOPE==============
  var $grid = document.querySelectorAll(".grid").isotope({});

  document.querySelectorAll(".menu_filter").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({
      filter: filterValue,
    });
  });

  //active class
  document
    .querySelectorAll(".menu_filter button")
    .on("click", function (event) {
      $(this).siblings(".active").removeClass("active");
      $(this).addClass("active");
      event.preventDefault();
    });

  //*=======simplyCountdown========
  var d = new Date(),
    countUpDate = new Date();
  d.setDate(d.getDate() + 365);

  // default example
  simplyCountdown(".simply-countdown-one", {
    year: d.getFullYear(),
    month: d.getMonth() + 1,
    day: d.getDate(),
    enableUtc: true,
  });

  //=======TEAM SLIDER======
  document.querySelectorAll(".team_slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    arrows: false,

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  //=======ADD SLIDER======
  document.querySelectorAll(".add_slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    arrows: true,
    nextArrow: '<i class="far fa-long-arrow-right nextArrow"></i>',
    prevArrow: '<i class="far fa-long-arrow-left prevArrow"></i>',

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  //=========COUNTER JS=========
  document.querySelectorAll(".counter").countUp();

  //=======OFFER ITEM SLIDER======
  document.querySelectorAll(".testi_slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    dots: true,
    arrows: false,

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  //=======BRAND SLIDER======
  document.querySelectorAll(".brand_slider").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  //=======SCROLL BUTTON=======
  var scrollButtons = document.querySelectorAll(".fp__scroll_btn");
  scrollButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  });

  window.addEventListener("scroll", function () {
    var scrolling = window.scrollY;
    scrollButtons.forEach(function (button) {
      if (scrolling > 300) {
        button.style.display = "block";
      } else {
        button.style.display = "none";
      }
    });
  });

  //======= VENOBOX.JS.=========
  document.querySelectorAll(".venobox").venobox();

  //*========STICKY SIDEBAR=======
  document.getElementById("sticky_sidebar").stickit({
    top: 10,
  });

  //=======OFFER ITEM SLIDER======
  documnet.querySelectorAll(".blog_det_slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    arrows: false,

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  //=======OFFER ITEM SLIDER======
  documnet.querySelectorAll(".related_product_slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    arrows: true,
    nextArrow: '<i class="far fa-long-arrow-right nextArrow"></i>',
    prevArrow: '<i class="far fa-long-arrow-left prevArrow"></i>',

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  //*==========wow js==========
  new WOW().init();

  //========== PERSONAL INFO ==========
  var dashInfoBtn = document.querySelector(".dash_info_btn");
  var dashPersonalInfo = document.querySelector(".fp_dash_personal_info");

  if (dashInfoBtn && dashPersonalInfo) {
    dashInfoBtn.addEventListener("click", function () {
      dashPersonalInfo.classList.toggle("show");
    });
  }

  //========== ORDER HISTORY ==========
  var viewInvoice = document.querySelectorAll(".view_invoice");
  var dashboardOrder = document.querySelector(".fp_dashboard_order");
  var fpInvoice = document.querySelector(".fp__invoice");
  var goBack = document.querySelectorAll(".go_back");

  viewInvoice.forEach(function (button) {
    button.addEventListener("click", function () {
      dashboardOrder.style.display = "none";
      fpInvoice.style.display = "block";
    });
  });

  goBack.forEach(function (button) {
    button.addEventListener("click", function () {
      dashboardOrder.style.display = "block";
      fpInvoice.style.display = "none";
    });
  });

  //========== DASHBOARD ADDRESS ==========
  var dashAddNewAddress = document.querySelector(".dash_add_new_address");
  var addressBody = document.querySelector(".address_body");
  var cancelNewAddress = document.querySelector(".cancel_new_address");
  var dashEditBtn = document.querySelector(".dash_edit_btn");
  var cancelEditAddress = document.querySelector(".cancel_edit_address");

  if (
    dashAddNewAddress &&
    addressBody &&
    cancelNewAddress &&
    dashEditBtn &&
    cancelEditAddress
  ) {
    dashAddNewAddress.addEventListener("click", function () {
      addressBody.classList.add("show_new_address");
    });

    cancelNewAddress.addEventListener("click", function () {
      addressBody.classList.remove("show_new_address");
    });

    dashEditBtn.addEventListener("click", function () {
      addressBody.classList.add("show_edit_address");
    });

    cancelEditAddress.addEventListener("click", function () {
      addressBody.classList.remove("show_edit_address");
    });
  }

  //=======OFFER ITEM SLIDER======
  document.querySelectorAll(".banner2_slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    arrows: true,
    nextArrow: '<i class="far fa-long-arrow-right nextArrow"></i>',
    prevArrow: '<i class="far fa-long-arrow-left prevArrow"></i>',
  });

  //=======TESTIMONIAL 2 SLIDER======
  document.querySelectorAll(".testi_slider2").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    arrows: true,
    nextArrow: '<i class="far fa-long-arrow-right nextArrow"></i>',
    prevArrow: '<i class="far fa-long-arrow-left prevArrow"></i>',

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  //=======PRODUCT DETAILS SLIDER======
  var exzoom = document.getElementById("exzoom");
  if (exzoom !== null) {
    // Initialize exzoom if the element exists
    exzoom.exzoom({
      autoPlay: true,
    });
  }
});
