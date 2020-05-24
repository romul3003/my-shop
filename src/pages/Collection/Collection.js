import React from 'react'
import { connect } from 'react-redux'
// import CollectionItem from '../../components/CollectionItem/CollectionItem'
import { selectCollection } from '../../redux/shop/shopSelectors'

import './Collection.scss'

const CollectionPage = ({ collection }) => {
  // eslint-disable-next-line
  console.log('-- Collection Page match', collection)
  return (
    <div className="category">
      <h2>Collection Page</h2>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
})

export default connect(mapStateToProps)(CollectionPage)
