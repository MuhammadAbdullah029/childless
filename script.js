const tl = gsap.timeline();

window.addEventListener("load", () => {
    const blur = document.querySelector("#blurMe feGaussianBlur");

    tl.to(blur, {
      attr: { stdDeviation: 10 },
      duration: 1,
      ease: "power2.out"
    });

    tl.fromTo(".loading svg", 
      { opacity: 0, scale: 0.95 }, 
      { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
    );
    tl.to(".loading svg", {
        y: -55,
        opacity: 0
    }
      
    );
    tl.to(".loading", {
      top: "-100%",
      display: "none"
    })
    tl.from(".hero h1", {
      y: 5,
      opacity: 0
    })
    
  });
  



gsap.to(".hero img", {
    scrollTrigger: {
        trigger: ".hero img",
        start: "top 70%",
        scrub: 3,
        // markers: true
        
    },
    width: "100%"
});

gsap.to(".inp p", {
    scrollTrigger: {
        trigger: ".inp",
        start: "top 69%",
        end: "top 11%",
        scrub: true,
        // markers: true
    },
    yPercent: -50
});


function rotatesvg(name, pn) {
    gsap.to(name, {
        scrollTrigger: {
            trigger: pn,
            start: "top 79%",
            // end: "top 11%",
            scrub: 1,
            // markers: true
        },
        rotate: "360deg"
    });
}

rotatesvg(".sg svg", ".sg");
rotatesvg(".ccard svg", ".ccard");
rotatesvg(".cta svg", ".cta");