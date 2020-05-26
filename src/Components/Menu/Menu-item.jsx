import React from 'react'
import '../Menu/Menu-item.scss'

const MenuItem =({title,imageUrl,linkUrl})=> (
   <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>{title}</h1>
          <span className='subtitle'>Goto Shop</span>
        </div>  

    </div>
)
export default MenuItem