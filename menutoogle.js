//**menu x */
const toggle = document.getElementById('toggle');
toggle.onclick = function () {
  toggle.classList.toggle('active');
};

//**responsive */

$(document).ready(function(){
  $('#toggle').click(function(){
      $('ul').toggleClass('show')
  });
});
