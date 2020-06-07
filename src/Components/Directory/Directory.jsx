import React from 'react'
import './Directory.scss'
import MenuItem from '../../Components/Menu/Menu-item'
import { connect} from 'react-redux'
import {selectDirectorySections} from '../../Redux/Directory/Directory.selector'
import {createStructuredSelector} from 'reselect'

const  Directory =({sections})=>{
  console.log(sections)
        return(

            <div className='directory-menu'>
               { sections.map(section=><MenuItem  
                    key={section.id}
                    section={section}
                />)}               
            </div>
       
    )
    
}
const mapStateToProps=createStructuredSelector({
  sections:selectDirectorySections
})
export default connect(mapStateToProps) (Directory)