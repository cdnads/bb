window.addEventListener(
  "touchstart",
  function (e) {
    history.pushState(null, document.title, location.href);
    history.back();
    history.forward();
    window.onpopstate = function () {
      history.go(1);
    };

  },
  false
);

window.addEventListener(
  "DOMContentLoaded",
  function () {
    history.pushState(null, document.title, location.href);
    history.back();
    history.forward();
    window.onpopstate = function () {
      history.go(1);
    };
  },
  false
);
