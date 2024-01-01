export const INITIAL_STATE = {
    cartMealsDetails: [],
    totalPrice: 0,
}

export function cartReducer(state, action) {
    switch (action.type) {
        case "ADD_TO_CART":
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
        case "REMOVE_FROM_CART":
            const alreadyExistMealIdx = state.cartMealsDetails.findIndex(meal => meal.id === action.payload);
            const existMealDetail = state.cartMealsDetails[alreadyExistMealIdx];
            const updatedTotalAmount = state.totalPrice - existMealDetail.price;
            let updatedMealsDetail = null;
            if(existMealDetail.quantity > 1){
                updatedMealsDetail = state.cartMealsDetails.map((meals) => {
                    if (meals.id === action.payload) {
                        return {
                            ...meals,
                            quantity: meals.quantity - 1,
                        }
                    } else {
                        return meals;
                    }
                })
            }else{
                updatedMealsDetail = state.cartMealsDetails.filter((meals) => meals.id !== action.payload);
            }
            return {
                cartMealsDetails: updatedMealsDetail,
                totalPrice: updatedTotalAmount
            };
        default:
            return state;
    }
}