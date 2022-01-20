export default function StarshipPage({starship}){
    return(
        <div className="StarshipPage">
            <div>
            <h1>{starship.name}</h1>
            <table>
                <tbody>
                <tr>
                    <th>Manufacturer</th>
                    <td>{starship.manufacturer}</td>
                </tr>
                <tr>
                    <th>Cost in Credits</th>
                    <td>{starship.cost_in_credits}</td>
                </tr>
                <tr>
                    <th>Length</th>
                    <td>{starship.length}</td>
                </tr>
                <tr>
                    <th>Max Atmosphering Speed</th>
                    <td>{starship.max_atmosphering_speed}</td>
                </tr>
                <tr>
                    <th>Crew</th>
                    <td>{starship.crew}</td>
                </tr>
                <tr>
                    <th>Passengers</th>
                    <td>{starship.passengers}</td>
                </tr>
                <tr>
                    <th>Cargo Capacity</th>
                    <td>{starship.cargo_capacity}</td>
                </tr>
                <tr>
                    <th>Consumables</th>
                    <td>{starship.consumables}</td>
                </tr>
                <tr>
                    <th>Hyperdrive Rating</th>
                    <td>{starship.hyperdrive_rating}</td>
                </tr>
                <tr>
                    <th>MGLT</th>
                    <td>{starship.MGLT}</td>
                </tr>
                <tr>
                    <th>Starship Class</th>
                    <td>{starship.starship_class}</td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
    )
}