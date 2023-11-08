import React from "react";
import { useState, useEffect } from "react";

import SimpleCounter from "./simplecounter";

//include images into your bundle

//create your first component
const Home = () => {
	const [counter, setCounter] = useState(0);
  
	useEffect(() => {
	  const intervalId = setInterval(() => {
		setCounter((prevCounter) => prevCounter + 1);
	  }, 1000);
  
	  return () => {
		clearInterval(intervalId);
	  };
	}, []);
  
	return (
	  <>
		<div>
			<SimpleCounter counter={counter} />
		</div>
	  </>
	);
  }
  
  export default Home;  
