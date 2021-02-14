import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Retails.module.css';
import Retail from './Retail/Retail';

function Retails(props) {

    let retailElements = props.retails.map(r => <Retail key={r.id} state={r} />)

    React.useEffect(() => {
        props.setChanging(true);
    })

    return (
        <div>
            <div className={s.retails}>
                <h1>Розничные продажи:</h1>
                <NavLink to="/add-retail">
                    <button><i className="fa fa-plus" aria-hidden="true"></i> Добавить</button>
                </NavLink>
            </div>
            {retailElements}
        </div>
    )
}


export default Retails;