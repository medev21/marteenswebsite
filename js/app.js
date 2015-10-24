function resetScreen(){
  //slide to the left the mobile nav bar
  $('.mobile-nav').animate({
  	left: "-30%"
  },100);
  //slide to the left the active slide
  $('.slide').animate({
  	left: "0"
  }, 100);
  $('body').css("overflow-x", "visible"); //reset overflow-x
}

function changeScreenPage($currentSlide, $pickedSlide){
  if($('.slide').css("left") != "0px"){
    resetScreen();
    $currentSlide.hide().removeClass('active-slide');
    $pickedSlide.show().addClass('active-slide');
  }else{
    $currentSlide.stop().fadeOut("slow").removeClass('active-slide');
    $pickedSlide.fadeIn("slow").addClass('active-slide');
  }
}

$('.slide').click(function(){
  if($('.slide').css("left") != "0px"){
    resetScreen();
  }
});

//home section navigation bubble set up///////////////////
var divClassObj = {
  "home-link" : "home-section",
  "name-link" : "home-section",
  "about-link" : "about-section",
  "about-bubble" : "about-section",
  "skills-link" : "skills-section",
  "skills-bubble" : "skills-section",
  "contact-link" : "contact-section",
  "contact-bubble" : "contact-section"
};

$.each(divClassObj, function(key, value){
  var classKeyName = '.' + key;
  $(classKeyName).click(function(){
    var classValueName = '.' + value;
    $currentSlide = $('.active-slide');
    $pickedSlide = $(classValueName);
    changeScreenPage($currentSlide, $pickedSlide);
  });
});

// $('.home-link, .name-link').click(function(){
//   $currentSlide = $('.active-slide');
//   $pickedSlide = $('.home-section');
//   changeScreenPage($currentSlide, $pickedSlide);
// });
//
// $('.about-link, .about-bubble').click(function(){
//   $currentSlide = $('.active-slide');
//   $pickedSlide = $('.about-section');
//   changeScreenPage($currentSlide, $pickedSlide);
// });
//
// $('.skills-bubble, .skills-link').click(function(){
//   $currentSlide = $('.active-slide');
//   $pickedSlide = $('.skills-section');
//   changeScreenPage($currentSlide, $pickedSlide);
// });
//
// $('.contact-bubble, .contact-link').click(function(){
//   $currentSlide = $('.active-slide');
//   $pickedSlide = $('.contact-section');
//   changeScreenPage($currentSlide, $pickedSlide);
// });
//////////////////////////////////////////////////////////

//About section picture selection/////////
var $overlay = $('<div class="overlay"></div>');
var $image = $('<img>');
var $caption = $('<p></p>');

$overlay.append($image);
$overlay.append($caption);
$("body").append($overlay);

//click on picture
$(".gallery a").click(function(event){
  event.preventDefault(); //prevents picture from opening into another page
  var imageLocation = $(this).attr("href");
  //update overlay w/ the image linked in the link
  $image.attr("src", imageLocation);
  $overlay.show();

  // get child's alt attribute and set caption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});

$overlay.click(function(){
  $overlay.hide();
});
/////////////////////////////////////////

/////////////////////////////////////////
//  Mobile Menu bar slide
////////////////////////////////////////

$('.icon-menu').click(function(){
  if($('.slide').css("left")=="0px"){
    //slide to the right the menu bar
    $('.mobile-nav').animate({
			left: "0"
		},200);
    //slide to the right the active slide
    $('.slide').animate({
			left: "30%"
		}, 200);
    $('body').css("overflow-x", "hidden");
  }else{
    resetScreen();
  }
});
////// end mobile menu bar side //////////////
