import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setOrder, setChange } from '../../redux/orders-reducer';
import style from "./AddOrder.module.css";
import AddOrderReduxForm from './AddOrderReduxForm/AddOrderReduxForm';

function AddOrder(props) {

    const addOrder = (data) => {
        props.setOrder(data);
        props.setChange(false);
    }

    if (props.isChanging === false) return <Redirect to="/orders" />

    return (
        <div className={style.AddOrder}>
            <div className={style.heading}>
                <h2>Заказ</h2>
            </div>
            <div className={style.body}>
                <AddOrderReduxForm {...props} onSubmit={addOrder} />
            </div>

        </div>
    )
}

let mapStateToProps = (state) => ({
    isChanging: state.ordersPage.isChange
})

export default connect(mapStateToProps, { setOrder, setChange })(AddOrder);
