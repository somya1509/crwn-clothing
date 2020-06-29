import React from 'react';

import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { UpdateCollections } from '../../redux/shop/shop.actions';
import { connect } from 'react-redux';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);

const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

    state = {
        loading: true 
    }

    unsubscribeFromSnapshot = null;

componentDidMount(){
    const {updateCollections} = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.get().then(snapshot=> {
       const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
       updateCollections(collectionsMap);
       this.setState({loading: false});
    });
}

    render(){
        const {match} = this.props;
        const {loading} = this.state;
        return(
            <div className='shop-page'>
            <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading ={loading} {...props} />} />
            <Route path={`${match.path}/:collectionId`} render = {(props) => <CollectionPageWithSpinner isLoading={loading}{...props} />} />
            </div> 
               );
    } 
}

const mapDispatchTOProps = dispatch => ({
    updateCollections : collectionsMap => dispatch(UpdateCollections(collectionsMap))
})


export default connect(null, mapDispatchTOProps)(ShopPage);
