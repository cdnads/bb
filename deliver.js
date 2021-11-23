// window.addEventListener(
//   "touchstart",
//   function (e) {
//     history.pushState(null, document.title, location.href);
//     history.back();
//     history.forward();
//     window.onpopstate = function () {
//       history.go(1);
//     };

//     // document.getElementById('ads1').setAttribute('style','position:fixed;z-index:51;left: calc(-50vw + 50%);right: calc(-50vw + 50%);bottom:0;text-align: center;margin: 0;');
//     // document.getElementById('ads1').insertAdjacentHTML('afterbegin','<div style="position:absolute;top:0;width:100%;height:18px;z-index:54;"></div><div style="position:absolute;bottom:0;width:100%;height:18px;z-index:54;"></div>');
//     // document.getElementById('ads3').setAttribute('style','position:fixed;z-index:51;left: calc(-50vw + 50%);right: calc(-50vw + 50%);top:0;text-align: center;margin: 0;');
//     // document.getElementById('ads3').insertAdjacentHTML('afterbegin','<div style="position:absolute;top:0;width:100%;height:18px;z-index:54;"></div><div style="position:absolute;bottom:0;width:100%;height:18px;z-index:54;"></div>');
//   },
//   false
// );

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
