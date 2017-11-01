import React, { Component } from 'react';

import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Hidden from 'material-ui/Hidden';

import PlaylistItem from './PlaylistItem.jsx'

const Playlists = ({  }) => {
  return (
    <Grid container spacing={16} justify={'center'} className="App">
      <Hidden smDown>
        <Grid item md={2} xl={3} />
      </Hidden>
      <Grid item xs={12} md={8} xl={6}>
        <Grid container spacing={16} justify={'flex-start'} style={{padding: 16, paddingBottom: 120}}>
          <Grid item xs={4} md={3} lg={2} style={{width: '100%'}}>
            <PlaylistItem />
          </Grid>
          <Grid item xs={4} md={3} lg={2} style={{width: '100%'}}>
            <PlaylistItem />
          </Grid>
          <Grid item xs={4} md={3} lg={2} style={{width: '100%'}}>
            <PlaylistItem />
          </Grid>
          <Grid item xs={4} md={3} lg={2} style={{width: '100%'}}>
            <PlaylistItem />
          </Grid>
          <Grid item xs={4} md={3} lg={2} style={{width: '100%'}}>
            <PlaylistItem />
          </Grid>
          <Grid item xs={4} md={3} lg={2} style={{width: '100%'}}>
            <PlaylistItem />
          </Grid>
          <Grid item xs={4} md={3} lg={2} style={{width: '100%'}}>
            <PlaylistItem />
          </Grid>
          <Grid item xs={4} md={3} lg={2} style={{width: '100%'}}>
            <PlaylistItem />
          </Grid>
          <Grid item xs={4} md={3} lg={2} style={{width: '100%'}}>
            <PlaylistItem />
          </Grid>
          <Grid item xs={4} md={3} lg={2} style={{width: '100%'}}>
            <PlaylistItem />
          </Grid>
          <Grid item xs={4} md={3} lg={2} style={{width: '100%'}}>
            <PlaylistItem />
          </Grid>
          <Grid item xs={4} md={3} lg={2} style={{width: '100%'}}>
            <PlaylistItem />
          </Grid>
          <Grid item xs={4} md={3} lg={2} style={{width: '100%'}}>
            <PlaylistItem />
          </Grid>
          <Grid item xs={4} md={3} lg={2} style={{width: '100%'}}>
            <PlaylistItem />
          </Grid>
          <Grid item xs={4} md={3} lg={2} style={{width: '100%'}}>
            <PlaylistItem />
          </Grid>
          <Grid item xs={4} md={3} lg={2} style={{width: '100%'}}>
            <PlaylistItem />
          </Grid>
          <Grid item xs={4} md={3} lg={2} style={{width: '100%'}}>
            <PlaylistItem />
          </Grid>
          <Grid item xs={4} md={3} lg={2} style={{width: '100%'}}>
            <PlaylistItem />
          </Grid>
          <Grid item xs={4} md={3} lg={2} style={{width: '100%'}}>
            <PlaylistItem />
          </Grid>
          <Grid item xs={4} md={3} lg={2} style={{width: '100%'}}>
            <PlaylistItem />
          </Grid>
          <Grid item xs={4} md={3} lg={2} style={{width: '100%'}}>
            <PlaylistItem />
          </Grid>
          <Grid item xs={4} md={3} lg={2} style={{width: '100%'}}>
            <PlaylistItem />
          </Grid>
          <Grid item xs={4} md={3} lg={2} style={{width: '100%'}}>
            <PlaylistItem />
          </Grid>
          <Grid item xs={4} md={3} lg={2} style={{width: '100%'}}>
            <PlaylistItem />
          </Grid>
        </Grid>
      </Grid>
      <Hidden smDown>
        <Grid item md={2} xl={3} />
      </Hidden>
    </Grid>
);
}

export default Playlists;
