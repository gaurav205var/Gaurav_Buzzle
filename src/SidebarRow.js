
import { Button } from '@material-ui/core';
import React from 'react';
import './SidebarRow.css';


const SidebarRow = ({selected, Icon, src = "", title, button = ""}) => {
    return (
        <div className={`sidebarRow ${selected ? 'selected': ''}`}>
            <Icon className='sidebarRow__icon' src = {src}/>
            <h2 className='sidebarRow__title'>{title}</h2>
            {button &&
            <Button variant="contained" className="btn" color="primary" size="small">{button}</Button>}
        </div>
    )
}

export default SidebarRow;

// import React from 'react';

// import "./SidebarRow.css";

// function SidebarRow({ selected,Icon,title}) {
//   return (
//     <div className="sidebarRow">
//         <Icon className="sidebarRow__icon" />
//         <h2 className="sidebarRow__title">{title}</h2>
//     </div>
//   );
// }

// export default SidebarRow;