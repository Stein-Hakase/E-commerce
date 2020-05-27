import React from  'react'
import CollectionItem from '../Collection-item/CollectionItem'
import './PreviewCollection.scss'
const PreviewCollection =({title,items})=>{
    return(
            <div className='collection-preview'>
                <h3 className='title'>{title.toUpperCase()}</h3>
                <div className='preview'>
                   {items
                    .filter((item,idx)=>idx<4)
                    .map(({id,...item})=>(
                        <CollectionItem key={id} {...item}/>
                        
                    ))}
                </div>
            </div>
    )
}
export default PreviewCollection