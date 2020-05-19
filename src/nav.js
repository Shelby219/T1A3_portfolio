// This code is from stack overflow, found this was a good way to have a burger nav bar...
 function classToggle() {
    const navs = document.querySelectorAll('.Navbar__Items')
    
    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
  }
  
  document.querySelector('.Navbar__Link-toggle').addEventListener('click', classToggle);

// This code is from stack overflow, just wanted a way to slide the nav up and down when clicked.... My jQuery knowledge is still small

$(document).ready(function () {
  $('.fa-bars').click(function () {
      $('"nav"').slideToggle("slow");
  })
}); 