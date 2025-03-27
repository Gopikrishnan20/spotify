(this["webpackJsonpspotify-clone"]=this["webpackJsonpspotify-clone"]||[]).push([[0],{155:function(e,t,a){e.exports=a(451)},159:function(e,t,a){},160:function(e,t,a){},166:function(e,t,a){},167:function(e,t,a){},168:function(e,t,a){},169:function(e,t,a){},170:function(e,t,a){},171:function(e,t,a){},172:function(e,t,a){},173:function(e,t,a){},451:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(16),r=a.n(l),o=(a(159),a(24)),i=a(131),s=a.n(i),u=Object(n.createContext)(),m=function(e){var t=e.reducer,a=e.initialState,l=e.children;return c.a.createElement(u.Provider,{value:Object(n.useReducer)(t,a)},l)},p=function(){return Object(n.useContext)(u)},E=a(138),y=a.n(E),f=a(132),d=a.n(f),_=a(139),v=a.n(_),g=a(141),b=a.n(g),T=a(137),S=a.n(T),h=a(140),N=a.n(h),O=(a(160),a(465)),k=a(466);var I=function(e){var t=e.spotify,a=p(),l=Object(o.a)(a,2),r=l[0],i=r.item,s=r.playing,u=l[1];Object(n.useEffect)((function(){t.getMyCurrentPlaybackState().then((function(e){console.log(e),u({type:"SET_PLAYING",playing:e.is_playing}),u({type:"SET_ITEM",item:e.item})}))}),[t]);var m=function(){s?(t.pause(),u({type:"SET_PLAYING",playing:!1})):(t.play(),u({type:"SET_PLAYING",playing:!0}))};return c.a.createElement("div",{className:"footer"},c.a.createElement("div",{className:"footer__left"},c.a.createElement("img",{className:"footer__albumLogo",src:null===i||void 0===i?void 0:i.album.images[0].url,alt:null===i||void 0===i?void 0:i.name}),i?c.a.createElement("div",{className:"footer__songInfo"},c.a.createElement("h4",null,i.name),c.a.createElement("p",null,i.artists.map((function(e){return e.name})).join(", "))):c.a.createElement("div",{className:"footer__songInfo"},c.a.createElement("h4",null,"No song is playing"),c.a.createElement("p",null,"..."))),c.a.createElement("div",{className:"footer__center"},c.a.createElement(d.a,{onClick:function(){t.skipToNext(),t.getMyCurrentPlayingTrack().then((function(e){u({type:"SET_ITEM",item:e.item}),u({type:"SET_PLAYING",playing:!0})}))},className:"footer__icon"}),s?c.a.createElement(S.a,{onClick:m,fontSize:"large",className:"footer__icon"}):c.a.createElement(y.a,{onClick:m,fontSize:"large",className:"footer__icon"}),c.a.createElement(v.a,{token:!0,onClick:function(){t.skipToPrevious(),t.getMyCurrentPlayingTrack().then((function(e){u({type:"SET_ITEM",item:e.item}),u({type:"SET_PLAYING",playing:!0})}))},className:"footer__icon"})),c.a.createElement("div",{className:"footer__right"},c.a.createElement(O.a,{container:!0,spacing:2},c.a.createElement(O.a,{item:!0},c.a.createElement(N.a,null)),c.a.createElement(O.a,{item:!0},c.a.createElement(b.a,null)),c.a.createElement(O.a,{item:!0,xs:!0},c.a.createElement(k.a,{"aria-labelledby":"continuous-slider"})))))};a(166),a(167),a(168);var j=function(e){var t=e.option,a=void 0===t?"test":t,n=e.Icon;return c.a.createElement("div",{className:"sidebarOption"},n&&c.a.createElement(n,{className:"sidebarOption__icon"}),n?c.a.createElement("h4",null,a):c.a.createElement("p",null,a))},P=a(142),w=a.n(P),L=a(58),Y=a.n(L),A=a(143),C=a.n(A),M="".concat("https://accounts.spotify.com/authorize","?client_id=").concat("5ce599426a594b37a5b3342b89b0b222","&redirect_uri=").concat("https://spotify-clone-gopi.netlify.app/","&scope=").concat(["user-read-currently-playing","user-read-recently-played","user-read-playback-state","user-top-read","user-modify-playback-state"].join("%20"),"&response_type=token&show_dialog=true");var R=function(){var e,t=p(),a=Object(o.a)(t,2),n=a[0].playlists;return a[1],console.log(n),c.a.createElement("div",{className:"sidebar"},c.a.createElement("img",{className:"sidebar__logo",src:"https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg",alt:""}),c.a.createElement(j,{Icon:w.a,option:"Home"}),c.a.createElement(j,{Icon:Y.a,option:"Search"}),c.a.createElement(j,{Icon:C.a,option:"Your Library"}),c.a.createElement("br",null),c.a.createElement("strong",{className:"sidebar__title"},"PLAYLISTS"),c.a.createElement("hr",null),null===n||void 0===n||null===(e=n.items)||void 0===e?void 0:e.map((function(e){return c.a.createElement(j,{option:e.name})})))},x=(a(169),a(170),a(467));var G=function(e){e.spotify;var t=p(),a=Object(o.a)(t,2),n=a[0].user;return a[1],c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"header__left"},c.a.createElement(Y.a,null),c.a.createElement("input",{placeholder:"Search for Artists, Songs, or Podcasts ",type:"text"})),c.a.createElement("div",{className:"header__right"},c.a.createElement(x.a,{alt:null===n||void 0===n?void 0:n.display_name,src:c.a.createElement(x.a,null)}),c.a.createElement("h4",null,null===n||void 0===n?void 0:n.display_name)))};a(171);var W=function(e){var t=e.track,a=e.playSong;return c.a.createElement("div",{className:"songRow",onClick:function(){return a(t.id)}},c.a.createElement("img",{className:"songRow__album",src:t.album.images[0].url,alt:""}),c.a.createElement("div",{className:"songRow__info"},c.a.createElement("h1",null,t.name),c.a.createElement("p",null,t.artists.map((function(e){return e.name})).join(", ")," -"," ",t.album.name)))},z=a(144),F=a.n(z),U=a(145),D=a.n(U),K=a(146),V=a.n(K);var J=function(e){var t=e.spotify,a=p(),n=Object(o.a)(a,2),l=n[0].discover_weekly,r=n[1],i=function(e){t.play({uris:["spotify:track:".concat(e)]}).then((function(e){t.getMyCurrentPlayingTrack().then((function(e){r({type:"SET_ITEM",item:e.item}),r({type:"SET_PLAYING",playing:!0})}))}))};return c.a.createElement("div",{className:"body"},c.a.createElement(G,{spotify:t}),c.a.createElement("div",{className:"body__info"},c.a.createElement("img",{src:null===l||void 0===l?void 0:l.images[0].url,alt:""}),c.a.createElement("div",{className:"body__infoText"},c.a.createElement("strong",null,"PLAYLIST"),c.a.createElement("h2",null,"Discover Weekly"),c.a.createElement("p",null,null===l||void 0===l?void 0:l.description))),c.a.createElement("div",{className:"body__songs"},c.a.createElement("div",{className:"body__icons"},c.a.createElement(F.a,{className:"body__shuffle",onClick:function(e){t.play({context_uri:"spotify:playlist:37i9dQZEVXcJZyENOWUFo7"}).then((function(e){t.getMyCurrentPlayingTrack().then((function(e){r({type:"SET_ITEM",item:e.item}),r({type:"SET_PLAYING",playing:!0})}))}))}}),c.a.createElement(D.a,{fontSize:"large"}),c.a.createElement(V.a,null)),null===l||void 0===l?void 0:l.tracks.items.map((function(e){return c.a.createElement(W,{playSong:i,track:e.track})}))))};var Q=function(e){var t=e.spotify;return c.a.createElement("div",{className:"player"},c.a.createElement("div",{className:"player__body"},c.a.createElement(R,null),c.a.createElement(J,{spotify:t})),c.a.createElement(I,{spotify:t}))};a(172),a(173);var Z=function(){return c.a.createElement("div",{className:"login"},c.a.createElement("img",{src:"https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg",alt:""}),c.a.createElement("a",{href:M},"LOGIN TO SPOTIFY"))},B=new s.a;var H=function(){var e=p(),t=Object(o.a)(e,2),a=t[0].token,l=t[1];return Object(n.useEffect)((function(){var e=window.location.hash.substring(1).split("&").reduce((function(e,t){var a=t.split("=");return e[a[0]]=decodeURIComponent(a[1]),e}),{});window.location.hash="";var t=e.access_token;t&&(B.setAccessToken(t),l({type:"SET_TOKEN",token:t}),B.getPlaylist("37i9dQZF1DX1i3hvzHpcQV").then((function(e){return l({type:"SET_DISCOVER_WEEKLY",discover_weekly:e})})),B.getMyTopArtists().then((function(e){return l({type:"SET_TOP_ARTISTS",top_artists:e})})),l({type:"SET_SPOTIFY",spotify:B}),B.getMe().then((function(e){l({type:"SET_USER",user:e})})),B.getUserPlaylists().then((function(e){l({type:"SET_PLAYLISTS",playlists:e})})))}),[a,l]),c.a.createElement("div",{className:"app"},!a&&c.a.createElement(Z,null),a&&c.a.createElement(Q,{spotify:B}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X=a(6),$=(a(174),function(e,t){switch(t.type){case"SET_USER":return Object(X.a)(Object(X.a)({},e),{},{user:t.user});case"SET_PLAYING":return Object(X.a)(Object(X.a)({},e),{},{playing:t.playing});case"SET_ITEM":return Object(X.a)(Object(X.a)({},e),{},{item:t.item});case"SET_DISCOVER_WEEKLY":return Object(X.a)(Object(X.a)({},e),{},{discover_weekly:t.discover_weekly});case"SET_TOP_ARTISTS":return Object(X.a)(Object(X.a)({},e),{},{top_artists:t.top_artists});case"SET_TOKEN":return Object(X.a)(Object(X.a)({},e),{},{token:t.token});case"SET_SPOTIFY":return Object(X.a)(Object(X.a)({},e),{},{spotify:t.spotify});case"SET_PLAYLISTS":return Object(X.a)(Object(X.a)({},e),{},{playlists:t.playlists});default:return e}});r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,{initialState:{user:null,playlists:[],spotify:null,discover_weekly:null,top_artists:null,playing:!1,item:null},reducer:$},c.a.createElement(H,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[155,1,2]]]);
//# sourceMappingURL=main.53e35133.chunk.js.map