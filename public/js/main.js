/** ======menu fix js====== */
var mainMenu = document.querySelector(".main_menu");
if (mainMenu) {
  var navOff = mainMenu.offsetTop;
  window.addEventListener("scroll", function () {
    var scrolling = window.scrollY;

    if (scrolling > navOff) {
      mainMenu.classList.add("menu_fix");
    } else {
      mainMenu.classList.remove("menu_fix");
    }
  });
}

/** =======MENU CART====== */
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
/** =======MENU SEARCH====== */
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
// $("#select_js").niceSelect();
// $("#select_js2").niceSelect();
// $("#select_js3").niceSelect();
// $("#select_js4").niceSelect();

//=======BANNER SLIDER======
// $(".banner_slider").slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 4000,
//   cssEase: "linear",
//   dots: true,
//   arrows: false,
// });

//=======OFFER ITEM SLIDER======
// $(".offer_item_slider").slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 4000,
//   dots: true,
//   arrows: false,
//   // nextArrow: '<i class="far fa-long-arrow-right nextArrow"></i>',
//   // prevArrow: '<i class="far fa-long-arrow-left prevArrow"></i>',

//   responsive: [
//     {
//       breakpoint: 1400,
//       settings: {
//         slidesToShow: 3,
//       },
//     },
//     {
//       breakpoint: 1200,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 992,
//       settings: {
//         slidesToShow: 1,
//       },
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 1,
//       },
//     },
//     {
//       breakpoint: 576,
//       settings: {
//         slidesToShow: 1,
//       },
//     },
//   ],
// });

//*==========ISOTOPE==============
// var $grid = $(".grid").isotope({});

// $(".menu_filter").on("click", "button", function () {
//   var filterValue = $(this).attr("data-filter");
//   $grid.isotope({
//     filter: filterValue,
//   });
// });

// //active class
// $(".menu_filter button").on("click", function (event) {
//   $(this).siblings(".active").removeClass("active");
//   $(this).addClass("active");
//   event.preventDefault();
// });

//=======simplyCountdown========
// var d = new Date(),
//   countUpDate = new Date();
// d.setDate(d.getDate() + 365);

// // default example
// simplyCountdown(".simply-countdown-one", {
//   year: d.getFullYear(),
//   month: d.getMonth() + 1,
//   day: d.getDate(),
//   enableUtc: true,
// });

//=======TEAM SLIDER======
// $(".team_slider").slick({
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 4000,
//   dots: true,
//   arrows: false,

//   responsive: [
//     {
//       breakpoint: 1400,
//       settings: {
//         slidesToShow: 4,
//       },
//     },
//     {
//       breakpoint: 1200,
//       settings: {
//         slidesToShow: 3,
//       },
//     },
//     {
//       breakpoint: 992,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 576,
//       settings: {
//         slidesToShow: 1,
//       },
//     },
//   ],
// });

//=======ADD SLIDER======
// $(".add_slider").slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 4000,
//   dots: false,
//   arrows: true,
//   nextArrow: '<i class="far fa-long-arrow-right nextArrow"></i>',
//   prevArrow: '<i class="far fa-long-arrow-left prevArrow"></i>',

//   responsive: [
//     {
//       breakpoint: 1400,
//       settings: {
//         slidesToShow: 3,
//       },
//     },
//     {
//       breakpoint: 1200,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 992,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 1,
//       },
//     },
//     {
//       breakpoint: 576,
//       settings: {
//         slidesToShow: 1,
//       },
//     },
//   ],
// });

//=========COUNTER JS=========
// $(".counter").countUp();

//=======OFFER ITEM SLIDER======
// $(".testi_slider").slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: false,
//   autoplaySpeed: 4000,
//   dots: true,
//   arrows: false,

//   responsive: [
//     {
//       breakpoint: 1400,
//       settings: {
//         slidesToShow: 3,
//       },
//     },
//     {
//       breakpoint: 1200,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 992,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 1,
//       },
//     },
//     {
//       breakpoint: 576,
//       settings: {
//         slidesToShow: 1,
//       },
//     },
//   ],
// });

//=======BRAND SLIDER======
// $(".brand_slider").slick({
//   slidesToShow: 6,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
//   dots: false,
//   arrows: false,

//   responsive: [
//     {
//       breakpoint: 1400,
//       settings: {
//         slidesToShow: 5,
//       },
//     },
//     {
//       breakpoint: 1200,
//       settings: {
//         slidesToShow: 4,
//       },
//     },
//     {
//       breakpoint: 992,
//       settings: {
//         slidesToShow: 3,
//       },
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 576,
//       settings: {
//         slidesToShow: 1,
//       },
//     },
//   ],
// });

//*========STICKY SIDEBAR=======
// $("#sticky_sidebar").stickit({
//   top: 10,
// });

//=======OFFER ITEM SLIDER======
// $(".blog_det_slider").slick({
//   slidesToShow: 2,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 4000,
//   dots: true,
//   arrows: false,

//   responsive: [
//     {
//       breakpoint: 1400,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 1200,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 992,
//       settings: {
//         slidesToShow: 3,
//       },
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 1,
//       },
//     },
//     {
//       breakpoint: 576,
//       settings: {
//         slidesToShow: 1,
//       },
//     },
//   ],
// });

