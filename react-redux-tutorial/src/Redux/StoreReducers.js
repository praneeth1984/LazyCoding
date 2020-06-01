import {BUY_SHIRT,BUY_PANT,INITIAL_INVENTORY_SHIRTS,INITIAL_INVENTORY_PANTS} from  "./StoreActionConstants"
import { combineReducers} from 'redux'



//INITIAL_INVENTORY is the initial value
const buyShirtReducer = (state=INITIAL_INVENTORY_SHIRTS,action)=>{
    switch(action.type){
        case BUY_SHIRT: return{
            ...state,
            numOfShirts:state.numOfShirts-1
        }

        default: return state;
    }
}

const buyPantReducer = (state=INITIAL_INVENTORY_PANTS,action)=>{
    switch(action.type){
        case BUY_PANT: return{
            ...state,
            numOfPants:state.numOfPants-1
        }
        
        default: return state;
    }
}

const rootReducer = combineReducers({
    shirt : buyShirtReducer,
    pant : buyPantReducer
})

export default rootReducer;