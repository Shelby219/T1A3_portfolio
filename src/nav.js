// This code is from stack overflow, found this was a good way to have a burger nav bar...
 function classToggle() {
    const navs = document.querySelectorAll('.Navbar__Items')
    
    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
  }
  
  document.querySelector('.Navbar__Link-toggle').addEventListener('click', classToggle);

