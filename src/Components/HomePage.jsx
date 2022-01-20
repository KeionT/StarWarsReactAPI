import StarshipList from "./StarshipList";

function HomePage({shipsArray, nextUrl,handleGetMoreShips, handleGetShip}) {
    return(
        <div>
            <StarshipList shipsArray={shipsArray} handleGetShip={handleGetShip}/>
            {nextUrl && <div className="ButtonDiv"><button onClick={handleGetMoreShips} className="ShowMoreButton">Show More</button></div>}
        </div>
        
    )
}
export default HomePage