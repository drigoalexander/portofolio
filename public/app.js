const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

tl.to('.image',{y: "0%", duration: 1});
tl.to('.slider',{y: "-200%", duration: 1.5, delay: 1});
tl.to('.intro',{y: "-200%",duration: 1},"-=1");

tl.fromTo('nav',{opacity: 0 }, {opacity: 1, duration: 0.5})
tl.fromTo('main',{opacity: 0 }, {opacity: 1, duration: 0.75})