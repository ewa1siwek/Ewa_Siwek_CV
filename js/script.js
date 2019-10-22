function showMenu() {
  const hamburger = document.getElementById("hamburger");
  const navbar = document.getElementById("navbar");
  hamburger.addEventListener('click', function() {
    if (navbar.classname === "navigation nav-hidden") {
      navbar.className = "navigation";
    } else {
      navbar.className = "navigation nav-hidden"
    }
  })
} showMenu();

function showActiveMenu() {
  var allAnchors = document.querySelectorAll('.navigation__navigation-list-item>[href^="#"]');
  var sections = [];

  allAnchors.forEach(function (anchor) {
    var selector = anchor.getAttribute('href');
    var section = document.querySelector(selector);
    sections.push(section)
  });

  window.addEventListener('scroll', function () {
    var offset = window.pageYOffset;
    sections.forEach(function (section, index) {
      var classList = allAnchors[index].classList;
      if (getElemDistance(section) <= offset+250) {
        classList.add('active');
      } else {
        classList.remove('active')
      }
    });

    document.querySelectorAll('.active').forEach(function (element, index, allElements) {
      if (index === allElements.length - 1) {
        return;
      }
      element.classList.remove('active');
    })
  });

  function getElemDistance(elem) {
    var location = 0;
    if (elem.offsetParent) {
      do {
        location += elem.offsetTop;
        elem = elem.offsetParent;
      } while (elem);
    }
    return location >= 0 ? location : );
  }
} showActiveMenu();
