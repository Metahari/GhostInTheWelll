window.runPlaceholderScript = function() {
  try {
    var images = document.querySelectorAll('img');
    if (images) {
      window.addEventListener('resize',setSizes);
      function resizeHandler() {
        setSizes();
      }
      setSizes();
      function setSizes() {
        for (var i=0; i<images.length; i++) {
          var image = images[i];
          if (!image.classList.contains("loaded") && image.dataset.ratio && image.dataset.ratio != 'NaN') {
            var ratio = image.dataset.ratio;
            height = Math.floor(image.width/ratio);
            image.height = height;
            loadListener(image);
          }
        }
      }
      function loadListener(image) {
        image.addEventListener('load',function(){
          image.classList.add("loaded");
          image.removeAttribute("height");
        })
      }
    }
  } catch (e) {
    console.log('Error in script: ', e);
  }
};

/*
     FILE ARCHIVED ON 11:45:03 Aug 07, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:44:20 Jun 04, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 190.5 (3)
  esindex: 0.013
  captures_list: 227.555
  CDXLines.iter: 16.771 (3)
  PetaboxLoader3.datanode: 51.302 (5)
  exclusion.robots: 0.249
  exclusion.robots.policy: 0.234
  RedisCDXSource: 11.518
  PetaboxLoader3.resolve: 154.598
  load_resource: 133.975
*/