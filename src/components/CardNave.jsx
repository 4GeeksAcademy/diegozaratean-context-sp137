import { Link } from "react-router-dom";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


export const CardNave = (props) => {
    const {store, dispatch} =useGlobalReducer()

	return (
		<div className="card mx-2" style={{width: "18rem"}}>
            <img src={rigoImageUrl}  className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text"> length {props.length}</p>
                <p className="card-text"> model {props.model}</p>
                <Link to={'nave/' + props.uid} className="btn btn-primary" >Ver nave</Link>
               
                 <button onClick={()=>dispatch(
                    {
                        type:'toggle_nave',
                        payload:{name: props.name}
                    }
                )}>toggle nave</button>
            </div>
        </div>
	);
};