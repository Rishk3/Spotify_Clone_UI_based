import React, {useEffect,useState} from "react"
import { getTokenFromResponseUrl } from "./apis_urls/spotify";
import './css/App.css';
import Login from './Login';
import SpotifyWebApi from "spotify-web-api-js"
import Player from "./player_compo/Player";
import {useDataLayerValue} from "./context_api/DataLayer"

const spotify= new SpotifyWebApi();


function App() {

  const [{user,token,playlists},dispatch] = useDataLayerValue();
  useEffect(() => {

    const hashUrl=getTokenFromResponseUrl();
    window.location.hash="";
    const _token=hashUrl.access_token;
    

    if(_token){ 
      dispatch({
        type:"SET_TOKEN",
        token:_token
      })
     
      
    spotify.setAccessToken(_token);

    spotify.getMe().then(user=>{
      dispatch({
        type:"SET_USER",
        user: user
      });

      spotify.getUserPlaylists().then((playlists) =>{
       dispatch({
          type:"SET_PLAYLISTS",
          playlists:playlists,
        })
      })

      spotify.getPlaylist("3Tcn8UQ9LHR8M3wtzO40t1").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });

      spotify.getMyTopArtists().then((response) =>
      dispatch({
        type: "SET_TOP_ARTISTS",
        top_artists: response,
      })
    );

    });
    }

  }, [])

  
  return (

    <div className="app">
 
 {!token && <Login />}
      {token && <Player spotifyObj={spotify} />}
    
    
    </div>
  );
}

export default App;
