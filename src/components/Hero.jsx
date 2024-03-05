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
                <div className="absolute inset-0 flex items-center justify-center bg-nav-dark bg-opacity-35">
                    <div className="text-justify text-white">
                        <h2 className="text-5xl font-bold">Boiling Springs United FC</h2>
                        <p className="text-3xl">Mid-Atlantic</p>
                        <p className="text-2xl">Boiling Springs, SC</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Hero;
