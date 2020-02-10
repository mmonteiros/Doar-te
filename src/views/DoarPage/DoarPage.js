import React, { useEffect } from 'react';
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
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import CardHeader from "components/Card/CardHeader.js";

import camiseta from "assets/img/examples/camiseta.jpg";
import calca from "assets/img/examples/calca.jpg";

import useStyles from "assets/jss/material-kit-react/views/doarPage";

export default function DoarPage(props) {

  const classes = useStyles();

  const { ...rest } = props;

  const [register, setRegister] = React.useState([]);
  
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

  useEffect(() => {
    firebase.db.collection("camisas").orderBy('name').get().then(querySnapshot => 
          querySnapshot.docs.map(doc => {
            let data = doc.data()
            return {
              name: data.name,
              email: data.email,
            }
          })
         )
        .then(users => setRegister(users))
  });

  if(!firebase.getCurrentUsername()) {
		// not logged in
		props.history.replace('/')
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
          <Grid item color="transparent"  xs={12}>
            <Card color="primary">
              <CardHeader color="white" >
              <br/>
              <h3 align="center">Aqui temos os itens, cliclando neles você poderá contactar as instituições pelo e-mail</h3>
              </CardHeader>
            </Card>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Tooltip TransitionComponent={Zoom} title="Camisa">
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
                    title="Camisa"
                  />
                </CardActionArea>
              </Card>
              </Tooltip>
          </Grid>
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
                    {register.map (item => (
                      <ListItem>
                        <ListItemAvatar>
                        <Avatar>
                          <ImageIcon />
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={"Nome:" + item.name} secondary={"E-mail:" +item.email} />
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
        <Grid container spacing={3}>
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
                    image={calca}
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