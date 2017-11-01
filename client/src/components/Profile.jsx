import React, { Component } from 'react';

import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';

const Profile = ({ user }) => {
  return (
  <div>
    <Paper style={{minHeight: 130, maxHeight: 230, height: '31vmin'}}>
      <Grid container justify='center' alignItems='center' style={{minHeight: 100, maxHeight: 200, height: '25vmin'}}>
        <Grid item>
          <Avatar 
            alt={user.name}
            src={user.profileImageSrc}
            style={{width: '20vmin', height: '20vmin', minWidth: 80, minHeight: 80, maxWidth: 160, maxHeight: 160}}
          />
        </Grid>
        <Grid item>
          <Grid container>
            <Grid item xs={12} style={{padding: 0, marginLeft: 8}}>
              <Typography type="display1">{user.name}</Typography>
            </Grid>
            <Grid item xs={12} style={{padding: 0, marginLeft: 8}}>
              <Typography type="subheading">@{user.username}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div style={{height: 30, width: '100%', position: 'absolute', bottom: 8}}>
        <Divider style={{marginTop: 4, marginBottom: 5}} />
        <Typography type='title' style={{paddingLeft: 5}}>Back</Typography>
      </div>
    </Paper>
  </div>
);
}

export default Profile;
