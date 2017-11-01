import React, { Component } from 'react';

import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

import MusicQueueItem from './MusicQueueItem.jsx';

const MusicQueue = ({  }) => {
  return (
    <Grid container spacing={0} justify={'flex-start'} style={{paddingTop: 14, paddingBottom: 110}}>
      <Grid item xs={12} style={{width: '100%'}}>
        <MusicQueueItem />
      </Grid>
      <Grid item xs={12} style={{width: '100%'}}>
        <MusicQueueItem />
      </Grid>
      <Grid item xs={12} style={{width: '100%'}}>
        <MusicQueueItem />
      </Grid>
      <Grid item xs={12} style={{width: '100%'}}>
        <MusicQueueItem />
      </Grid>
      <Grid item xs={12} style={{width: '100%'}}>
        <MusicQueueItem />
      </Grid>
      <Grid item xs={12} style={{width: '100%'}}>
        <MusicQueueItem />
      </Grid>
      <Grid item xs={12} style={{width: '100%'}}>
        <MusicQueueItem />
      </Grid>
      <Grid item xs={12} style={{width: '100%'}}>
        <MusicQueueItem />
      </Grid>
      <Grid item xs={12} style={{width: '100%'}}>
        <MusicQueueItem />
      </Grid>
      <Grid item xs={12} style={{width: '100%'}}>
        <MusicQueueItem />
      </Grid>
      <Grid item xs={12} style={{width: '100%'}}>
        <MusicQueueItem />
      </Grid>
      <Grid item xs={12} style={{width: '100%'}}>
        <MusicQueueItem />
      </Grid>
      <Grid item xs={12} style={{width: '100%'}}>
        <MusicQueueItem />
      </Grid>
      <Grid item xs={12} style={{width: '100%'}}>
        <MusicQueueItem />
      </Grid>
    </Grid>
);
}

export default MusicQueue;
