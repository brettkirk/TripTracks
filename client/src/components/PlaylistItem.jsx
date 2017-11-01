import React, { Component } from 'react';

import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

const PlaylistItem = ({  }) => {

  var currentSong = {
    title: 'Song Title',
    artist: 'Artist Name',
    isPlaying: true,
    albumArt: '/images/app/albumArt.png'
  }

  return (
    <Paper>
      <img src={currentSong.albumArt} style={{width: '100%'}}></img>
      <div style={{position: 'relative', marginTop: -24, background: 'rgba(255,255,255,0.5)'}}>
        <Typography align='center'>Playlist Name</Typography>
      </div>
    </Paper>
);
}

export default PlaylistItem;
