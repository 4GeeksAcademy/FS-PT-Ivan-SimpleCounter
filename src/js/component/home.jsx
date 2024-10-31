import React from "react";
import { Card } from "./number";


//create your first component
const Home = ({time}) => {
	return (
		<>
		<div className="text-center d-flex">
			<Card digit={<i className="fa-regular fa-clock"></i>}/>
			<Card digit={Math.floor(time / 100000) % 100000} />
			<Card digit={Math.floor(time / 10000) % 10000} />
			<Card digit={Math.floor(time / 1000) % 1000} />
			<Card digit={Math.floor(time / 100) % 100} />
			<Card digit={Math.floor(time / 10) % 10} />
			<Card digit={Math.floor(time % 10)} />
		</div>
		</>
	);
};

export default Home;
