import { selectIsCollectionsLoaded } from  "../../redux/shop/shop.selectors";
import { compose } from 'redux';

import { createStructuredSelector} from 'reselect';
import { connect } from "react-redux";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionPage from './collection.component';

const mapStateToProps = createStructuredSelector({
    isLoading : state => !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionPageContainer;