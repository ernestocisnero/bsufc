
const SeasonSelector = () => {
    return (
        <div className="block w-full w-screen bg-nav-dark opacity-90 py-10">
            <div className="flex justify-around">
                <div className="text-white text-md lg:text-3xl font-bold p-1">
                    <p>2024 Spring</p>
                </div>

                <div className="text-nav-dark p-1 text-md lg:text-3xl">
                    <select name="cars" id="cars" className="rounded">
                        <option value="volvo">Select an option...</option>
                        <option value="volvo">2024</option>
                        <option value="saab">2025</option>
                        <option value="mercedes">2026</option>
                        <option value="audi">2027</option>
                    </select>
                </div>

            </div>

        </div>
    )
};

export default SeasonSelector;
