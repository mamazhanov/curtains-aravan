import React from 'react';
import { NavLink } from 'react-router-dom';
import OrderContainer from './Order/OrderContainer';
import style from './Orders.module.css'


function Orders(props) {

    let order = props.orders;
    let orderElements = order.map(o => <OrderContainer key={o.id} allInfo={o} />)

    React.useEffect(() => {
        props.setChange(true);
    })
    return (
        <div className={style.orders}>
            <div className={style.orderHeader}>
                <h1>Заказы:</h1>
                <NavLink to="/add-order">
                    <button><i className="fa fa-plus" aria-hidden="true"></i> Добавить</button>
                </NavLink>
            </div>
            <div className={style.orderWindow}>
                {orderElements}
            </div>
        </div>
    )
}

export default Orders;