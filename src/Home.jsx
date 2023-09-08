import React from "react";
import Products from "./Products";
const Home=()=>{
    return(
        <div classNameName="her">
            <div className="card bg-dark text-white border-0">
  <img src="C:\Simple\cendrolshop\Assets\newshop.jpg" className="card-img" 
  height="350px"/>
  <div className="card-img-overlay">
    <div classNameName="container"></div>
    <h5 className="card-title display-3  mb-0">Latest this season!</h5>
    <p className="card-text ">Exclusively at your Cendrol Branch!</p>
    <p className="card-text">Shop now to avail offers!</p>
  </div>
</div>
<Products/>

        </div>
    );
}
export default Home;