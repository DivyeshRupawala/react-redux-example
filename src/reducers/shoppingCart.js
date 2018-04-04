let initialState = [];

export default function shoppingCart(state=initialState, actions) {	
	switch(actions.type) {
		case 'ADD_TO_CART' : 
			return [...state, actions.payload.id]
		case 'REMOVE_FROM_CART' :
			return state.filter(id => id !== actions.payload.id)
		default :
			return state	
	}	
}