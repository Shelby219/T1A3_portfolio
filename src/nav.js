function classToggle() {
    const navs = document.querySelectorAll('.Navbar__Items')
    
    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
  }
  
  document.querySelector('.Navbar__Link-toggle').addEventListener('click', classToggle);

  // jQuery which slides the nav up and down when the burger icon is clicked

$(document).ready(function () {
    $(".fa-bars").click(() => {
      $("nav").slideToggle("slow");
    });
  });