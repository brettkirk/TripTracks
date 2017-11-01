import React, { Component } from 'react';

import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';

import MusicPlayer from './components/MusicPlayer.jsx';
import Profile from './components/Profile.jsx';
import MusicQueue from './components/MusicQueue.jsx';
import Playlists from './components/Playlists.jsx';

const App = ({  }) => {
  var headerStyle = {
    position: 'sticky',
    position: '-webkit-sticky',
    top: 0,
    width: '100%'
  }
  var user = {
    username: 'brett_kirk',
    profileImageSrc: '/images/app/avatar.png',
    name: 'Brett Kirk'
  }
  var song = {
    title: 'Song Title',
    artist: 'Artist Name',
    isPlaying: false,
    albumArt: '/images/app/albumArt.png'
  }
  var showQueue = true;

  return (
  <div>
    <div style={headerStyle}>
      <Profile user={user} style={{zIndex: 10}} />
    </div>
      {
        showQueue &&
        <MusicQueue />

        ||

        <Playlists />
      }
    <div style={{position: 'fixed', bottom: 0, width: '100%'}}>
      <MusicPlayer currentSong={song} />
    </div>
  </div>
);
}

export default App;
