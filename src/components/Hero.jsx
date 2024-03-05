import SoccerFieldHero from '../assets/SoccerFieldHero.png'
const Hero = () => {
    return (
        <div className="relative flex flex-wrap items-center justify-between mb-3">
            <div className="container mx-auto flex flex-wrap items-center justify-between">
                <img
                    className="h-48 w-full object-cover object-contain"
                    src={SoccerFieldHero}
                    alt="Soccer Field"
                />
            </div>
        </div>
    )
};

export default Hero;
