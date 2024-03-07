import FieldHero from '../assets/FieldHero.png'

const Hero = () => {
    return (
        <div className="relative">
            <img src={FieldHero} alt="Your Image" className="block w-full h-96 object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-5">
                <div className="text-center text-white">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-2">Boiling Springs United FC</h1>
                    <h2 className="text-lg sm:text-xl mb-1">Mid-Atlantic</h2>
                    <h3 className="text-lg sm:text-xl mb-1">Boiling Springs, SC</h3>
                </div>
            </div>
        </div>

    )
};

export default Hero;
