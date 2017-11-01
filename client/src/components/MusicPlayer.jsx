import React, { Component } from 'react';

import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton'
import PlayArrowIcon from 'material-ui-icons/PlayArrow';
import PauseIcon from 'material-ui-icons/Pause';
import SkipNextIcon from 'material-ui-icons/SkipNext';
import SkipPreviousIcon from 'material-ui-icons/SkipPrevious';

const MusicPlayer = ({ currentSong }) => {
  console.log(currentSong);
  var boxShadow = '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)'
  return (
  <Paper style={{width: '100%'}}>
    <Grid container>
      <Grid item xs={0}>
        <img src={currentSong.albumArt} style={{width: 100, height: 100, boxShadow: boxShadow, marginLeft: 8, marginBottom: 6}}></img>
        <IconButton style={{height: 75, width: 75, position: 'relative', marginLeft: -88, top: -16, borderRadius: 0}}>
          {
            currentSong.isPlaying &&
              <PauseIcon style={{height: 75, width: 75,  fill: 'rgba(137, 137, 137, 0.75)'}} />

            ||

              <PlayArrowIcon style={{height: 75, width: 75,  fill: 'rgba(137, 137, 137, 0.75)'}} />
          }
        </IconButton>
      </Grid>
      <Grid item style={{flex: '1', paddingRight: 20, paddingTop: 24}}>
        <Grid container direction="column" spacing={0}>
          <Grid item />
          <Grid item xs={0}>
            <Typography type="title">{currentSong.title}</Typography>
          </Grid>
          <Grid item xs={0}>
            <Typography>{currentSong.artist}</Typography>
          </Grid>
          <Grid item xs={0}>
            <Grid container spacing={0}>
              <Grid item style={{flex: '0 1 auto'}}>
                <SkipPreviousIcon />
              </Grid>
              <Grid item style={{flex: '1 0 auto'}}>
                <div style={{width: '100%', height: 3, background: 'blue', position: 'relative', top: 11}} />
              </Grid>
              <Grid item style={{flex: '0 1 auto'}}>
                <SkipNextIcon />
              </Grid>
            </Grid>
          </Grid>
          <Grid item />
        </Grid>
      </Grid>
    </Grid>
  </Paper>
);
}

export default MusicPlayer;


<Typography>Here is my message</Typography>

