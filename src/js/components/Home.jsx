import React , {useState} from "react";


const Home = () => {
	const [ color, setColor ] = useState("red")

	return (
		<div className="text-center">
			<div className= "trafficlight border bg-dark d-inline-block p-2 ">
					<div className ={'circle redLight bg-danger rounded-circle '+(color==="red"?"redShadow":"")} onClick={()=>setColor("red")}></div>
					<div className={'circle yellowLight bg-warning rounded-circle ' + (color==="yellow"?"yellowShadow":"")} onClick={()=>setColor("yellow")}></div>
					<div className={'circle greenLight bg-success rounded-circle ' + (color==="green"?"greenShadow":"")} onClick={()=>setColor("green")}></div>
			</div>	
        

		</div>
	);
}

export default Home;
// ReactDOM.render(<TrafficLight />, document.querySelector('#app'));