// import Header from './Components/Header';
// import HomePage from './Components/HomePage';

// import StarshipPage from './Components/StarshipPage';
// import {useState, useEffect} from 'react'
// import {BroweserRouter,Routes,Route} from "react-router-dom"
// import"./App.css"

// function App() {
//   const[starWarsShipsArray, setStarWarsShipsArray] = useState([]);
//   const [url, setUrl] = useState ("https://swapi.dev/api/starships/");
//   const [nextUrl, setNextUrl] = useState("");
//   const [currShipID, setCurrShipID] = useState(-1);

//   const handleStarwarsData = (data) =>{
//     setStarWarsShipsArray((prevArray) => {
//       return[...prevArray,...data.results];
//     });
//   }
//   const handleGetMoreShips =() => {
//     setUrl(nextUrl);
//   }
//   useEffect(()=>{
//     const makeFetchCall = (url) => {
//       fetch(url)
//       .then((res) => res.json())
//       .then((data)=> {
//         handleStarwarsData(data);
//         return data.next;
//       })
//       .then((next)=>{
//         if(next !== null){
//           setNextUrl(next);
//         }else{
//           setNextUrl("");
//         }
//       })
//     }
//     makeFetchCall(url);
//   }, [url]);
    
// const handleGetShip = (id) =>{
//     setCurrShipId(id);
//   }

// 	return (
//     <BrowserRouter>
//       <div className="App">
//         <Header/>
//         <Routes>
//           <Route path='/' element={<HomePage shipsArray={starWarsShipsArray} nextUrl={nextUrl} handleGetMoreShips={handleGetMoreShips} handleGetShip={handleGetShip}/>} />
//           <Route path={`ship${currShipId}`} element={<StarshipPage starship={starWarsShipsArray[currShipId]}/>} />
//         </Routes>
//       </div>
//     </BrowserRouter>    
//   )
// }

// export default App;

import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import "./App.css";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import StarshipPage from "./Components/StarshipPage";

function App() {
	const [starWarsShipsArray, setStarWarsShipsArray] = useState([]);
  const [url, setUrl] = useState("https://swapi.dev/api/starships/");
  const [nextUrl, setNextUrl] = useState("");
  const [currShipId, setCurrShipId] = useState(-1);

  const handleStarWarsData = (data) =>{    
    setStarWarsShipsArray((prevArray) => {
      return [...prevArray, ...data.results];
    });
  }

  const handleGetMoreShips = () =>{
    setUrl(nextUrl);
  }

	useEffect(() => {

    const makeFetchCall = (url) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          handleStarWarsData(data);
          return data.next;
        })
        .then((next) => {
          if(next !== null){
            setNextUrl(next);
          }else{
            setNextUrl("");
          }
        })
    }

		makeFetchCall(url);
	}, [url]);

  const handleGetShip = (id) =>{
    setCurrShipId(id);
  }

	return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage shipsArray={starWarsShipsArray} nextUrl={nextUrl} handleGetMoreShips={handleGetMoreShips} handleGetShip={handleGetShip}/>} />
          <Route path={`ship${currShipId}`} element={<StarshipPage starship={starWarsShipsArray[currShipId]}/>} />
        </Routes>
      </div>
    </BrowserRouter>    
  )
}

export default App;
