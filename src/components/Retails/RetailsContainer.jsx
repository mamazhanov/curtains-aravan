import { connect } from "react-redux";
import { setChanging } from "../../redux/retails-reducer";
import Retails from "./Retails";


let mapStateToProps = (state) => {

    return {
        retails: state.retailsPage.retails
    }
}

export default connect(mapStateToProps, { setChanging })(Retails);