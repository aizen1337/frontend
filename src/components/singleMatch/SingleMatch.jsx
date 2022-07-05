const SingleMatch = ( { match } ) => {
    return (  
        <div className="match">
            <div className="p-5 w-full h-full text-center bg-gray-700 rounded-3xl
        hover:bg-purple-400
        hover:cursor-pointer
        hover:rounded-xl
        transition-all duration-300 ease-linear;">
                <h1 className="text-lg font-bold  text-purple-500">{match.title}</h1>
                <h3 className="text-lg font-bold">{match.boxer} vs {match.boxer1}</h3>
                <h3 className="text-lg font-bold">{match.rounds} rounds</h3>
                <h4 className="text-lg font-bold">{match.createdAt}</h4>
            </div>
        </div>
    );
}
 
export default SingleMatch;