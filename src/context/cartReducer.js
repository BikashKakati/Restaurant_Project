export const INITIAL_STATE = {
    cartMealsDetails: [],
    totalPrice: 0,
}

export function cartReducer(state, action) {
    switch (action.type) {
        case "ADDTO_CART":
            const isMealAlreadyExist = state.cartMealsDetails.some(meals => meals.id === action.payload.id);
            let updatedMealsDetails = null;
            if (isMealAlreadyExist) {
                updatedMealsDetails = state.cartMealsDetails.map((meals) => {
                    if (meals.id === action.payload.id) {
                        return {
                            ...meals,
                            quantity: meals.quantity + 1,
                        }
                    } else {
                        return meals;
                    }
                })
            } else {
                updatedMealsDetails = [...state.cartMealsDetails, { ...action.payload }];
            }
            const updatedTotalPrice = state.totalPrice + action.payload.price;
            return {
                cartMealsDetails: updatedMealsDetails,
                totalPrice: updatedTotalPrice
            };
        default:
            return state;
    }
}