//=======OFFER ITEM SLIDER======
// $(".related_product_slider").slick({
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 4000,
//   dots: false,
//   arrows: true,
//   nextArrow: '<i class="far fa-long-arrow-right nextArrow"></i>',
//   prevArrow: '<i class="far fa-long-arrow-left prevArrow"></i>',

//   responsive: [
//     {
//       breakpoint: 1400,
//       settings: {
//         slidesToShow: 4,
//       },
//     },
//     {
//       breakpoint: 1200,
//       settings: {
//         slidesToShow: 3,
//       },
//     },
//     {
//       breakpoint: 992,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 576,
//       settings: {
//         slidesToShow: 1,
//       },
//     },
//   ],
// });

//==========PERSONAL INFO==========
//   $(".dash_info_btn").click(function () {
//     $(".fp_dash_personal_info").toggleClass("show");
//   });

//   //==========ORDER HISTORY==========
//   $(".view_invoice").on("click", function () {
//     $(".fp_dashboard_order").fadeOut();
//   });

//   $(".view_invoice").on("click", function () {
//     $(".fp__invoice").fadeIn();
//   });

//   $(".go_back").on("click", function () {
//     $(".fp_dashboard_order").fadeIn();
//   });

//   $(".go_back").on("click", function () {
//     $(".fp__invoice").fadeOut();
//   });

//==========PERSONAL INFO==========
const dashInfoBtn = document.querySelector(".dash_info_btn");
if (dashInfoBtn) {
  dashInfoBtn.addEventListener("click", function () {
    document.querySelector(".fp_dash_personal_info").classList.toggle("show");
  });
}

//==========ORDER HISTORY==========
document.querySelectorAll(".view_invoice").forEach(function (button) {
  button.addEventListener("click", function () {
    document.querySelector(".fp_dashboard_order").style.display = "none";
    document.querySelector(".fp__invoice").style.display = "block";
  });
});

document.querySelectorAll(".go_back").forEach(function (button) {
  button.addEventListener("click", function () {
    document.querySelector(".fp_dashboard_order").style.display = "block";
    document.querySelector(".fp__invoice").style.display = "none";
  });
});

//*==========DASHBOARD ADDRESS==========
//   $(".dash_add_new_address").on("click", function () {
//     $(".address_body").addClass("show_new_address");
//   });

//   $(".cancel_new_address").on("click", function () {
//     $(".address_body").removeClass("show_new_address");
//   });

//   $(".dash_edit_btn").on("click", function () {
//     $(".address_body").addClass("show_edit_address");
//   });

//   $(".cancel_edit_address").on("click", function () {
//     $(".address_body").removeClass("show_edit_address");
//   });

//==========DASHBOARD ADDRESS==========
document.querySelectorAll(".dash_add_new_address").forEach(function (button) {
  button.addEventListener("click", function () {
    document.querySelectorAll(".address_body").forEach(function (element) {
      element.classList.add("show_new_address");
    });
  });
});

document.querySelectorAll(".cancel_new_address").forEach(function (button) {
  button.addEventListener("click", function () {
    document.querySelectorAll(".address_body").forEach(function (element) {
      element.classList.remove("show_new_address");
    });
  });
});

document.querySelectorAll(".dash_edit_btn").forEach(function (button) {
  button.addEventListener("click", function () {
    document.querySelectorAll(".address_body").forEach(function (element) {
      element.classList.add("show_edit_address");
    });
  });
});

document.querySelectorAll(".cancel_edit_address").forEach(function (button) {
  button.addEventListener("click", function () {
    document.querySelectorAll(".address_body").forEach(function (element) {
      element.classList.remove("show_edit_address");
    });
  });
});

//=======OFFER ITEM SLIDER======
// $(".banner2_slider").slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 5000,
//   dots: false,
//   arrows: true,
//   nextArrow: '<i class="far fa-long-arrow-right nextArrow"></i>',
//   prevArrow: '<i class="far fa-long-arrow-left prevArrow"></i>',
// });

//=======TESTIMONIAL 2 SLIDER======
// $(".testi_slider2").slick({
//   slidesToShow: 2,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 4000,
//   dots: false,
//   arrows: true,
//   nextArrow: '<i class="far fa-long-arrow-right nextArrow"></i>',
//   prevArrow: '<i class="far fa-long-arrow-left prevArrow"></i>',

//   responsive: [
//     {
//       breakpoint: 1400,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 1200,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 992,
//       settings: {
//         slidesToShow: 1,
//       },
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 1,
//       },
//     },
//     {
//       breakpoint: 576,
//       settings: {
//         slidesToShow: 1,
//       },
//     },
//   ],
// });

//=======PRODUCT DETAILS SLIDER======
// if ($("#exzoom").length > 0) {
//   $("#exzoom").exzoom({
//     autoPlay: true,
//   });
// }
document.addEventListener("DOMContentLoaded", function (event) {
  //*==========wow js==========
  new WOW().init();

  new StickySidebar("#sticky_sidebar", {
    topSpacing: 10,
  });

  //======= VENOBOX.JS.=========
  new VenoBox({
    selector: ".venobox",
  });
});
