import React from 'react'
import "./SidebarOptions.css"
function SidebarOptions({title,Icon}) {
    return (
        <div className="sidebar__options">
            <div className="sidebar__options__item">
            {Icon && <Icon className="sidebar__options__icon"/>}
            {Icon?(<p className="sidebar__options__heading">{title}</p>):<p>{title}</p>}
           
            </div>
            
         
        </div>
    )
}

export default SidebarOptions
