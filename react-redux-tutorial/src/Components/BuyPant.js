import React from 'react'; 
import {connect} from 'react-redux'
import {buyPant} from '../Redux/StoreActions'


function BuyPant(props) {
  return (
    <div>
        <button onClick={props.buyPant}>Buy Pant</button>
    </div>
  );
}

const mapDispatchToProps = dispatch =>{
  return {
    buyPant: ()=> dispatch(buyPant())
  }
}
export default connect(null,mapDispatchToProps) (BuyPant);
