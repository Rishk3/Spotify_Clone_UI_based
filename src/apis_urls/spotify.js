export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";

const clientId = "dfc176a919964a6aa9a94a99f2377b6b";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ];


export const getTokenFromResponseUrl=()=>{
  return window.location.hash
  .substring(1)
  .split("&")
  .reduce((initial, item) => {
    var parts = item.split("=");
    initial[parts[0]] = decodeURIComponent(parts[1]);

    return initial;
  }, {});
}

const loginUrl=`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;
export default loginUrl ;

