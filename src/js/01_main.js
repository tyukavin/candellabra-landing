(function() {

  document.addEventListener("DOMContentLoaded", () => {

    console.log("load");

    const wow = new WOW(
      {
        boxClass: 'wow',
        animateClass: 'animate__animated',
        offset: 0,
        mobile: false,
      }
    );
    wow.init();

    const sceneSafe = document.querySelector(".safe-content");
    const parallaxInstance1 = new Parallax(sceneSafe);

    const sceneSupport = document.querySelector(".support-content");
    const parallaxInstance2 = new Parallax(sceneSupport);

    const myModal = new HystModal({
      linkAttributeName: "data-hystmodal",
      //settings (optional). see API
    });
  });

})();