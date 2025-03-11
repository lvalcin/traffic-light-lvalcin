import React , {useState} from "react";


const Home = () => {
	const [ red, setRed ] = useState("red");
	const [yellow, setYellow] = useState("yellow");
	const [green, setGreen] = useState("green");
	
	
/* <div class="shadow-lg p-3 mb-5 bg-white rounded">Larger shadow</div> */
	
	return (
	
		<div className="text-center row">
			<div className= "rectangle trafficLight border bg-dark col-1 mx-auto">
					<div className ="circle redLight border border-danger bg-danger rounded-circle"></div>
					<div className="circle yellowLight border border-warning bg-warning rounded-circle"></div>
					<div className="circle greenLight border border-success bg-success rounded-circle"></div>
			</div>	
        

		</div>
	);
}

export default Home;