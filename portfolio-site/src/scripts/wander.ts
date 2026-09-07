import gsap from "gsap";

const limit = { max: 1, pullRatio: 0 },
    getRandom = () => gsap.utils.random(-limit.max, limit.max),
    round = (value: number) => Math.round(value * 10000) / 10000,
    getModifier = (home: number) => (value: string) => {
        const val = parseFloat(value);
        return round(val + (home - val) * limit.pullRatio) + "px";
    };

gsap.utils.toArray(".floating-icon").forEach((element) => {
    wander(element as gsap.TweenTarget, gsap.getProperty(element as gsap.TweenTarget, "x"), gsap.getProperty(element as gsap.TweenTarget, "y"))
});

// TODO: Refactor this script or change to CSS animation
function wander(element: gsap.TweenTarget, homeX: any, homeY: any) {
    gsap.set(element, {
        x: homeX + (gsap.getProperty(element, "x") as number - homeX) / (1 - limit.pullRatio),
        y: homeY + (gsap.getProperty(element, "y") as number - homeY) / (1 - limit.pullRatio)
    })
    gsap.to(element, {
        x: homeX + getRandom(),
        y: homeY + getRandom(),
        modifiers: {
            x: getModifier(homeX),
            y: getModifier(homeY)
        },
        duration: gsap.utils.random(1.5, 4),
        ease: "sine.inOut",
        onComplete: () => wander(element, homeX, homeY)
    });
}