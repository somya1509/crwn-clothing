import { createStructuredSelector} from 'reselect';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import { compose } from 'redux';
import { connect } from 'react-redux';
import WithSpinner from '../with-spinner/with-spinner.component';
import collectionOverview from './collection-overview.component';

const mapStateToProps = createStructuredSelector({
    isLoading : selectIsCollectionFetching
});

const collectionOverviewContainer  = compose(
    connect(mapStateToProps),
    WithSpinner
    )(collectionOverview);

export default collectionOverviewContainer;