
$(function(){

  function loadApp() {

    // Create the flipbook
  
    $('.flipbook').turn({
        // Width
  
        width:922,
        
        // Height
  
        height:600,
  
        // Elevation
  
        elevation: 50,
        
        // Enable gradients
  
        gradients: false,
        
        // Auto center this flipbook
  
        autoCenter: false
  
    });
  }
  
  // Load the HTML4 version if there's not CSS transform
  
  yepnope({
    test : Modernizr.csstransforms,
    yep: ['./js/lib/turn.js'],
    nope: ['./js/lib/turn.html4.min.js'],
    both: ['css/basic.css'],
    complete: loadApp
  });
  




});