const navLinks = [
    { label: "Official" },
    { label: "Store" },
    { label: "Boss 302" },
    { label: "Boss 429" },
    { label: "About" },
    { label: "Extra" },
];

const performanceImages = [
    { id: "p1", src: "/performance1.jpg" },
    { id: "p2", src: "/performance2.jpg" },
    { id: "p3", src: "/performance3.jpg" },
    { id: "p4", src: "/performance4.jpg" },
    { id: "p5", src: "/performance5.jpg" },
    { id: "p6", src: "/performance6.jpg" },
    { id: "p7", src: "/performance7.jpg" },
];

const performanceImgPositions = [
    {id:"p1", left: -5, bottom: 65, transform: "rotate(-8deg)", zIndex: 3, }, 
    { id: "p2", right: 0, bottom: 75, transform: "rotate(4deg)", zIndex: 2, }, 
    { id: "p3", right: -10, bottom: 35, transform: "rotate(2deg)", zIndex: 3, }, 
    { id: "p4", right: -10, bottom: -0, transform: "rotate(5deg)", zIndex: 4, },
    { id: "p5", left: 20, bottom: 50, transform: "scale(1.1)", zIndex: 5, }, 
    { id: "p6", left: -20, bottom: 35, transform: "rotate(-4deg)", zIndex: 3, }, 
    { id: "p7", left: -15, bottom: 0, transform: "rotate(-6deg)", zIndex: 4, },
];

const features = [
  {
    id: 1,
    icon: "/feature-icon1.svg",
    highlight: "Born to Race. ",
    text: "Created to dominate the Trans-Am series, the Boss Mustangs were precision built for track performance.",
    size: "w-8 h-8",
    styles: "left-5 md:left-30 top-[30%] opacity-0 translate-y-5",
  },
  {
    id: 2,
    icon: "/feature-icon2.svg",
    highlight: "Unmatched Power. ",
    text: "The Boss 429’s hand-assembled 7.0L V8 engine delivered raw horsepower that redefined American muscle.",
    size: "w-8 h-8",
    styles: "right-5 md:right-40 top-[40%] opacity-0 translate-y-5",
  },
  {
    id: 3,
    icon: "/feature-icon3.svg",
    highlight: "Iconic Design. ",
    text: "Functional hood scoops, wide stance, and unique striping made the Boss instantly recognizable on and off the track.",
    size: "w-8 h-8",
    styles: "left-5 md:left-30 top-[50%] opacity-0 translate-y-5",
  },
  {
    id: 4,
    icon: "/feature-icon4.svg",
    highlight: "Precision Handling. ",
    text: "Race tuned suspension and front spoiler offered stability at speed, a blend of beauty and control.",
    size: "w-8 h-8",
    styles: "right-5 md:right-40 top-[70%] opacity-0 translate-y-5",
  },
  {
    id: 5,
    icon: "/feature-icon5.svg",
    highlight: "Timeless Legacy.",
    text: "From 1969 to today, the Boss name continues to inspire generations of car lovers and racers alike.",
    size: "w-8 h-8",
    styles: "left-5 md:left-30 top-[90%] opacity-0 translate-y-5",
  },
];

const footerLinks = [
    { label: "Privacy Policy", link: "#" },
    { label: "Terms of Use", link: "#" },
    { label: "Sales Policy", link: "#" },
    { label: "Legal", link: "#" },
    { label: "Site Map", link: "#" },
];

export {
    features,
    footerLinks,
    navLinks,
    performanceImages,
    performanceImgPositions,
};