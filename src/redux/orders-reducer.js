const SET_ORDER = 'SET_ORDER';
const SET_CHANGING = 'SET_CHANGING';
const SET_PAID = 'SET_PAID';
const SET_NOT_PAID = 'SET_NOT_PAID';

let initialState = {
    orders: [
        {
            id: 2,
            client: { name: 'John', number: '+256255878', address: 'Manchester' },
            catalog: {
                tule: 250,
                product: 450,
                corset: 135,
                ring: 200,
                stone: 50,
                sewing: 300,
                cut: 10
            },
            aCatalog: {
                babon: null,
                derzh: 50,
                magnit: null,
                corsazh: null,
                corniz: null,
                ozhor: null,
                popik: null,
                sosulka: null
            },
            mortgage: 1235,
            coment: "lorem ipsum is ammet",
            paid: true
        },
        {
            id: 1,
            client: { name: 'Helsay', number: '+7865120148', address: 'New-York' },
            catalog: {
                tule: 250,
                product: 450,
                corset: 150,
                ring: 200,
                stone: 100,
                sewing: 300,
                cut: 10
            },
            aCatalog: {
                babon: null,
                derzh: 50,
                magnit: null,
                corsazh: 100,
                corniz: null,
                ozhor: null,
                popik: null,
                sosulka: null
            },
            mortgage: 1235,
            coment: "lorem ipsum is ammet",
            paid: false
        }
    ],
    isChange: true
};

const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ORDER: {
            let data = action.data;
            let newOrder = {
                id: state.orders.length + 1,
                client: {
                    name: data.clientName,
                    number: data.clientNumber,
                    address: data.clientAddres
                },
                catalog: {
                    tule: data.tule,
                    product: data.product,
                    corset: data.corset,
                    ring: data.ring,
                    stone: data.stone,
                    sewing: data.sewing,
                    cut: data.cut
                },
                aCatalog: {
                    babon: data.babon,
                    derzh: data.derzh,
                    magnit: data.magnit,
                    corsazh: data.corsazh,
                    corniz: data.corniz,
                    ozhor: data.ozhor,
                    popik: data.popik,
                    sosulka: data.sosulka
                },
                mortgage: data.mortgage,
                coment: data.coment
            }
            let stateCopy = { ...state };
            stateCopy.orders = [...state.orders];
            stateCopy.orders.unshift(newOrder);
            return stateCopy;

        }
        case SET_CHANGING: {
            return {
                ...state,
                isChange: action.change
            }
        }
        case SET_PAID: {
            return {
                ...state,
                orders: state.orders.map(s => {

                    if (s.id === action.orderID) {

                        return { ...s, paid: true }
                    }
                    return s;
                })
            }
        }
        case SET_NOT_PAID: {
            return {
                ...state,
                orders: state.orders.map(s => {
                    if (s.id === action.orderID) {
                        return { ...s, paid: false }
                    }
                    return s;
                })
            }
        }

        default:
            return state;
    }
}

export const setOrder = (data) => ({ type: SET_ORDER, data });
export const setChange = (change) => ({ type: SET_CHANGING, change });
export const setPaid = (orderID) => ({ type: SET_PAID, orderID });
export const setNotPaid = (orderID) => ({ type: SET_NOT_PAID, orderID });

export default ordersReducer;