
var tl = gsap.timeline()

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

tl.from("#line1-part1",{
    opacity: 0,
    onStart: function(){
        let h5timer = document.querySelector("#line1-part1 h5");

        var grow = 0;

        setInterval(() => {
            if (grow <= 100) {
                h5timer.innerHTML = grow++;
            } else {
                h5timer.innerhtml = grow;
            }
        }, 33);
    }
})



tl.to(".loader",{
    opacity: 0,
    duration: 0.2,
    delay: 3.8
})

tl.from(".page-1",{
    delay: 0.2,
    y:1200,
    opacity:0,
    ease: Power4
})

tl.to(".loader",{
    display: "none"
})