const initialState={
    cart:[]
}

const rootReducer= (state = initialState, action)=>{
     switch (action.type){
            case 'ADD_ITEM' : return {
               ...state,
                cart: state.cart.concat(action.payload)
            }
            
            case 'DELETE_ITEM' : return{ 
                ...state, 
                cart: state.cart.filter((p)=>{
                return p.id !== action.payload.id
            })}
            
            default: return state;
            
     }
}

export default rootReducer;