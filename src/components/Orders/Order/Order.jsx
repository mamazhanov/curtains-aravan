import React from 'react';
import s from './Order.module.css';

function Order(props) {

    let client = props.allInfo.client;
    let catalog = props.allInfo.catalog;
    let aCatalog = props.allInfo.aCatalog;

    let sum = [catalog.tule, catalog.product, catalog.corset, catalog.stone, catalog.sewing, catalog.cut,
    aCatalog.babon, aCatalog.derzh, aCatalog.magnit, aCatalog.corsazh, aCatalog.corniz, aCatalog.ozhor, aCatalog.popik, aCatalog.sosulka];

    function arraySum(arr) {
        let sum = 0;
        if (arr.length) {
            sum = arr.reduce((a, b) => {
                return (parseFloat(a) || 0) + (parseFloat(b) || 0);
            });
        } else {
            sum = 0;
        }
        return sum;
    }


    return (
        <div className={s.order}>
            <div className={s.orderHeader}>Заказ №{props.allInfo.id}</div>
            <div className={s.orderBody}>
                <div >
                    <div>Клиент:</div>
                    <div className={s.klient}>
                        Имя: <u>{client.name}</u><br />
                        Тел: <u>{client.number}</u> <br />
                        Адрес: <u>{client.address}</u>
                    </div>
                </div>
                <div>
                    Товары:
                    <div className={s.clientProducts}>
                        <div>
                            {catalog.tule ? <div>тюль: <span>{catalog.tule}</span></div> : ''}
                            {catalog.product ? <div> товар: <span>{catalog.product}</span></div> : ''}
                            {catalog.corset ? <div>корсет: <span>{catalog.corset}</span></div> : ''}
                            {catalog.ring ? <div>кольцо: <span>{catalog.ring}</span></div> : ''}
                            {catalog.stone ? <div>камень: <span>{catalog.stone}</span></div> : ''}
                            {catalog.sewing ? <div>шитье: <span>{catalog.sewing}</span></div> : ''}
                            {catalog.cut ? <div>настой: <span>{catalog.cut}</span></div> : ''}
                        </div>

                        <div style={{ marginLeft: "10px", paddingLeft: "10px", borderLeft: "1px gray solid" }}>
                            {aCatalog.babon ? <div>бабон: <span>{aCatalog.babon}</span></div> : ''}
                            {aCatalog.derzh ? <div>держатель: <span>{aCatalog.derzh}</span></div> : ''}
                            {aCatalog.magnit ? <div>магнит: <span>{aCatalog.magnit}</span></div> : ''}
                            {aCatalog.corsazh ? <div>карсаж: <span>{aCatalog.corsazh}</span></div> : ''}
                            {aCatalog.corniz ? <div>корниз: <span>{aCatalog.corniz}</span></div> : ''}
                            {aCatalog.ozhor ? <div>ажор: <span>{aCatalog.ozhor}</span></div> : ''}
                            {aCatalog.popik ? <div>попик: <span>{aCatalog.popik}</span></div> : ''}
                            {aCatalog.sosulka ? <div>сосулка: <span>{aCatalog.sosulka}</span></div> : ''}
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.coment}>
                {props.allInfo.coment}
            </div>
            <div className={s.orderFooter}>
                <div className={s.smalStyles}>
                    Общая сумма: <span>{arraySum(sum)}</span>
                </div>
                <div className={s.smalStyles}>
                    Заклад: {props.allInfo.mortgage}
                </div>
                <div>
                    {
                        props.allInfo.paid
                            ? <button className={s.fullyPaid} onClick={() => { props.setNotPaid(props.allInfo.id) }}>оплачено</button>
                            : <button className={s.notPaid} onClick={() => { props.setPaid(props.allInfo.id) }}><del> оплачено</del></button>
                    }

                    {/* <button className={(props.allInfo.paid ? s.fullyPaid : s.notPaid)}>{props.allInfo.paid ? "оплачено" : <del> оплачено</del>}</button> */}
                </div>
            </div>
        </div >
    )
}

export default Order;