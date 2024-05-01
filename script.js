function loader(){
    
    var tl = gsap.timeline();

    tl.from(".line h1", {
        y: 150,
        stagger: 0.2,
        duration: 0.6,
        delay: 0.5,
    });

    tl.to(".line h2", {
        animationName: "anime",
        opacity: 1,
    });

    tl.from("#line1-part1", {
        opacity: 0,
        onStart: function () {
            let h5timer = document.querySelector("#line1-part1 h5");

            var grow = 0;

            setInterval(() => {
                if (grow <= 100) {
                    h5timer.innerHTML = grow++;
                } else {
                    h5timer.innerhtml = grow;
                }
            }, 33);
        },
    });

    tl.to(".loader", {
        opacity: 0,
        duration: 0.2,
        delay: 0,
    });

    tl.from(".page-1", {
        delay: 0.2,
        y: 1200,
        opacity: 0,
        duration: 0.6,
        ease: Power4,
    });

    tl.to(".loader", {
        display: "none",
    });
    tl.from(".nav",{
        opacity: 0
    })

    tl.from("#text-1 h1, #text-2 h1, #text-3 h2,h1 , #text-4 h1", {
        y: 140,
        opacity: 0,
        stagger: 0.2,
    });
}

loader();

function cursorAnimation(){
    document.addEventListener("mousemove", function (dets) {
        gsap.to(".cursor", {
            left: dets.x,
            top: dets.y,
        });
    });
    Shery.makeMagnet(".nav-part2 h4", {});
}
cursorAnimation();


    

    