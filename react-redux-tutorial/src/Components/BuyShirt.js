import React from 'react'; 
import {connect} from 'react-redux'
import {buyShirt} from '../Redux/StoreActions'


function BuyShirt(props) {
  return (
    <div className="button-container">
        <button onClick={props.buyShirt}>Buy Shirt</button>
    </div>
  );
}

const mapDispatchToProps = dispatch =>{
  return {
    buyShirt: ()=> dispatch(buyShirt())
  }
}
export default connect(null,mapDispatchToProps) (BuyShirt);
