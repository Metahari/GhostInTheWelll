window.runSliderScript = function(componentId) {
  try {
    var component = document.querySelector(componentId);
    var currentImage = 0;
    var Images = component.querySelectorAll('.Group--graphical');
    var Overlay = component.querySelectorAll('.Overlay');
    var Info;
    if (Overlay) {
      Info = component.querySelector('.InfoButton')
    }
    var ArrowRight = component.querySelector('.arrow-right');
    var ArrowLeft = component.querySelector('.arrow-left');
    var Dots;

    var isTouchDevice;
    var touchStartX;
    var moved;
    createDots();
    createInfoButton();
    ArrowRight.addEventListener('click',function() {
      nextImage();
    })
    ArrowLeft.addEventListener('click',function() {
      prevImage();
    })

    component.addEventListener('touchstart',function(e) {
      isTouchDevice = true;
      moved = 0;
      var touch = e.touches[0] || e.changedTouches[0];
      touchStartX = touch.pageX;
    })
    component.addEventListener('touchmove',function(e) {
      var touch = e.touches[0] || e.changedTouches[0];
      var newTouchX = touch.pageX;
      moved = touchStartX - newTouchX;
      touchStartX = newTouchX;
    })
    component.addEventListener('touchend',function(e) {
      if (moved > 10) {
        nextImage()
      }else if (moved < -10) {
        prevImage();
      }
    })
    function createDots() {
      for (var i=0;i<Images.length;i++) {
        var dot = document.createElement('li');
        if (i==0) {
          dot.className = "dot current";
        } else {
          dot.className = "dot";
        }
        dot.classList.add("color-box-pop");
        component.querySelector('.dots').appendChild(dot);
      }
      Dots = component.querySelectorAll('.dot');
    }
    function createInfoButton() {
      if (Info && Overlay) {
        Info.addEventListener('click',function() {
          if (Images[currentImage].querySelector('.Overlay')) {
            Images[currentImage].querySelector('.Overlay').classList.toggle('vis-v')
          }
        })
        if (!Images[currentImage].querySelector('.Overlay')) {
          Info.classList.add('vis-h');
        } else {
          Info.classList.remove('vis-h');
        }
      }
    }
    function nextImage() {
      if (currentImage < Images.length-1) {
        Images[currentImage].classList.add('past')
        Images[currentImage].classList.remove('current')
        Dots[currentImage].classList.remove('current')
        currentImage++;
        Images[currentImage].classList.add('current')
        Dots[currentImage].classList.add('current')
        ArrowLeft.classList.remove('disabled');
      }
      if (currentImage == Images.length-1) {
        ArrowRight.classList.add('disabled');
      }
      if (Info) {
        if (!Images[currentImage].querySelector('.Overlay')) {
          Info.classList.add('vis-h')
        } else {
          Info.classList.remove('vis-h')
        }
      }
    }
    function prevImage() {
      if (currentImage > 0) {
        Images[currentImage].classList.remove('current')
        Dots[currentImage].classList.remove('current')
        currentImage--;
        Images[currentImage].classList.remove('past')
        Images[currentImage].classList.add('current')
        Dots[currentImage].classList.add('current')
        ArrowRight.classList.remove('disabled');
      }
      if (currentImage == 0) {
        ArrowLeft.classList.add('disabled');
        ArrowLeft.classList.add('disabled');
      }
      if (Info) {
        if (!Images[currentImage].querySelector('.Overlay')) {
          Info.classList.add('vis-h')
        } else {
          Info.classList.remove('vis-h')
        }
      }
    }
  } catch (e) {
    console.log('Error in script: ', e);
  }
};

/*
     FILE ARCHIVED ON 11:44:55 Aug 07, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:44:21 Jun 04, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 93.666 (3)
  esindex: 0.01
  captures_list: 136.783
  CDXLines.iter: 19.723 (3)
  PetaboxLoader3.datanode: 86.506 (5)
  exclusion.robots: 0.337
  exclusion.robots.policy: 0.315
  RedisCDXSource: 15.563
  PetaboxLoader3.resolve: 146.996 (2)
  load_resource: 236.518
*/