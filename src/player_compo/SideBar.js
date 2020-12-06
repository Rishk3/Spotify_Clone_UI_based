import React from 'react'
import "../css/Sidebar.css"
import SidebarOptions from './sidebar_components/SidebarOptions'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from '../context_api/DataLayer';

function SideBar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  console.log(playlists);

// console.log("my playlist are",playlists);
    return (
        <div className="sidebar">
          
           <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOptions title="Home" Icon={HomeIcon}/>
      <SidebarOptions title="Search" Icon={SearchIcon}/>
      <SidebarOptions title="Library" Icon={LibraryMusicIcon}/>

      <div className="sidebar__library">
        <p className="sidebar__library__heading">Playlists</p>
        <div className=" ">

        {playlists?.items?.map((playlist) => (
        <SidebarOptions key={playlist.name} title={playlist.name} />
      ))}
        
        

        </div>
        
      </div>
        </div>
    )
}

export default SideBar
