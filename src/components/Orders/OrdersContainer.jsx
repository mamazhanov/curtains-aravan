
import { connect } from 'react-redux';
import { setChange } from '../../redux/orders-reducer';
import Orders from './Orders';

let mapStateToProps = (state) => {
    return {
        orders: state.ordersPage.orders
    }
}


export default connect(mapStateToProps, { setChange })(Orders);