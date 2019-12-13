import React from 'react';
import {connect}  from "react-redux";
import {deleteSmurfs} from "../actions/index";

const Smurfs = (props) => {
   const { name,age,height } = props
    return (
        <div>
            <h3>{name}</h3>
            <h6>Age: {age}</h6>
            <p>Height: {height}</p>
            <button onClick={()=>props.deleteSmurfs(props.id)}>Delete Smurf</button>

        </div>
    )
} 

export default connect(state => state, {deleteSmurfs})(Smurfs);