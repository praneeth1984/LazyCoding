import React from 'react'; 
import {connect} from 'react-redux'

function Inventory(props) {
  return (
    <div className="inventory-container">
       <h1>Total Inventory</h1>
       <p>Number of shirts is - {props.numOfShirts}</p>
       <p>Number of pants is - {props.numOfPants}</p>
    </div>
  );
}

const mapStateToProps = state =>{
  return{
    numOfShirts : state.shirt.numOfShirts,
    numOfPants : state.pant.numOfPants
  }
}


export default connect(mapStateToProps,null) (Inventory);
