import React from 'react'
import CollectionOverView from '../../Components/Collection-overview/CollectionOverView'
import {Route} from 'react-router-dom'
import Collection from '../Collection/Collection'


const Shop =({match}) =>{
    return(
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionOverView}/>
                <Route path={`${match.path}/:CollectionId`}  component={Collection} />
            </div>
        )}

export default Shop