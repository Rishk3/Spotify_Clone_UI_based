import React,{useEffect,useState} from 'react'
import SideBar from './SideBar'
import "../css/Player.css"
import MainBody from './MainBody'
import Footer from "./Footer"

function Player({spotifyObj}) {

const [playListId, setplayListId] = useState("")

    useEffect(() => {
       
            const playListUrl=window.location.href;
            const id = playListUrl.substring(playListUrl.lastIndexOf('/') + 1);
            console.log("playlist id",id);
    
        
    }, [])
    return (
        <div className="player">
            <SideBar/>
          <div className="player__body">
        
          <MainBody spotify={spotifyObj}/>
          
          </div>
          <Footer/>
        </div>
    )
}

export default Player
