/*N.B. The gallery basically uses the src of each image as a unique id, so pls don't repeat a file*/

var winWidth = $(window).width();
var winHeight = $(window).height();
var curImg;     //Holds jquery object of .gallery-img being displayed in lightbox

$(document).ready(function() {
  var gallery = $('.gallery');
  var img = $('.gallery-img');
  var lightbox = $('.lightbox');
  var container = $('.gallery-container');
  var cross = $('.cross');
  var leftArrow = $('.left');
  var rightArrow = $('.right');

  img.click(function() {    //Displays image clicked on
    blowUp(this);
    curImg = $(this);
  });

  cross.click(function() {    //Closes lightbox when cross is clicked
    container.hide();
  });

  rightArrow.click(function() {   //Moves to next image when right arrow is clicked
    if ($(curImg).attr('src') !== $(gallery).find(">:last-child").find(">:first-child").attr('src')) {  //makes sure not last image
      curImg = $(curImg).parent().next().find(">:first-child");
    }
    blowUp(curImg);
  });

  leftArrow.click(function() {    //Moves to previous image when left arrow is clicked
    if ($(curImg).attr('src') !== $(gallery).find(">:nth-child(2)").find(">:first-child").attr('src')) {  //makes sure not first image
      curImg = $(curImg).parent().prev().find(">:first-child");
    }
    blowUp(curImg);
  });

  var blowUp = function(element) {    //Function to blow up image onto lightbox
    //Colouring arrows in event of first/last image
    if ($(element).attr('src') === $(gallery).find(">:nth-child(2)").find(">:first-child").attr('src')) {
      leftArrow.css('color', '#848484');
    } else {
      leftArrow.css('color', '#ffffff');
    }

    if ($(element).attr('src') === $(gallery).find(">:last-child").find(">:first-child").attr('src')) {
      rightArrow.css('color', '#848484');
    } else {
      rightArrow.css('color', '#ffffff');
    }

    //Set source and display
    $(lightbox).attr('src', String($(element).attr("src")));
    container.css('display', 'table');
  }

  $(document).keydown(function(e) {   //Listens for keypresses when lightbox visible
    if(container.css("display") !== "none") {
      if (e.which == 37) {  //left arrow moves backwards
        if ($(curImg).attr('src') !== $(gallery).find(">:nth-child(2)").find(">:first-child").attr('src')) {
          curImg = $(curImg).parent().prev().find(">:first-child");
        }
        blowUp(curImg);
      }
      if (e.which == 39) {  //right arrow moves forwards
        if ($(curImg).attr('src') !== $(gallery).find(">:last-child").find(">:first-child").attr('src')) {
          curImg = $(curImg).parent().next().find(">:first-child");
        }
        blowUp(curImg);
      }
      if (e.which == 27) {  //esc closes
        container.hide();
      }
    }
  });
});
