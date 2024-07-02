interface IHeroImage {
    imgUrl: string;
    alt: string;
}

const heroImages: IHeroImage[] = [
    {
        imgUrl: "/assets/images/hero-1.svg",
        alt: "smartwatch"
    },
    {
        imgUrl: "/assets/images/hero-2.svg",
        alt: "bag"
    },
    {
        imgUrl: "/assets/images/hero-3.svg",
        alt: "lamp"
    },
    {
        imgUrl: "/assets/images/hero-4.svg",
        alt: "air fryer"
    },
    {
        imgUrl: "/assets/images/hero-5.svg",
        alt: "chair"
    },
];

export default heroImages;