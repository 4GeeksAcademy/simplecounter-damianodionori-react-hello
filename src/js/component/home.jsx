import React from "react";
import { useState, useEffect } from "react";

import SimpleCounter from "./simplecounter";

//include images into your bundle

//create your first component
const Home = () => {
	const [counter, setCounter] = useState(1233); // Set the initial count here
  
	useEffect(() => {
	  const intervalId = setInterval(() => {
		setCounter((prevCounter) => prevCounter - 1); // Counting down
	  }, 1000);
  
  
	  return () => {
		clearInterval(intervalId);
	  };
	}, []);
  
	return (
		<div>
		  <SimpleCounter initialCount={counter} /> {/* Pass the initial count */}
		</div>
	);
  }
  
  export default Home;  
