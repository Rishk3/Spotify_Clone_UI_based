import React from 'react'
import "../css/Footer.css"
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";
function Footer() {
    return (
        <div className="footer">
          <div className="footer__inner">
              <div className="footer__left">
                   <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" 
                   className="footer__album__logo" alt=""/>
                   <div className="footer__songInfo">
                   <h4>Yeah</h4>
                   <p>Sursea</p>
                   </div>
                   
              </div>
              
        <div className="footer__center">
            <ShuffleIcon className="footer__green"/>
            <SkipPreviousIcon className="footer__icon" />
            {/* <PauseCircleOutlineIcon 
            fontSize="large"
            className="footer__icon"
          /> */}
            <PlayCircleOutlineIcon 
            fontSize="large"
            className="footer__icon"
          />
          <SkipNextIcon className="footer__icon" />
          <RepeatIcon className="footer__green" />
        </div>
              <div className="footer__right">
              <PlaylistPlayIcon />
              <VolumeDownIcon className="footer__volume" />
              <Slider aria-labelledby="continuous-slider" />
              
              </div>
          </div>
        </div>
    )
}

export default Footer
