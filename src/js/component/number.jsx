import React from "react";



export const Card = (props) => {
    return(
       <div className=" d-flex text-center card bg-dark text-white fs-5 justify-content-center" style={{width: "15rem", height:'15rem'}}>
        {props.digit}
        </div>
    );

};
