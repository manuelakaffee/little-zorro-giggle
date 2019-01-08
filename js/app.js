document.getElementById("nav_switch-id").addEventListener("click", function(el) {
  toggleNavigation();
});

function toggleNavigation(){
  console.log('toggle navigation')
  var siteLandingNav = $(".landing-header--menu-control");
  var navSwitch = $(".nav_switch");

  siteLandingNav.toggleClass("is--visible"),
  navSwitch.toggleClass("nav-switch--close");
}
