import React, { Component } from 'react';

import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

const MusicQueueItem = ({  }) => {
  var boxShadow = '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)'

  var currentSong = {
    title: 'Song Title',
    artist: 'Artist Name',
    isPlaying: true,
    albumArt: '/images/app/albumArt.png'
  }

  return (
    <Paper style={{width: '100%'}}>
      <Grid container>
        <Grid item xs={0}>
          <img src={currentSong.albumArt} style={{width: 100, height: 100, marginTop: -4, marginBottom: 8, marginLeft: 4, boxShadow: boxShadow}}></img>
        </Grid>
        <Grid item style={{flex: '1', paddingRight: 20, paddingTop: 30}}>
          <Grid container direction="column" spacing={0}>
            <Grid item />
            <Grid item xs={0}>
              <Typography type="title">{currentSong.title}</Typography>
            </Grid>
            <Grid item xs={0}>
              <Typography>{currentSong.artist}</Typography>
            </Grid>
            <Grid item />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
);
}

export default MusicQueueItem;
