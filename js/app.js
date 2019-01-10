// document.getElementById("nav_switch-id").

function toggleNavigation() {
  console.log("toggle navigation");
  var siteLandingNav = $(".landing-header--menu-control");
  var navSwitch = $(".nav_switch");

  siteLandingNav.toggleClass("is--visible"),
    navSwitch.toggleClass("nav-switch--close");
}

$(document).ready(function() {
  console.log("ready!");
  var navSwitch = $("#nav_switch-id");
  console.log(navSwitch)
  if (navSwitch.length > 0) {
    navSwitch[0].addEventListener("click", function(el) {
      toggleNavigation();
    });
  }

  testirajMe();
});

function testirajMe() {
  console.log("hohoho");
  var container = $(".tabs");

  console.log("sto su sad tabs:", container);
  container.each(function() {
    var content = $(this).find(".tabs-content");
    var links = $(this).find(".tabs-navigation > li > a");
    var slider = $(this).find(".tabs-content > .tabs-slider");
    var els = $(this).find(".tabs-content > .tabs-slider > li");
    links.on("click", function(e) {
      e.preventDefault();
      var link = $(this),
        el = els.filter('[data-content="' + link.data("content") + '"]'),
        n = links.index(link);
      els.removeClass("selected");
      links.removeClass("selected");
      link.addClass("selected");
      el.addClass("selected");

      content.css({ height: el.height() });
      slider.css({
        height: el.height(),
        "-ms-transform": "translateX(-" + 100 * n + "%)",
        "-webkit-transform": "translateX(-" + 100 * n + "%)",
        transform: "translateX(-" + 100 * n + "%)"
      });
    });
    links.eq(0).trigger("click");
    els.eq(0).trigger("click");
  });
}
