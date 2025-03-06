import React , {useState} from "react";


const Home = () => {
	const [ color, setColor ] = useState("red");
	
	
/* <div class="shadow-lg p-3 mb-5 bg-white rounded">Larger shadow</div> */
	
	return (
	
		<div className="text-center">
			<div className= "rectangle trafficLight">
					<div className ="circle redLight border border-danger rounded-circle"></div>
					<div className="circle yellowLight border border-warning rounded-circle"></div>
					<div className="circle greenLight border border-success rounded-circle"></div>
			</div>	
        

		</div>
	);
}

export default Home;