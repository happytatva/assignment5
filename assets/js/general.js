// --------------for equal-height of card-item--------------
function equalHeight() {
  jQuery.fn.extend({
    equalHeight: function () {
      var top = 0;
      var row = [];
      var classname = ("equalHeight" + Math.random()).replace(".", "");
      jQuery(this)
        .each(function () {
          var thistop = jQuery(this).offset().top;
          if (thistop > top) {
            jQuery("." + classname).removeClass(classname);
            top = thistop;
          }
          jQuery(this).addClass(classname);
          jQuery(this).height("auto");
          var h = Math.max.apply(
            null,
            jQuery("." + classname)
              .map(function () {
                return jQuery(this).outerHeight();
              })
              .get()
          );
          jQuery("." + classname).height(h);
        })
        .removeClass(classname);
    },
  });
  setTimeout(function () {
    jQuery(
      ".working-section .card-block .card-item-wrapper .card-info .info-title"
    ).equalHeight();
  }, 400);
}
// --------fixed header and footer----
function header_adj() {
  var header_height = $(".header").outerHeight();
  $(".main-wrap").css({
    "padding-top": header_height + "px",
  });
}
function footer_adj() {
  var footer_height = $(".footer").outerHeight();
  $(".wrapper").css({
    "padding-bottom": footer_height + "px",
  });
  $(".footer").css({
    "margin-top": -footer_height + "px",
  });
}
$(window).on("load", function () {
  header_adj();
  footer_adj();
});

$(document).ready(function () {
  equalHeight();

  //   -----------for opening multiple modal-----------
  $(".sign-up").click(function () {
    $(".sign-in-modal").modal("hide");
    $(".create-acc-modal").modal("show");
  });
  $(".log-in").click(function () {
    $(".create-acc-modal").modal("hide");
    $(".sign-in-modal").modal("show");
  });

  // ---------for toggle navbar----
  $(".hamburger").click(function () {
    $("body").toggleClass("open-menu");
  });

  // -----------for nav-menu top css ------
  if ($(window).width() < 992) {
    var headerHeight = $(".header").height();
    $("body .small-nav").css("top", headerHeight);
  }

  //    ----banner-section-slider----
  $(".banner-slider").slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "ease",
    speed: 2000,
  });

  //   -------device-slider----
  $(".device-slider").slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    cssEase: "ease",
    speed: 2000,
    pauseOnHover: true,
    pauseOnFocus: true,
    variableWidth: true,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
});

// -----------working while resize------------
$(window).on("resize", function () {
  equalHeight();
  header_adj();
  footer_adj();
  // -----------for nav-menu top css while resize------
  if ($(window).width() < 992) {
    setTimeout(function () {
      var headerHeight = $(".header").height();
      $("body .small-nav").css("top", headerHeight);
    }, 500);
  }
});
