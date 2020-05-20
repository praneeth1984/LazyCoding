const redux=require('redux');

//Define initial inventory
const initialInventory = {
    numOfShirts : 100,
    numofPants : 100
}

//Define action
const BUY_SHIRT = 'BUY_SHIRT'
function buyShirt(){
    return{
        type:BUY_SHIRT
    }
}

const BUY_PANT = 'BUY_PANT'
function buyPant(){
    return{
        type:BUY_PANT
    }
}



//Define reducer
const buyShirtReducer = (inventory = initialInventory, action)=>{
    switch(action.type){
        case BUY_SHIRT: return{
                ...inventory,
                numOfShirts:inventory.numOfShirts-1
            }
        case BUY_PANT: return{
                ...inventory,
                numofPants:inventory.numofPants-1
            }

        default  : return inventory
    }
}


//Define store
const amazonStore = redux.createStore(buyShirtReducer);

//Initial inventory
console.log("Initial inventory", amazonStore.getState());

//Subscribe to change of inventory
amazonStore.subscribe(()=>console.log("Updated inventory", amazonStore.getState()));

// Buy shirt by passing buyShirt as a function
amazonStore.dispatch(buyShirt());

//Place order by directly passing action JSON
amazonStore.dispatch(buyPant());