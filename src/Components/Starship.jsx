import { Link } from "react-router-dom";

function Starship({name,id,handleGetShip}) {
    return(
        <div className="StarShipDiv">
            <Link to={`ship${id}`} onClick={()=> handleGetShip(id) } style={{textDecoration:'none'}}>
            <div className="Starship">
                    <h3>{name}</h3>
            </div>
            </Link>
        </div>
    );
}
export default Starship