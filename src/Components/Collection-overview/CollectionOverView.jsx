import React from 'react'
import './CollectionOverView.scss'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import PreviewCollection from '../Preview-Collection/PreviewCollection'

import { selectCollectionForPreview } from '../../Redux/Shop/Shop.selector'


const CollectionsOverview=({collections})=>{
    
    return(

    <div className='collections-overview'>
        {
                    collections.map(collection =>
                        <PreviewCollection key={collection.id} collection={collection} />
                    )
                }
    </div>
)}
const mapStateTopProps=createStructuredSelector({
    collections:selectCollectionForPreview
})
export default connect(mapStateTopProps)(CollectionsOverview)