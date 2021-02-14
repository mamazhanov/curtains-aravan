import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../validators/validators';
import { Input } from '../../Common/FormControls/FormControls';


const maxLenght6 = maxLengthCreator(6);
const maxLenght200 = maxLengthCreator(200);

const AddRetailForm = (props) => {


    return (

        <form onSubmit={props.handleSubmit}>

            <label>Товар:</label><br />
            <Field component={Input} name={"retailProduct"}
                list="cookies" placeholder="выберите товар"
                validate={[required]} /> <br />

            <label>Коментарий:</label><br />
            <Field component={Input} name={"coment"}
                validate={[required, maxLenght200]} type="text" /> <br />

            <label>Цена:</label><br />
            <Field component={Input} name={"price"}
                validate={[required, maxLenght6]} type="number" /> <br />

            <button>Добавить</button>

            <datalist id="cookies">
                <option value="Тюль">Тюль</option>
                <option value="Товар">Товар</option>
                <option value="Корсет">Корсет</option>
                <option value="Тош">Тош</option>
                <option value="Тикиш">Тикиш</option>
                <option value="Куйдириш">Куйдириш</option>
                <option value="Партер-бархама">Партер-бархама</option>
                <option value="Бабон">Бабон</option>
                <option value="Держатель">Держатель</option>
                <option value="Магнит">Магнит</option>
                <option value="Корсаж">Корсаж</option>
                <option value="Корниз">Корниз</option>
                <option value="Ажор">Ажор</option>
                <option value="Попик">Попик</option>
                <option value="Сосулка">Сосулка</option>
            </datalist>
        </form>

    )
}


// REDUX-FORM
const AddRetailReduxForm = reduxForm({ form: 'retail' })(AddRetailForm);

export default AddRetailReduxForm;