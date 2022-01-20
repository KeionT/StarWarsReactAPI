import Starship from "./Starship";

function StarshipList({shipsArray,handleGetShip}) {
    return(
        <div className="StarshipList">
            {shipsArray.map((ship,index) => {
                return<Starship name={ship.name} id={index} key={index} handleGetShip={handleGetShip}/>
            })}
        </div>
    )
}
export default StarshipList