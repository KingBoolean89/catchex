TweenMax.from('h2', 1, {
    delay: .5,
    x: -300,
    ease: Power2.easeOut
});
TweenMax.from('h3', 1, {
    delay: 1.8,
    x: 300,
    ease: Power2.easeOut
});

/*pause a beat then fade whole hedline out*/
TweenMax.to(['h2,h3'], .5, {
    delay: 4,
    opacity: 0
});

/*slide photo across the screen to reveal the "relax/plant" cropping*/
TweenMax.to('img', 3, {
    delay: 4.5,
    left: 0
});

/*The "answer" copy appears from the right one word at a time*/
TweenMax.staggerFrom('li', .7, {
    delay: 5,
    opacity: 0,
    x: 30,
    ease: Back.easeOut
}, 1);

/*pop-in the CTA button*/
TweenMax.from('button', .5, {
    delay: 8,
    scale: 0
});

/*flash "GROW" text green when the CTA button appears*/
TweenMax.to('li:last-child', .5, {
    delay: 9,
    color: 'rgb(100,255,100)',
    repeat: 1,
    yoyo: true
});