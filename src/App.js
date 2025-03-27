// import React, { useEffect } from "react";
// import SpotifyWebApi from "spotify-web-api-js";
// import { useStateValue } from "./StateProvider";
// import Player from "./Player";
// import { getTokenFromResponse } from "./spotify";
// import "./App.css";
// import Login from "./Login";

// const s = new SpotifyWebApi();

// function App() {
//   const [{ token }, dispatch] = useStateValue();

//   useEffect(() => {
//     // Set token
//     const hash = getTokenFromResponse();
//     window.location.hash = "";
//     let _token = hash.access_token;

//     if (_token) {
//       s.setAccessToken(_token);

//       dispatch({
//         type: "SET_TOKEN",
//         token: _token,
//       });

//       s.getPlaylist("37i9dQZF1DX1i3hvzHpcQV").then((response) =>
//         dispatch({
//           type: "SET_DISCOVER_WEEKLY",
//           discover_weekly: response,
//         })
//       );

//       s.getMyTopArtists().then((response) =>
//         dispatch({
//           type: "SET_TOP_ARTISTS",
//           top_artists: response,
//         })
//       );

//       dispatch({
//         type: "SET_SPOTIFY",
//         spotify: s,
//       });

//       s.getMe().then((user) => {
//         dispatch({
//           type: "SET_USER",
//           user,
//         });
//       });

//       s.getUserPlaylists().then((playlists) => {
//         dispatch({
//           type: "SET_PLAYLISTS",
//           playlists,
//         });
//       });
//     }
//   }, [token, dispatch]);

//   return (
//     <div className="app">
//       {!token && <Login />}
//       {token && <Player spotify={s} />}
//     </div>
//   );
// }

// export default App;



import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateValue } from "./StateProvider";
import Player from "./Player";
import { getTokenFromResponse } from "./spotify";
import "./App.css";
import Login from "./Login";

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = ""; // Clear URL hash
    const _token = hash.access_token;

    if (_token) {
      console.log("Access Token:", _token);
      spotify.setAccessToken(_token);

      dispatch({ type: "SET_TOKEN", token: _token });

      // 🔹 Fetch User Data
      spotify.getMe()
        .then((user) => {
          console.log("User Data:", user);
          dispatch({ type: "SET_USER", user });
        })
        .catch((error) => console.error("Error fetching user data:", error));

      // 🔹 Fetch User Playlists
      spotify.getUserPlaylists()
  .then((playlists) => {
    console.log("Fetched Playlists:", playlists);
    if (playlists.items.length === 0) {
      console.warn("⚠️ No playlists available for this user.");
    }
    dispatch({ type: "SET_PLAYLISTS", playlists });
  })
  .catch((error) => console.error("Error fetching playlists:", error));

      // 🔹 Fetch Discover Weekly (Replace ID if necessary)
      const playlistId = "37i9dQZF1DXcBWIGoYBM5M"; // Replace if needed
      spotify.getPlaylist(playlistId)
        .then((response) => {
          console.log("Discover Weekly:", response);
          dispatch({ type: "SET_DISCOVER_WEEKLY", discover_weekly: response });
        })
        .catch((error) => {
          console.error("Error fetching Discover Weekly:", error);
          console.log("Check if playlist ID is valid or if token has expired.");
        });

      // 🔹 Fetch Top Artists
      spotify.getMyTopArtists()
        .then((response) => {
          console.log("Top Artists:", response);
          dispatch({ type: "SET_TOP_ARTISTS", top_artists: response });
        })
        .catch((error) => console.error("Error fetching top artists:", error));

      // Save Spotify instance
      dispatch({ type: "SET_SPOTIFY", spotify });
    }
  }, []); // ✅ Removed 'token' dependency to avoid multiple calls

  return (
    <div className="app">
      {!token ? <Login /> : <Player spotify={spotify} />}
    </div>
  );
}

export default App;