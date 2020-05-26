import React from 'react'
import '../Menu/Menu-item.scss'

const MenuItem =({title,imageUrl,linkUrl,size})=> (
   <div className= {`${size} menu-item`}>
       <div  style={{backgroundImage:`url(${imageUrl}) `}}
            className='background'
        >

       </div>
       <div className=' content'>
        
          <h1 className='title'>{title.toUpperCase()}</h1>
          <span className='subtitle'>GOTO SHOP</span>
        </div>  

    </div>
)
export default MenuItem