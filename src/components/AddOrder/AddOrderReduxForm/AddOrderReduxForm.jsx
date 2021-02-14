import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../validators/validators';
import { Input, Textarea } from '../../Common/FormControls/FormControls';
import style from "./../AddOrder.module.css";


const maxLenght7 = maxLengthCreator(7);
const maxLenght15 = maxLengthCreator(15);
const maxLenght20 = maxLengthCreator(20);

function AddOrderForm(props) {

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div className={style.miniBody}>
                    <div className={style.allTags}>
                        <table>
                            <tr>
                                <th>тюль:</th>
                                <th><Field component={Input} value={0} name={"tule"} type="number" /></th>
                            </tr>
                            <tr>
                                <th>товар:</th>
                                <th><Field component={Input} name={"product"} type="number" /></th>
                            </tr>
                            <tr>
                                <th>корсет:</th>
                                <th><Field component={Input} name={"corset"} type="number" /></th>
                            </tr>
                            <tr>
                                <th>кольцо:</th>
                                <th><Field component={Input} name={"ring"} type="number" /></th>
                            </tr>
                            <tr>
                                <th>камень:</th>
                                <th><Field component={Input} name={"stone"} type="number" /></th>
                            </tr>
                            <tr>
                                <th>шитье:</th>
                                <th><Field component={Input} name={"sewing"} type="number" /></th>
                            </tr>
                            <tr>
                                <th>настой:</th>
                                <th><Field component={Input} name={"cut"} type="number" /></th>
                            </tr>
                        </table>
                    </div>

                    <div className={style.allTags}>
                        <table>
                            <tr>
                                <th>бабон:</th>
                                <th><Field component={Input} name={"babon"} type="number" /></th>
                            </tr>
                            <tr>
                                <th>дер-ль:</th>
                                <th><Field component={Input} name={"derzh"} type="number" /></th>
                            </tr>
                            <tr>
                                <th>магнит:</th>
                                <th><Field component={Input} name={"magnit"} type="number" /></th>
                            </tr>
                            <tr>
                                <th>корсаж:</th>
                                <th><Field component={Input} name={"corsazh"} type="number" /></th>
                            </tr>
                            <tr>
                                <th>корниз:</th>
                                <th><Field component={Input} name={"corniz"} type="number" /></th>
                            </tr>
                            <tr>
                                <th>ажор:</th>
                                <th><Field component={Input} name={"ozhor"} type="number" /></th>
                            </tr>
                            <tr>
                                <th>сосулка:</th>
                                <th><Field component={Input} name={"sosulka"} type="number" /></th>
                            </tr>
                            <tr>
                                <th>попик:</th>
                                <th><Field component={Input} name={"popik"} type="number" /></th>
                            </tr>
                        </table>
                    </div>
                </div>

                <div className={style.miniBody}>
                    <div className={style.allTags}>
                        <span style={{ borderBottom: 'gray 1px solid', marginBottom: "50px" }}>Клиент</span>

                        <table>
                            <tr>
                                <th>имя:</th>
                                <th><Field component={Input} name={"clientName"}
                                    validate={[required, maxLenght15]} type="text" /></th>
                            </tr>
                            <tr>
                                <th>тел:</th>
                                <th><Field component={Input} name={"clientNumber"}
                                    validate={[required, maxLenght15]} type="number" /></th>
                            </tr>
                            <tr>
                                <th>адрес:</th>
                                <th><Field component={Input} name={"clientAddres"}
                                    validate={[required, maxLenght20]} type="text" /></th>
                            </tr>
                            <tr>
                                <th>заклад:</th>
                                <th><Field component={Input} name={"mortgage"}
                                    validate={[required, maxLenght7]} type="number" /></th>
                            </tr>

                        </table>
                    </div>

                    <div className={style.allTags}>

                        коментарии:<Field component={Textarea} name={"coment"} className={style.coment}
                            type="text" />
                    </div>

                </div>
                {
                    props.error && <div>
                        {props.error}
                    </div>
                }
                <div className={style.formBotton}>
                    <button type="submit" disabled={props.submitting}>Добавить</button>
                </div>
            </form>
        </div >
    )
}

const AddOrderReduxForm = reduxForm({ form: 'order' })(AddOrderForm);

let mapStateToProps = (state) => ({
    resultForm: state.form.order
})

export default connect(mapStateToProps)(AddOrderReduxForm);
