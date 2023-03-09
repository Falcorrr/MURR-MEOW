$(function () {
  let header = $("#header"),
    scrollOffset = $(window).scrollTop();

  checkScroll(scrollOffset);

  $(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop();

    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    if (scrollOffset) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }

  // SCROLL

  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    let $this = $(this),
      blockId = $this.data("scroll"),
      blockOffset = $(blockId).offset().top;

    $("#nav a").removeClass("active");
    $this.addClass("active");

    $("html, body").animate({ scrollTop: blockOffset }, "slow");
  });

  // burger

  $("#burger").on("click", function (event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
  });
});

// statistics

var time = 2,
  cc = 1;
$(window).scroll(function () {
  $("#counter").each(function () {
    var cPos = $(this).offset().top,
      topWindow = $(window).scrollTop();
    if (cPos < topWindow + 300) {
      if (cc < 2) {
        $(".stat_count").addClass("viz");
        $("div").each(function () {
          var i = 1,
            num = $(this).data("num"),
            step = (1000 * time) / num,
            that = $(this),
            int = setInterval(function () {
              if (i <= num) {
                that.html(i);
              } else {
                cc = cc + 2;
                clearInterval(int);
              }
              i++;
            }, step);
        });
      }
    }
  });
});

// hide inner
$(window).on("scroll", function () {
  $(".intro_inner").hide();
});


// DATA-COLLAPSE ACORDION

$("[data-collapse]").on("click", function (event) {
  event.preventDefault();

  let $this = $(this),
      blockId = $this.data("collapse");

      $this.toggleClass("active");

});


// SLIDER
$("[data-slider]").slick({
  infinite: true,
  fade:false,
  slidesToShow: 1,
  slidesToScroll: 1
});


function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}

// $(".openBtn").on("click", function(){
//   $("#myOverlay").css.display = "block";
// })

// $(".closebtn").on("click", function(){
//   $("#myOverlay").css.display = "none";
// })


