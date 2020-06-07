import React from 'react'
import '../Menu/Menu-item.scss'
import {withRouter} from 'react-router-dom'


const MenuItem =({section:{title,imageUrl,linkUrl},size,history,match})=> (
   <div className= {`${size} menu-item`}
    onClick={()=>history.push(`${match.url}${linkUrl}`)}>
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
export default withRouter(MenuItem)