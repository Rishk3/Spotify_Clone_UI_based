import React from 'react'
import { useDataLayerValue } from '../context_api/DataLayer'
import "../css/MainBody.css"
import Header from '../main_body/Header'
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from '../main_body/SongRow';
function MainBody({spotify}) {
    const [{discover_weekly},dispatch] =useDataLayerValue();

    const playPlaylist = (id) => {
        spotify
          .play({
            context_uri: `spotify:playlist:3Tcn8UQ9LHR8M3wtzO40t1`,
          })
          .then((res) => {
            spotify.getMyCurrentPlayingTrack().then((r) => {
              dispatch({
                type: "SET_ITEM",
                item: r.item,
              });
              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });
          });
      };

      const playSong = (id) => {
        spotify
          .play({
            uris: [`spotify:track:${id}`],
          })
          .then((res) => {
            spotify.getMyCurrentPlayingTrack().then((r) => {
              dispatch({
                type: "SET_ITEM",
                item: r.item,
              });
              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });
          });
      };
    
    return (
        <div className="mainBody">
            <Header spotify={spotify} />
           <div className="mainBody__info">
               <img src={discover_weekly?.images[0].url}
               className="mainBody__info__play_img" alt=""/>
               <div className="mainBody__info__text">
           <p className="mainBody__info__text__playlist">PLAYLIST</p>
           <h2>Discover Weekly</h2>
           <p className="mainBody__info__text__description">{discover_weekly?.description}</p>
               </div>
           </div>

           <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon
            className="body__shuffle"
            onClick={playPlaylist}
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} playSong={playSong}/>
        ))}
      </div>

        </div>
    )
}

export default MainBody
