interface StylistImageHeroProps {
    src: string;
}

function StylistImageHero({ src }: StylistImageHeroProps) {
    return (
        <>
            <img
                src={`./public/images/${src}.webp`}
                alt="Stylist"
                className="img-fluid rounded-circle stylist-image-hero"
            />
        </>
    );
}
export default StylistImageHero;
