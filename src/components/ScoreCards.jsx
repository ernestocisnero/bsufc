/* eslint-disable react/prop-types */

const SoccerStatsCard = ({ title, stat }) => {
    return (
        <div className="flex-1 bg-white rounded p-2 m-2">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-3xl font-bold">{stat}</p>
        </div>
    );
};

const ScoreCards = () => {
    return (
        <div className="flex flex-no-wrap bg-nav-dark opacity-90 py-8 justify-around px-5">
            <SoccerStatsCard title="Wins" stat="10" />
            <SoccerStatsCard title="Losses" stat="5" />
            <SoccerStatsCard title="Draws" stat="3" />
            <SoccerStatsCard title="Goals" stat="25" />
        </div>
    )
};

export default ScoreCards;
