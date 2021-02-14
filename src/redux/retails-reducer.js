const SET_RETAIL = 'SET_RETAIL';
const SET_CHANGING = 'SET_CHANGING';

let initialState = {
    retails: [
        { id: 3, name: "Держатель", coment: "Lorem ipsum is ammet", sum: "1500", date: "02.09.2021", time: "09:24" },
        { id: 2, name: 'Камень', coment: "Lorem ipsum is ammet", sum: 50, date: "27.01.2021", time: "12:30" },
        { id: 1, name: 'Бабон', coment: "Lorem ipsum is ammet", sum: 150, date: "05.02.2021", time: "12:30" }
    ],
    isChanging: true
};

const retailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RETAIL: {
            let newRetail = {
                id: state.retails.length + 1,
                name: action.payload.retailProduct,
                coment: action.payload.coment,
                sum: action.payload.price,
                date: action.date.today,
                time: action.date.time
            }
            let stateCopy = { ...state };
            stateCopy.retails = [...state.retails];
            stateCopy.retails.unshift(newRetail);
            return stateCopy;
            // ...state,
            // retails: [...state.retails, newRetail]            
        }
        case SET_CHANGING: {
            return {
                ...state,
                isChanging: action.change
            }
        }

        default:
            return state;
    }
}

export const setRetail = (payload, date) => ({ type: SET_RETAIL, payload, date });
export const setChanging = (change) => ({ type: SET_CHANGING, change });

export default retailsReducer;