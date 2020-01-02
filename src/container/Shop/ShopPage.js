import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import CollectionsOverview from '../../component/collections-overwiew/CollectionsOverview';
import Category from '../Category/Category';
//redux
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/action/shop';

//firebase
import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';
//shop data

//hoc
import WithSpinner from '../../HOC/with-spinner/WithSpinner';

const CollectionOverViewWithSpinner = WithSpinner(CollectionsOverview);
const CategoryWithSpinner = WithSpinner(Category);

const ShopPage = ({ match, updateCollections }) => {
  let unsubscribeFromSnapshot = null;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const collectionRef = firestore.collection('collections');

    // const fetchData = async () => {
    //   try {
    //     const data = await (
    //       await fetch(
    //         'https://firestore.googleapis.com/v1/projects/crwn-db-56dd9/databases/(default)/documents/collections'
    //       )
    //     ).json();

    //     console.log(data);
    //   } catch (e) {
    //     console.log(e);
    //   }
    // };

    // fetchData();

    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);

      updateCollections(collectionsMap);
      setLoading(false);
    });

    // unsubscribeFromSnapshot = collectionRef.onSnapshot(snapshot => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);

    //   updateCollections(collectionsMap);
    //   setLoading(false);
    // });
  }, []);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={props => {
          console.log(props);

          return (
            <CollectionOverViewWithSpinner isLoading={loading} {...props} />
          );
        }}
      />
      <Route
        path={`${match.path}/:categoryId`}
        render={props => <CategoryWithSpinner isLoading={loading} {...props} />}
      />
    </div>
  );
};

const mapStateToProps = state => ({});

const mapActionToProps = {
  updateCollections
};

export default connect(null, mapActionToProps)(ShopPage);
