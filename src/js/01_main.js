(function() {

  document.addEventListener("DOMContentLoaded", () => {

    const wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animate__animated',
      offset: 0,
      mobile: false,
    });

    wow.init();

    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({triggerElement: ".provider-slider"})
      .setClassToggle(".provider-slider", "active")
      .addTo(controller);
    
    new ScrollMagic.Scene({triggerElement: ".leave-brand-slider"})
      .setClassToggle(".leave-brand-slider", "active")
      .addTo(controller);
    
    new ScrollMagic.Scene({triggerElement: ".platform-lines"})
      .setClassToggle(".js-anim-1", "anim-1")
      .addTo(controller);
    
    new ScrollMagic.Scene({triggerElement: ".platform-lines"})
      .setClassToggle(".js-anim-2", "anim-2")
      .addTo(controller);
    
    new ScrollMagic.Scene({triggerElement: ".platform-lines"})
      .setClassToggle(".js-anim-3", "anim-3")
      .addTo(controller);
    
    new ScrollMagic.Scene({triggerElement: ".platform-lines"})
      .setClassToggle(".js-anim-4", "anim-4")
      .addTo(controller);

    const sceneSafe = document.querySelector(".safe-content");
    const parallaxInstance1 = new Parallax(sceneSafe);

    const sceneSupport = document.querySelector(".support-content");
    const parallaxInstance2 = new Parallax(sceneSupport);

    const myModal = new HystModal({
      linkAttributeName: "data-hystmodal",
    });

    const btnMore = document.querySelector(".js-btn-more");
    const rowVisible = document.querySelector(".js-row-visible");
    const imgAdded = document.querySelectorAll(".js-store-add");

    btnMore.addEventListener("click", function() {

      this.setAttribute("disabled", "disabled");
      rowVisible.classList.toggle("store-content__row--hidden");
      imgAdded.forEach((elem) => {
        elem.className = "animate__animated animate__zoomIn wow";
      });
    });

  });

})();