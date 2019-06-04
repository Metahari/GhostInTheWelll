window.runParallaxScript = function(componentId) {
  try {
    var component = document.querySelector(componentId);
    var scrollTop = 0;
    var bg = component.querySelector('.Bg .Cover img'); // first backround image
    function scrollHandler() {
      scrollTop = document.body.scrollTop;
      bg.style.webkitTransform = 'translate3d(0,'+Math.abs(scrollTop/3)+'px,0)';
      bg.style.webkitTransitionDuration = '0s';
    }
    window.addEventListener('wheel',scrollHandler)
    window.addEventListener('scroll',scrollHandler)
    window.addEventListener('resize',scrollHandler);
  } catch (e) {
    console.log('Error in script: ', e);
  }
}

window.runUnveilScript = function(componentId) {
  try {
    var component = document.querySelector(componentId);
    var scrollTop = 0;
    var bg = component.querySelector('.Bg .Cover img'); // first backround image
    function scrollHandler() {
      scrollTop = document.body.scrollTop;
      bg.style.webkitTransform = 'translate3d(0,'+Math.abs(scrollTop/1.5)+'px,0)';
      bg.style.webkitTransitionDuration = '0s';
    }
    window.addEventListener('wheel',scrollHandler)
    window.addEventListener('scroll',scrollHandler)
    window.addEventListener('resize',scrollHandler);
  } catch (e) {
    console.log('Error in script: ', e);
  }
}

/*
     FILE ARCHIVED ON 11:45:09 Aug 07, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:44:21 Jun 04, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 80.26 (3)
  esindex: 0.009
  captures_list: 110.536
  CDXLines.iter: 10.424 (3)
  PetaboxLoader3.datanode: 285.105 (5)
  exclusion.robots: 0.195
  exclusion.robots.policy: 0.181
  RedisCDXSource: 3.592
  PetaboxLoader3.resolve: 360.857 (2)
  load_resource: 571.435
*/