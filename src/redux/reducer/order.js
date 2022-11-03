const initOrder = {
    orderS: [],
    inProgress: [],
    pastOrders: [],
}

export const orderReducer = (state=initOrder, action) => {

    if (action.type === 'SET_ORDERS') {
        return {
            ...state,
            order: action.value,
        }
    }

    if (action.type === 'SET_IN_PROGRESS') {
        return {
            ...state,
            inProgress: action.value,
        }
    }

    if (action.type === 'SET_PAST_ORDERS') {
        return {
            ...state,
            pastOrders: action.value,
        }
    }

    return state;
}