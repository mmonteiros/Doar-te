import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import firebase from "../../firebase/firebase";

// core components
import Header from "components/Header/Header.js";
import HeaderLinksUser from "components/Header/HeaderLinksUser";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Modal from '@material-ui/core/Modal';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

import camiseta from "assets/img/examples/camiseta.jpg";
import calca from "assets/img/examples/calca.jpg";

import useStyles from "assets/jss/material-kit-react/views/doarPage";

export default function ReceberPage(props) {

  const list = [
    {
      id: 'a',
      firstname: 'Robin',
      lastname: 'Wieruch',
      email: "robin@gmail.com",
    },
    {
      id: 'b',
      firstname: 'Dave',
      lastname: 'Davidds',
      email: "dave@gmail.com",
    },
  ];

  const classes = useStyles();

  const { ...rest } = props;
  
  const [open, setOpen] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const openPopever = Boolean(anchorEl);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  if(!firebase.getCurrentUsername()) {
		// not logged in
		alert('Please login first')
		props.history.replace('/login')
		return null
  }

  return (
    <div>
      <Header
        absolute
        color=""
        brand="Doar te"
        rightLinks={<HeaderLinksUser />}
        {...rest}
      />
      <div className={classes.root, classes.main, classes.mainRaised}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>xs=12</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
          <Card
          aria-owns={open ? 'mouse-over-popover' : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose} 
          onClick={handleOpen}
          className={classes.card, classes.main, classes.mainRaised}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={camiseta}
                title="Contemplative Reptile"
              />
            </CardActionArea>
          </Card>
          </Grid>
          <Popover
            id="mouse-over-popover"
            className={classes.popover}
            classes={{
              paper: classes.paper,
            }}
            open={openPopever}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
          >
            <Typography>I use Popover.</Typography>
          </Popover>
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={open}
            onClose={handleClose}
            className={classes.modal}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paperModal}>
                <h2 id="simple-modal-title" align="center" > Camisetas </h2>
                <List id="simple-modal-description" className={classes.rootList}> 
                    {list.map (item => (
                      <ListItem>
                        <ListItemAvatar>
                        <Avatar>
                          <ImageIcon />
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={item.firstname} secondary={item.email} />
                      </ListItem>
                    ))}     
                </List>
              </div>
            </Fade>
          </Modal>
          <Grid item xs={6} sm={3}>
            <Card 
            onClick={handleOpen}
            className={classes.card, classes.main, classes.mainRaised}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={calca}
                  title="Contemplative Reptile"
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Card 
            onClick={handleOpen}
            className={classes.card, classes.main, classes.mainRaised}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={camiseta}
                  title="Contemplative Reptile"
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Card 
            onClick={handleOpen}
            className={classes.card, classes.main, classes.mainRaised}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={camiseta}
                  title="Contemplative Reptile"
                />
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}