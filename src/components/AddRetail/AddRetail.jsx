import React from 'react'
import s from './AddRetail.module.css';
import { setRetail, setChanging } from "./../../redux/retails-reducer";
import { connect } from 'react-redux';
import AddRetailReduxForm from './AddRetailReduxForm/AddRetailReduxForm';
import { Redirect } from 'react-router-dom';

function AddRetail(props) {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var hours = today.getHours() < 10 ? '0' + today.getHours() : today.getHours();
    var minutes = today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes();

    let date = {
        today: mm + '.' + dd + '.' + yyyy,
        time: hours + ":" + minutes
    }


    const addRetail = (formData) => {
        props.setRetail(formData, date);
        props.setChanging(false);
    }

    if (props.isChanging === false) return <Redirect to="/retails" />

    return (
        <div className={s.AddRetail}>
            <div className={s.h2}><h2>Розничная продажа</h2></div>

            <div className={s.add}>
                <AddRetailReduxForm onSubmit={addRetail} />
            </div>
        </div>
    )
}

let mapStateToProps = (state) => ({
    isChanging: state.retailsPage.isChanging
})


export default connect(mapStateToProps, { setRetail, setChanging })(AddRetail);