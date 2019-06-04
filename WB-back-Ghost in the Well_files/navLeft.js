window.runNavLeftScript = function() {
  try {
    var touchStartY;
    var touchMoved;
    var scrollTop;
    var oldScrollTop;
    var Nav = document.querySelector('.Section--nav');
    var HamburgerContainer;
    var HamburgerIcon;
    var SiteTitle = document.querySelector('.Site-title');
    SiteTitle.addEventListener('click', clickLink);

    if (document.querySelector('.Nav--hamburger')) {
      HamburgerContainer = document.querySelector('.Nav--hamburger');
    }
    if (HamburgerContainer && HamburgerContainer.querySelectorAll('.Link').length > 0 && HamburgerContainer.querySelector('.Icon')) {
      HamburgerIcon = HamburgerContainer.querySelector('.Icon');

      var menuItems = HamburgerContainer.querySelectorAll('.Link');
      for (i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener('click', clickLink);
      }

      HamburgerIcon.addEventListener('click',hamburgerClickHandler);
      function navScrollHandler(e) {
        e.stopPropagation();
      }

      SiteTitle.addEventListener('click', clickLink);

      function clickLink() {
        if (HamburgerIcon.textContent == "✕") {
          HamburgerIcon.textContent = "☰";
          Nav.classList.remove('w-fs');
          Nav.classList.add('w-3rem');
          Nav.classList.add('ms-w-4rem');
          HamburgerContainer.classList.remove('Active');
          HamburgerContainer.scrollTop = 0;
        }
      }

      function hamburgerClickHandler() {
        if (HamburgerIcon.textContent == "☰") {
          HamburgerIcon.textContent = "✕";
          Nav.classList.add('w-fs');
          Nav.classList.remove('w-3rem');
          Nav.classList.remove('ms-w-4rem');
          HamburgerContainer.classList.add('Active');
        }
        else if (HamburgerIcon.textContent == "✕") {
          HamburgerIcon.textContent = "☰";
          Nav.classList.remove('w-fs');
          Nav.classList.add('w-3rem');
          Nav.classList.add('ms-w-4rem');
          HamburgerContainer.classList.remove('Active');
          HamburgerContainer.scrollTop = 0;
        }
      }
    }
  } catch (e) {
    console.log('Error with nav script: ', e);
  }
}

/*
     FILE ARCHIVED ON 11:49:05 Aug 07, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:44:22 Jun 04, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 61.2 (3)
  esindex: 0.009
  captures_list: 86.247
  CDXLines.iter: 11.306 (3)
  PetaboxLoader3.datanode: 67.244 (5)
  exclusion.robots: 0.202
  exclusion.robots.policy: 0.19
  RedisCDXSource: 9.15
  PetaboxLoader3.resolve: 229.094 (2)
  load_resource: 267.925
*/