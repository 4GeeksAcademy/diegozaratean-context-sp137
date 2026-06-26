import { useEffect, useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { CardNave } from "../components/CardNave.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()


  useEffect(()=>{
	console.log('se cargo comopnente home ')
	fetch('https://swapi.info/api/starships')
	.then( (response)=> response.json())
	.then( (data)=>{
		console.log(data.results)
		dispatch({
			type: 'Load_starships',
			payload: { nuevasNaves: data }
		})
		
	})
  },[])


	return (
		<div className="text-center mt-5">
			
			<Link to={'nave/2'} > nave corvete</Link>

			<Link to={'nave/3'} > nave distroyer </Link>

			<h1>Naves Desde el Store Api</h1>
			<div className="row flex-row flex-nowrap overflow-x-scroll ">

				{store.naves.map( (nave,index)=><CardNave  uid={nave.url.replace('https://swapi.info/api/starships/','')} key={index} name={nave.name} length={nave.length} model={nave.model}/> )}
			</div>

		</div>
	);
}; 