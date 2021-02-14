import React from 'react';
import s from './../Retails.module.css';


const Retail = (props) => {

    return (
        <div className={s.retailElement}>

            <div style={{ marginBottom: '10px' }}>№ {props.state.id}</div>
            <br />
            <div>
                {props.state.coment}
            </div><br />

            <div className={s.reElem}>

                <table>
                    <tr>
                        <th>{props.state.name}</th>
                        <th>=</th>
                        <th>{props.state.sum + " "} сом</th>
                    </tr>
                </table>
                <div>
                    <span className={s.time}>
                        {props.state.time + " "}
                    </span>
                    {props.state.date}

                </div>
            </div>

        </div>
    )
}


export default Retail;