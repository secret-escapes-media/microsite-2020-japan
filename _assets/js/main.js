// general js for the project that wouldn't be a reuseable component

/*
$(window).on('scroll', function () {


	var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
  //console.log(isFirefox);

    var pixs = $(document).scrollTop(),
    pixs = pixs / 100,
    offset = 600,
    range = 100,
    calc = 1 - (pixs )/10;

	if(isFirefox === false){

		$(".bv-banner-out").css({"-webkit-filter": "blur("+pixs+"px)","filter": "blur("+pixs+"px)","opacity": calc });

  }  else  { $(".bv-banner-out").css({"opacity": calc });}
});
*/
/*
// Get the modal
var modal = document.getElementById('bv-myModal');

// Get the button that opens the modal
var btn = document.getElementById("bv-myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("bv-close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
    $('body').addClass('bv-disable-scroll');
		$('#video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
      $('body').removeClass('bv-disable-scroll');
			//$('#video').stopVideo();
			$('#video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
        $('body').removeClass('bv-disable-scroll');
				$('#video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
  }
}
*/


// Make legend acceesible
var i;
var j;
var index_highest = 0;

var pins = ['kulinarik', 'natur', 'tradition','tokio'];
var coll = document.getElementsByClassName("bv-toggle");
var coll1 = document.getElementsByClassName("marker--kulinarik");
var coll2 = document.getElementsByClassName("marker--outdoor");
var coll3 = document.getElementsByClassName("marker--tradition");
var coll4 = document.getElementsByClassName("marker--tokio");
console.log(coll1);

document.getElementById('bv-pin1').addEventListener("click", function(){


for (i = 1; i <= coll1.length; i++) {
	//var zindex = document.getElementById('kulinarik'+i).style.getPropertyValue("z-index");
  var elemKulinarik = document.getElementById('kulinarik'+i);

  if (elemKulinarik.style.display === "none") {
      elemKulinarik.style.display = "block";
			this.classList.add('bv-toggle-active');
      this.firstChild.style.opacity = "1";


    } else {
      elemKulinarik.style.display = "none";
			elemKulinarik.style.zIndex = 5;
			this.classList.remove('bv-toggle-active');
      this.firstChild.style.opacity = "0.4";
    }
  }
});

document.getElementById('bv-pin2').addEventListener("click", function(){

for (i = 1; i <= coll2.length; i++) {

  var elemOutdoor = document.getElementById('outdoor'+i);

  if (elemOutdoor.style.display === "none") {
      elemOutdoor.style.display = "block";
			this.classList.add('bv-toggle-active');
      this.firstChild.style.opacity = "1";

    } else {
      elemOutdoor.style.display = "none";
			this.classList.remove('bv-toggle-active');
      this.firstChild.style.opacity = "0.4";
    }
  }
});

document.getElementById('bv-pin3').addEventListener("click", function(){

for (i = 1; i <= coll3.length; i++) {

  var elemTradition = document.getElementById('tradition'+i);


  if (elemTradition.style.display === "none") {
      elemTradition.style.display = "block";
			this.classList.add('bv-toggle-active');
      this.firstChild.style.opacity = "1";

    } else {
      elemTradition.style.display = "none";
			this.classList.remove('bv-toggle-active');
      this.firstChild.style.opacity = "0.4";

    }
  }
});

document.getElementById('bv-pin4').addEventListener("click", function(){

for (i = 1; i <= coll4.length; i++) {

  var elemTokio = document.getElementById('tokio'+i);


  if (elemTokio.style.display === "none") {
      elemTokio.style.display = "block";
			this.classList.add('bv-toggle-active');
      this.firstChild.style.opacity = "1";

    } else {
      elemTokio.style.display = "none";
			this.classList.remove('bv-toggle-active');
      this.firstChild.style.opacity = "0.4";

    }
  }
});
