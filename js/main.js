// // When the user scrolls down 20px from the top of the document, slide down the navbar
// window.onscroll = function() {scrollFunction()};
//
// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         document.getElementById("navbar").style.top = "0";
//     } else {
//         document.getElementById("navbar").style.top = "-50px";
//     }
// }

var animateHTML = function () {
  var screens,
    windowHeight;
  var init = function () {
    // get all elements with the class name hidden
    screens = document.getElementsByClassName('hidden');
    //check windowHeight
    windowHeight = window.innerHeight;
    // add event listeners to check position and animate
    _addEventHandlers()
  };
  var _addEventHandlers = function () {
    // on scroll check the scoll position
    window.addEventListener('scroll', _checkPosition);
    // when the elemnt has been resized run init 
    window.addEventListener('resize', init);
  };
  var _checkPosition = function () {
    // itterate down the screen as we scroll
    for (var i = 0; i < screens.length; i++) {
      // get the value of the top of elements bounding box
      var posFromTop = screens[i].getBoundingClientRect().top;
      // if the top most point of the elements (posFromTop) - the windowHeight
      // is < or = to 0. change the class name hidden to fade-in-element
      if (posFromTop - windowHeight <= 0) {
        screens[i].className = screens[i].className.replace('hidden', 'fade-in-element');
      }
    }
  }
  return {
    // return and make init avalible to the outer scope
    init: init
  }
}
animateHTML().init()
