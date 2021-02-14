import { connect } from 'react-redux';
import { setNotPaid, setPaid } from '../../../redux/orders-reducer';
import Order from './Order';


let mapStateToProps = (state) => {
    return {

    }
}
export default connect(mapStateToProps, { setNotPaid, setPaid })(Order);